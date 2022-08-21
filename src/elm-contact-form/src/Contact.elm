port module Contact exposing (Model, Msg, initialModel, subscriptions, update, view)

import Atom
import Atom.Font as Font
import Base64.Decode as Base64
import Browser.Dom as Dom
import Browser.Events
import Color exposing (..)
import Element exposing (..)
import Element.Background as Background
import Element.Border as Border
import Element.Events exposing (..)
import Element.Font as Font
import Element.Input as Input
import Error exposing (Error)
import File exposing (File)
import File.Select as Select
import Form.Checkbox
import Form.Decoder as Decoder exposing (Decoder)
import Form.Decoder.Extra as Decoder
import Form.Input
import Html
import Html.Attributes as Attributes exposing (style)
import Html.Events
import Http
import HttpBuilder
import Icon
import Inquiry.Content as Content exposing (Content)
import Inquiry.Email as Email exposing (Email)
import Inquiry.Kana as Kana exposing (Kana)
import Inquiry.Name as Name exposing (Name)
import Inquiry.Tel as Tel exposing (Tel)
import Json.Decode as Json
import Json.Encode as Encode
import Parser
import ParserEmail
import Parsers
import Spinner
import Task



{-
   https://www.fukudaroad.co.jp/contact/form/
-}


port resize : Encode.Value -> Cmd msg


port resizedImages : (Encode.Value -> msg) -> Sub msg


acceptedFileTypes : List String
acceptedFileTypes =
    [ "image/jpeg", "image/gif", "image/png" ]


type alias Contact =
    { name : Name
    , kana : Kana
    , email : Email
    , tel : Maybe Tel
    , content : Content
    , images : List String
    , botField : String
    }


type alias ContactForm =
    { name : String
    , kana : String
    , email : String
    , tel : String
    , content : String
    , agreement : Bool
    , images : List String
    , botField : String
    }


init : ContactForm
init =
    { name = ""
    , kana = ""
    , email = ""
    , tel = ""
    , content = ""
    , agreement = False
    , images = []
    , botField = ""
    }


type PageState
    = Editting
    | Confirming Contact (Maybe String)
    | Sent Response


type alias Model =
    { form : ContactForm
    , sending : Bool
    , hover : Bool
    , modal : Maybe ( Int, String )
    , submitted : Bool
    , pageState : PageState
    }


initialModel : Model
initialModel =
    { form = init
    , sending = False
    , hover = False
    , modal = Nothing
    , submitted = False
    , pageState = Editting
    }



-- Form Decoder


decoder : Decoder ContactForm Error Contact
decoder =
    Decoder.with <|
        \form ->
            if form.agreement then
                Decoder.top Contact
                    |> Decoder.field decoderName
                    |> Decoder.field decoderKana
                    |> Decoder.field decoderEmail
                    |> Decoder.field decoderTel
                    |> Decoder.field decoderContent
                    |> Decoder.field decoderImages
                    |> Decoder.field (Decoder.lift .botField Decoder.identity)

            else
                Decoder.fail (Error.invalid "同意が必要です")


decoderName : Decoder ContactForm Error Name
decoderName =
    Name.decoder
        |> Decoder.lift .name


decoderKana : Decoder ContactForm Error Kana
decoderKana =
    Kana.decoder
        |> Decoder.lift .kana


decoderEmail : Decoder ContactForm Error Email
decoderEmail =
    Email.decoder
        |> Decoder.lift .email


decoderTel : Decoder ContactForm Error (Maybe Tel)
decoderTel =
    Tel.decoder
        |> Decoder.lift .tel


decoderContent : Decoder ContactForm Error Content
decoderContent =
    Content.decoder
        |> Decoder.lift .content


decoderImages : Decoder ContactForm Error (List String)
decoderImages =
    Decoder.list decoderImageForm
        |> Decoder.assert (Decoder.maxLengthList (Error.invalid "添付可能な画像は10枚までです") 10)
        |> Decoder.lift .images


decoderImageForm : Decoder String Error String
decoderImageForm =
    Decoder.identity



-- Msg


type Msg
    = ClickedConfirm
    | ClickedBack
    | ClickedSend Contact
    | ClickedResend
    | SentMail Contact (Result Http.Error Response)
    | Pick
    | DragEnter
    | DragLeave
    | GotFiles File (List File)
    | GotPreviews (List String)
    | GotResized Encode.Value
    | Remove Int
    | Enlarge Int
    | ClickedCloseModal
    | NoOp
    | ChangedName String
    | ChangedKana String
    | ChangedTel String
    | ChangedEmail String
    | ChangedContent String
    | ClickedAgreement Bool


update : Msg -> Model -> ( Model, Cmd Msg )
update msg ({ form } as model) =
    let
        setContactForm : ContactForm -> Model
        setContactForm f =
            { model | form = f }
    in
    case msg of
        ClickedConfirm ->
            case Decoder.run decoder model.form of
                Ok contact ->
                    ( { model | submitted = True, pageState = Confirming contact Nothing }
                    , Task.perform (\_ -> NoOp) (Dom.setViewport 0 0)
                    )

                Err _ ->
                    ( { model | submitted = True }, Cmd.none )

        ClickedBack ->
            ( { model | pageState = Editting }, Task.perform (\_ -> NoOp) (Dom.setViewport 0 0) )

        ClickedSend contact ->
            ( { model | sending = True }, sendMail contact )

        ClickedResend ->
            ( initialModel, Cmd.none )

        SentMail _ (Ok response) ->
            ( { model | pageState = Sent response, sending = False }, Task.perform (\_ -> NoOp) (Dom.setViewport 0 0) )

        SentMail contact (Err _) ->
            ( { model | pageState = Confirming contact (Just "通信エラーが発生しました"), sending = False }, Cmd.none )

        Pick ->
            ( model
            , Select.files acceptedFileTypes GotFiles
            )

        DragEnter ->
            ( { model | hover = True }
            , Cmd.none
            )

        DragLeave ->
            ( { model | hover = False }
            , Cmd.none
            )

        GotFiles file files ->
            let
                validFiles =
                    List.filter (\item -> List.any (\mime -> File.mime item == mime) acceptedFileTypes) (file :: files)
            in
            ( { model | hover = False }
            , Task.perform GotPreviews <|
                Task.sequence <|
                    List.map File.toUrl validFiles
            )

        GotPreviews urls ->
            ( setContactForm { form | images = List.take 10 <| form.images ++ List.repeat (List.length urls) "" }
            , resize <| Encode.list Encode.string urls
            )

        GotResized value ->
            case Json.decodeValue (Json.list Json.string) value of
                Ok urls ->
                    ( setContactForm { form | images = List.take 10 <| List.filter (\url -> url /= "") form.images ++ urls }
                    , Cmd.none
                    )

                Err _ ->
                    ( model, Cmd.none )

        Remove index ->
            ( setContactForm { form | images = List.take index form.images ++ List.drop (index + 1) form.images }
                |> (\m -> { m | modal = Nothing })
            , Cmd.none
            )

        Enlarge index ->
            ( { model | modal = List.drop index model.form.images |> List.head |> Maybe.map (\s -> ( index, s )) }, Cmd.none )

        ClickedCloseModal ->
            ( { model | modal = Nothing }, Cmd.none )

        NoOp ->
            ( model, Cmd.none )

        ChangedName v ->
            ( setContactForm { form | name = v }, Cmd.none )

        ChangedKana v ->
            ( setContactForm { form | kana = v }, Cmd.none )

        ChangedTel v ->
            ( setContactForm { form | tel = v }, Cmd.none )

        ChangedEmail v ->
            ( setContactForm { form | email = v }, Cmd.none )

        ChangedContent v ->
            ( setContactForm { form | content = v }, Cmd.none )

        ClickedAgreement b ->
            ( setContactForm { form | agreement = b }, Cmd.none )


type alias Response =
    String



--    { received : String
--    , messageId : String
--    }
-- responseDecoder : Json.Decoder Response
-- responseDecoder =
--     Json.map2 Response
--         (Json.field "Received" Json.string)
--         (Json.at [ "Data", "MessageId" ] Json.string)


sendMailOld : Contact -> Cmd Msg
sendMailOld contact =
    HttpBuilder.post "/"
        |> HttpBuilder.withUrlEncodedBody
            ([ ( "email", Email.toString contact.email )
             , ( "name", Name.toString contact.name )
             , ( "kana", Kana.toString contact.kana )
             , ( "tel", Maybe.withDefault "" <| Maybe.map Tel.toString contact.tel )
             , ( "content", Content.toString contact.content )
             , ( "body-field", "" )
             , ( "form-name", "contact" )
             ]
                ++ List.indexedMap (\index file -> ( "file" ++ String.padLeft 2 '0' (String.fromInt (index + 1)), file )) contact.images
            )
        |> HttpBuilder.withExpect (Http.expectString (SentMail contact))
        |> HttpBuilder.request


sendMail : Contact -> Cmd Msg
sendMail contact =
    Http.post
        { url = "/"
        , body =
            Http.multipartBody
                ([ Http.stringPart "email" (Email.toString contact.email)
                 , Http.stringPart "name" (Name.toString contact.name)
                 , Http.stringPart "kana" (Kana.toString contact.kana)
                 , Http.stringPart "tel" (Maybe.withDefault "" <| Maybe.map Tel.toString contact.tel)
                 , Http.stringPart "content" (Content.toString contact.content)
                 , Http.stringPart "body-field" ""
                 , Http.stringPart "form-name" "contact"
                 ]
                    ++ (contact.images
                            |> List.indexedMap (\index file -> ( "file" ++ String.padLeft 2 '0' (String.fromInt (index + 1)), file ))
                            |> List.filterMap base64ToFile
                       )
                )
        , expect = Http.expectString (SentMail contact)
        }


base64ToFile : ( String, String ) -> Maybe Http.Part
base64ToFile ( fileName, dataUrl ) =
    case String.split "," (String.dropLeft 5 dataUrl |> String.replace ";base64" "") of
        mime :: data :: _ ->
            Base64.decode Base64.bytes data
                |> Result.map
                    (\decoded ->
                        Http.bytesPart (fileName ++ ".jpg") mime decoded
                    )
                |> Result.toMaybe

        _ ->
            Nothing



-- SUBSCRIPTIONS --


subscriptions : Model -> Sub Msg
subscriptions model =
    case model.modal of
        Just _ ->
            -- Sub.batch [onEscape ClickedCloseModal NoOp
            -- , Browser.Events.onMouseDown (outsideTarget "overlay" ClickedCloseModal)]
            onEscape ClickedCloseModal NoOp

        _ ->
            resizedImages GotResized



-- VIEW --


errorField : Maybe String -> List (Attribute msg)
errorField maybeString =
    case maybeString of
        Just _ ->
            [ Border.color <| base red ]

        Nothing ->
            [ Border.color <| dark grey ]


errorTip : Maybe String -> Device -> Element msg
errorTip maybeString device =
    let
        err =
            el [ Font.color <| base red, Font.size Font.sm, height (fill |> minimum 16) ] <|
                Element.text <|
                    Maybe.withDefault "" maybeString
    in
    case device.class of
        Phone ->
            err

        _ ->
            row []
                [ el [ width (px 250) ] none
                , err
                ]


decoInputField : List (Attribute msg)
decoInputField =
    [ spacingXY 10 10, padding 5, width fill ]


labelTag : Color -> String -> Element msg
labelTag bgColor tag =
    el [ Font.size Font.sm, Font.color white, Background.color bgColor, paddingXY 4 4 ] (text tag)


labelAttrs device =
    case device.class of
        Phone ->
            [ Font.size Font.base, width fill ]

        _ ->
            [ Font.size Font.base, width (px 250), paddingXY 10 0, centerY ]


labelBase :
    { labelString : String
    , bgColor : Color
    , tag : String
    }
    -> Device
    -> Input.Label Msg
labelBase { labelString, bgColor, tag } device =
    let
        row_ =
            row
                [ spacingXY 4 0, width fill ]
                [ el [ alignLeft ] <| text labelString, el [ alignRight ] <| labelTag bgColor tag ]
    in
    case device.class of
        Phone ->
            Input.labelAbove (labelAttrs device) row_

        _ ->
            Input.labelLeft (labelAttrs device) row_


labelRequired : String -> Device -> Input.Label Msg
labelRequired l =
    labelBase { labelString = l, bgColor = light red, tag = "必須" }


labelOptional : String -> Device -> Input.Label Msg
labelOptional l =
    labelBase { labelString = l, bgColor = light teal, tag = "任意" }


view : Device -> Model -> Element Msg
view device model =
    let
        attrs =
            case device.class of
                Phone ->
                    [ width fill, centerX, spacing 16 ]

                _ ->
                    [ width (fill |> maximum 800), centerX, paddingXY 40 20, spacing 20 ]
    in
    column attrs <|
        viewTop model.pageState
            ++ (case model.pageState of
                    Editting ->
                        case model.modal of
                            Just ( index, image ) ->
                                [ viewOverlay (Remove index) image ] ++ viewForm device model

                            Nothing ->
                                viewForm device model

                    Confirming contact err ->
                        if model.sending then
                            [ viewLoading "" ]

                        else
                            viewConfirm device contact err

                    Sent response ->
                        viewSent response
               )


viewTop : PageState -> List (Element msg)
viewTop state =
    let
        base =
            [ padding 16, width fill, Font.center ]

        active =
            [ Font.color white, Background.color <| dark blue ] ++ base

        inactive =
            [ Font.color black, Background.color <| lighter grey ] ++ base

        header s =
            el [ Font.color <| Color.darkest Color.grey, Font.size Font.xl2 ] <| text s

        menu m1 m2 m3 =
            row [ spacing 16, width fill ]
                [ el m1 <| text "1.入力"
                , el m2 <| text "2.確認"
                , el m3 <| text "3.完了"
                ]
    in
    case state of
        Editting ->
            [ header "お問い合わせフォーム"
            , menu active inactive inactive
            ]

        Confirming contact stringMaybe ->
            [ header "お問い合わせ内容確認"
            , menu inactive active inactive
            ]

        Sent response ->
            [ header "送信完了"
            , menu inactive inactive active
            ]


viewForm : Device -> Model -> List (Element Msg)
viewForm device ({ form, submitted } as model) =
    let
        fieldError : (Error -> String) -> Decoder ContactForm Error a -> Maybe String
        fieldError errorToString d =
            case Decoder.run d form of
                Ok _ ->
                    Nothing

                Err errs ->
                    if submitted then
                        Just <| String.concat <| List.map errorToString <| errs

                    else
                        Nothing

        hasError : (Error -> Bool) -> List Error
        hasError cond =
            case Decoder.run decoder form of
                Ok _ ->
                    []

                Err errs ->
                    List.filter cond errs
    in
    [ el [] <| text "送信にあたっての注意"
    , Atom.horizontalDividerGradient { angle = 90, steps = [ Color.base Color.red, Color.light Color.grey ] }
    , paragraph [ Font.size Font.base ]
        [ text "お問い合わせ内容によっては、回答にお時間がかかる場合や、回答を差し控えさせていただく場合がございます。また、定休日、夏期休業および冬期休業期間は、翌営業日以降のご対応とさせていただきます。" ]
    , paragraph [ Font.size Font.base ]
        [ text "スマホなどでキャリアメールをご利用の場合、当社からの返信メールが受信できるように、当社のメールアドレス"
        , el [ Font.color <| dark teal, paddingXY 10 0 ] <| text "info@officeiko.co.jp"
        , text "を迷惑メールフィルタから除外してください。"
        ]
    , el [] <| text "お問い合わせ入力欄"
    , Atom.horizontalDividerGradient { angle = 90, steps = [ Color.base Color.red, Color.light Color.grey ] }
    , paragraph [ Font.size Font.base ]
        [ text "下記のフォームに必要事項をご記入のうえ、確認ボタンを押してください。"
        , labelTag (Color.light Color.red) "必須"
        , text "のついた項目は必ずご入力してください。"
        ]
    , Atom.horizontalDivider
    , Html.input [ Attributes.type_ "hidden", Attributes.name "bot-field" ] [] |> Element.html
    , column decoInputField
        [ Input.text
            (List.concat
                [ errorField <| fieldError Error.errorField decoderName
                , [ Border.rounded 0
                  , width <| fillPortion 2
                  ]
                ]
            )
            { onChange = ChangedName
            , text = form.name
            , placeholder = Just <| Input.placeholder [] (text "田中\u{3000}太郎")
            , label = labelRequired "お名前（漢字）" device
            }
        , errorTip (fieldError Error.errorField decoderName) device
        ]
    , Atom.horizontalDivider
    , column decoInputField
        [ Input.text
            (List.concat
                [ errorField <| fieldError Error.errorField decoderKana
                , [ Border.rounded 4
                  ]
                ]
            )
            { onChange = ChangedKana
            , text = form.kana
            , placeholder = Just <| Input.placeholder [] (text "たなか\u{3000}たろう")
            , label = labelRequired "お名前（ふりがな）" device
            }
        , errorTip (fieldError Error.errorField decoderKana) device
        ]
    , Atom.horizontalDivider
    , column decoInputField
        [ Input.text
            (List.concat
                [ errorField <| fieldError Error.errorField decoderTel
                , [ Border.rounded 4
                  ]
                ]
            )
            { onChange = ChangedTel
            , text = form.tel
            , placeholder = Just <| Input.placeholder [] (text "090-1234-5678")
            , label = labelOptional "電話番号" device
            }
        , errorTip (fieldError Error.errorField decoderTel) device
        ]
    , Atom.horizontalDivider
    , column decoInputField
        [ Input.email
            (List.concat
                [ errorField <| fieldError Error.errorField decoderEmail
                , [ Border.rounded 4
                  ]
                ]
            )
            { onChange = ChangedEmail
            , text = form.email
            , placeholder = Just <| Input.placeholder [] (text "tanaka@gmail.com")
            , label = labelRequired "メールアドレス" device
            }
        , errorTip (fieldError Error.errorField decoderEmail) device
        ]
    , Atom.horizontalDivider
    , column decoInputField
        [ Input.multiline
            (List.concat
                [ errorField <| fieldError Error.errorField decoderContent
                , [ Border.rounded 4
                  , height (px 200)
                  ]
                ]
            )
            { onChange = ChangedContent
            , text = form.content
            , placeholder = Nothing
            , label = labelRequired "内容" device
            , spellcheck = False
            }
        , errorTip (fieldError Error.errorField decoderContent) device
        ]
    , Atom.horizontalDivider
    , column (labelAttrs device)
        [ row
            [ Font.size Font.base, spacingXY 4 0, centerY, width fill ]
            [ el [ alignLeft ] <| text "画像", el [ alignRight ] <| labelTag (light teal) "任意" ]
        , paragraph [ width fill, Font.size Font.sm, Font.color <| dark grey ] [ text "10枚まで添付可能です" ]
        ]
    , viewUpload device model
    , Atom.horizontalDivider
    , el [] <| text "個人情報のお取り扱いについて"
    , Atom.horizontalDividerGradient { angle = 90, steps = [ Color.base Color.red, Color.light Color.grey ] }
    , paragraph [ padding 5, width fill, Font.size Font.sm ]
        [ text "お送りいただいた個人情報は、お客様とのご連絡等の目的以外では使用致しません。当社の"
        , newTabLink [ Font.color <| Color.light Color.red ] { url = "/privacy", label = text "プライバシーポリシー" }
        , text "をご確認いただき、同意いただいた上でご送信ください。ご入力いただいた情報は暗号化されて送信されます。"
        ]
    , column decoInputField
        [ Input.checkbox [ width shrink, centerX ]
            { onChange = ClickedAgreement
            , icon = Input.defaultCheckbox
            , checked = form.agreement
            , label = Input.labelRight [] <| el [ Font.size Font.base ] <| text "プライバシーポリシーに同意する"
            }
        , errorTip
            (if form.agreement then
                Nothing

             else if not submitted then
                Nothing

             else
                Just "プラバシーポリシーへの同意が認められておりません。"
            )
            device
        ]
    , el [ centerX, padding 20 ] <|
        Input.button
            [ Background.color <| base teal
            , Border.rounded 4
            , Border.color <| base teal
            , Font.color white
            , paddingXY 20 10
            , width (px 256)
            ]
            { onPress = Just ClickedConfirm
            , label = el [ centerX ] <| text "確認"
            }
    ]


alwaysStopPropagate : msg -> ( msg, Bool )
alwaysStopPropagate msg =
    ( msg, True )


onEscape : msg -> msg -> Sub msg
onEscape action noop =
    Browser.Events.onKeyDown <|
        Json.map
            (\k ->
                case k of
                    "Escape" ->
                        action

                    _ ->
                        noop
            )
        <|
            Json.field "key" Json.string



-- outsideTarget : String -> msg -> Json.Decoder msg
-- outsideTarget overlayId action =
--     Json.field "target" (isOutsideOverlay overlayId)
--         |> Json.andThen
--             (\isOutside ->
--                 if isOutside then
--                     Json.succeed action
--                 else
--                     Json.fail "inside overlay"
--             )
-- isOutsideOverlay : String -> Json.Decoder Bool
-- isOutsideOverlay overlayId =
--     Json.oneOf
--         [ Json.field "id" Json.string
--             |> Json.andThen
--                 (\id ->
--                     if overlayId == id then
--                         Json.succeed False
--                     else
--                         Json.fail "continue"
--                 )
--         , Json.lazy (\_ -> isOutsideOverlay overlayId |> Json.field "parentNode")
--         , Json.succeed True
--         ]


viewOverlay : Msg -> String -> Element Msg
viewOverlay msg src =
    Html.div
        [ Attributes.class "fixed inset-0 z-50 overflow-auto bg-smoke-400 flex"

        -- , Html.Events.onClick ClickedCloseModal
        , Html.Events.stopPropagationOn "click" (Json.map alwaysStopPropagate (Json.succeed ClickedCloseModal))
        ]
        [ Html.div
            [ Attributes.class "relative p-8 bg-white w-full max-w-md m-auto flex-col flex"
            , Html.Events.stopPropagationOn "click" (Json.map alwaysStopPropagate (Json.succeed NoOp))
            ]
            [ Html.img [ Attributes.src src, Attributes.class "inline" ] []
            , Html.span
                [ Attributes.class "absolute top-0 right-0 p-4 cursor-pointer"
                , Html.Events.onClick ClickedCloseModal
                ]
                [ Icon.close ]
            , Html.span
                [ Attributes.class "absolute bottom-0 right-0 p-16 cursor-pointer"
                , Html.Events.onClick msg
                ]
                [ Html.div [ Attributes.class "bg-red-700 text-white hover:bg-red-500 border rounded shadow px-4 py-2" ] [ Html.text "削除" ] ]
            ]
        ]
        |> html


viewLoading : String -> Element Msg
viewLoading src =
    Html.div
        [ Attributes.class "fixed inset-0 z-50 overflow-auto bg-smoke-500 flex flex-col items-center justify-center"
        ]
        [ Html.div [ Attributes.class "py-4" ] [ Spinner.view "#F2D024" ]
        , Html.div [ Attributes.class "py-4 text-yellow-600 text-2xl" ] [ Html.text "送信中..." ]
        ]
        |> html


viewContact : Device -> Contact -> List (Element Msg)
viewContact device contact =
    let
        field labelString fieldString =
            case device.class of
                Phone ->
                    column [ spacingXY 0 16, width fill ]
                        [ el [ paddingXY 8 8, width fill, Background.color <| lighter blue ] <| text labelString
                        , paragraph [ paddingXY 8 0, width fill ] [ text fieldString ]
                        ]

                _ ->
                    row []
                        [ el [ width (px 250) ] <| text labelString
                        , paragraph [ width fill ] [ text fieldString ]
                        ]

        divider =
            case device.class of
                Phone ->
                    text ""

                _ ->
                    Atom.horizontalDivider
    in
    [ divider
    , field "お名前（漢字）" (Name.toString contact.name ++ "\u{3000}様")
    , divider
    , field "お名前（ふりがな）" (Kana.toString contact.kana)
    , divider
    , field "メールアドレス" (Email.toString contact.email)
    , divider
    , field "お電話番号" (contact.tel |> Maybe.map Tel.toString |> Maybe.withDefault "")
    , divider
    , field "内容" (Content.toString contact.content)
    , divider
    , wrappedRow [ spacing 4, centerX ] (List.map viewPreview contact.images)
    ]


viewPreview : String -> Element msg
viewPreview src =
    image [ width (px 140), height (px 140), Border.solid, Border.color <| light blue ] { src = src, description = "" }


viewConfirm : Device -> Contact -> Maybe String -> List (Element Msg)
viewConfirm device contact maybeString =
    case maybeString of
        Just errorString ->
            [ el
                [ Border.width 1
                , Border.color <| dark red
                , Border.rounded 4
                , paddingXY 4 10
                , spacing 8
                , width fill
                , Font.color <| dark red
                ]
                (el [ centerX ] <| text errorString)
            ]
                ++ viewContact device contact
                ++ [ el [ centerX, padding 20 ] <|
                        Input.button
                            [ Background.color <| dark grey
                            , Border.rounded 4
                            , Border.color <| dark grey
                            , Font.color white
                            , paddingXY 20 10
                            , width (px 256)
                            ]
                            { onPress = Just <| ClickedSend contact
                            , label = el [ centerX ] <| text "再度送信"
                            }
                   ]

        Nothing ->
            viewContact device contact
                ++ [ el [ centerX, Font.size Font.sm ] <| text "上記の内容でよろしければ送信ボタンを押してください"
                   , el [ centerX, Font.size Font.sm ] <| text "入力内容を修正する場合は修正ボタンを押してください"
                   , row [ centerX, width fill ]
                        [ el [ centerX, padding 20, width (fill |> maximum 256) ] <|
                            Input.button
                                [ Background.color <| dark grey
                                , Border.rounded 4
                                , Border.color <| dark grey
                                , Font.color white
                                , paddingXY 20 10
                                , width fill
                                ]
                                { onPress = Just ClickedBack
                                , label = el [ centerX ] <| text "修正"
                                }
                        , el [ centerX, padding 20, width (fill |> maximum 256) ] <|
                            Input.button
                                [ Background.color <| base teal
                                , Border.rounded 4
                                , Border.color <| base teal
                                , Font.color white
                                , paddingXY 20 10
                                , width fill
                                ]
                                { onPress = Just <| ClickedSend contact
                                , label = el [ centerX ] <| text "送信"
                                }
                        ]
                   ]


viewSent : Response -> List (Element Msg)
viewSent response =
    [ el [] <| text "お問い合わせありがとうございました"
    , el [] <| text <| "受信日時：" -- ++ response.received
    , paragraph [] [ text "お問い合わせ内容によっては、回答にお時間がかかる場合や、回答を差し控えさせていただく場合がございます。また、定休日、夏期休業および冬期休業期間は、翌営業日以降のご対応とさせていただきます。" ]
    , el [ centerX, padding 20 ] <|
        Input.button
            [ Background.color <| dark grey
            , Border.rounded 4
            , Border.color <| dark grey
            , Font.color white
            , paddingXY 20 10
            , width (px 256)
            ]
            { onPress = Just ClickedResend
            , label = el [ centerX ] <| text "もう一度送信"
            }
    ]


imageSize : Int
imageSize =
    128


viewUpload : Device -> Model -> Element Msg
viewUpload device model =
    let
        dropStyles =
            if model.hover then
                [ Border.color <| dark yellow
                , Background.color <| lighter yellow
                , scale 1.05
                ]

            else
                [ Border.color <| dark grey ]

        uploadButton l =
            Input.button
                [ width (px 256)
                , Border.color <| base teal
                , Border.width 2
                , Border.rounded 2
                , paddingXY 20 10
                , mouseOver [ Border.color <| base teal, Background.color <| base teal, Font.color white ]
                ]
                { onPress = Just Pick
                , label =
                    el [ centerX, Font.size Font.base ] <|
                        text l
                }
    in
    if model.form.images == [] then
        case device.class of
            Phone ->
                el [ centerX ] <|
                    uploadButton "画像のアップロード"

            _ ->
                el
                    ([ width fill
                     , height (px 256)
                     , Border.dashed
                     , Border.width 2
                     , spacing 10
                     , centerX
                     , centerY
                     , hijackOn "dragenter" (Json.succeed DragEnter) |> htmlAttribute
                     , hijackOn "dragover" (Json.succeed DragEnter) |> htmlAttribute
                     , hijackOn "dragleave" (Json.succeed DragLeave) |> htmlAttribute
                     , hijackOn "drop" dropDecoder |> htmlAttribute
                     ]
                        ++ dropStyles
                    )
                <|
                    column [ spacing 16, centerX, centerY ]
                        [ el [ centerX, Font.size Font.lg ] <| text "ドラッグアンドドロップ"
                        , uploadButton "画像のアップロード"
                        , el [ centerX, Font.size Font.sm ] <| text "10枚まで"
                        ]

    else
        wrappedRow [ width fill ] <|
            if List.length model.form.images >= 10 then
                List.indexedMap (viewPreviewFile device) model.form.images

            else
                let
                    restLabel =
                        "残り" ++ String.fromInt (10 - List.length model.form.images) ++ "枚登録可能"

                    uploader =
                        case device.class of
                            Phone ->
                                el [ centerX ] <|
                                    uploadButton restLabel

                            _ ->
                                el
                                    ([ hijackOn "dragenter" (Json.succeed DragEnter) |> htmlAttribute
                                     , hijackOn "dragover" (Json.succeed DragEnter) |> htmlAttribute
                                     , hijackOn "dragleave" (Json.succeed DragLeave) |> htmlAttribute
                                     , hijackOn "drop" dropDecoder |> htmlAttribute
                                     , width fill
                                     , padding 8
                                     ]
                                        ++ dropStyles
                                    )
                                <|
                                    Input.button
                                        [ width fill
                                        , height (px 160)
                                        , Border.dashed
                                        , Border.color <| dark grey
                                        , Border.width 2
                                        , mouseOver [ Border.color <| dark yellow ]
                                        ]
                                        { onPress = Just Pick
                                        , label =
                                            column [ centerX, Font.size Font.base ]
                                                [ text <| restLabel
                                                ]
                                        }
                in
                List.indexedMap (viewPreviewFile device) model.form.images
                    ++ [ uploader ]



-- Input.button
--     ([ width (px imageSize)
--      , height (px imageSize)
--      , Border.dashed
--      , Border.color <| dark grey
--      , Border.width 2
--      , mouseOver [ Border.color <| dark yellow ]
--      ]
--         ++ dropStyles
--     )
--     { onPress = Just Pick
--     , label =
--         column [ centerX, Font.size Font.base ]
--             [ text <| "あと" ++ String.fromInt (10 - List.length model.form.images) ++ "枚まで"
--             , text "登録出来ます"
--             ]
--     }


miniButtonStyle =
    [ width (px 40)
    , height (px 40)
    , Font.size Font.xl2
    , Font.color <| darkest grey
    , padding 4
    , Border.rounded 20
    , Border.width 1
    , Border.solid
    , Border.color <| base grey
    , Background.color <| base grey
    , mouseOver [ Font.color black, Background.color white, Border.color white ]
    ]


viewPreviewFile : Device -> Int -> String -> Element Msg
viewPreviewFile device index src =
    if src == "" then
        el
            [ width (px imageSize)
            , height (px imageSize)
            , Border.solid
            , Border.width 1
            ]
            (el
                [ centerX
                , centerY
                ]
                (Icon.loading 100 |> html)
            )

    else
        -- image
        --     [ width (px imageSize)
        --     , height (px imageSize)
        --     , onClick (Enlarge index)
        --     ]
        --     { src = src
        --     , description = ""
        --     }
        let
            imageCell w =
                Html.div [ Attributes.class (w ++ " p-1 text-center") ]
                    [ Html.img
                        [ Attributes.src src
                        , Attributes.class "object-contain"
                        , Attributes.style "height" "160px"
                        , Html.Events.onClick (Enlarge index)
                        ]
                        []
                    ]
                    |> Element.html
        in
        case device.class of
            Phone ->
                imageCell "w-1/2"

            _ ->
                imageCell "w-1/5"



--
--
--
-- el
--     [ width (px imageSize)
--     , height (px imageSize)
--     , inFront
--         (el
--             [ width (px imageSize)
--             , height (px imageSize)
--             , Background.color <| rgba 50 50 50 0.5
--             , transparent True
--             , mouseOver [ transparent False ]
--             , padding 10
--             ]
--          <|
--             row [ centerX, alignBottom, spacing 10 ]
--                 [ Input.button
--                     miniButtonStyle
--                     { onPress = Just (Remove index)
--                     , label = el [ centerX, centerY ] <| text "D"
--                     }
--                 , Input.button miniButtonStyle
--                     { onPress = Just (Enlarge index)
--                     , label = el [ centerX, centerY ] <| text "E"
--                     }
--                 ]
--         )
--     ]
--     (Html.img
--         [ style "width" <| String.fromInt imageSize ++ "px"
--         , style "height" <| String.fromInt imageSize ++ "px"
--         , Attributes.class "border border-black object-contain"
--         , Attributes.src src
--         ]
--         []
--         |> html
--     )


dropDecoder : Json.Decoder Msg
dropDecoder =
    Json.at [ "dataTransfer", "files" ] (Json.oneOrMore GotFiles File.decoder)


hijackOn : String -> Json.Decoder msg -> Html.Attribute msg
hijackOn e d =
    Html.Events.preventDefaultOn e (Json.map hijack d)


hijack : msg -> ( msg, Bool )
hijack msg =
    ( msg, True )
