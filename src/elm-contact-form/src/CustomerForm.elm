module CustomerForm exposing (view)

import Browser
import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder, Validator)
import Form.Decoder.Extra exposing (optional, required)
import Html exposing (..)
import Html.Attributes as A exposing (checked, class, disabled, for, id, type_, value)
import Html.Events exposing (onBlur, onClick, onInput)
import Zenkaku exposing (Zenkaku)


type Gender
    = Male
    | Female


type alias Customer =
    { nameSei : String
    , nameMei : Zenkaku
    , kanaSei : Zenkaku
    , kanaMei : Zenkaku

    -- , birthday : Date
    , gender : Gender
    }



-- Form Model


type alias CustomerForm =
    { nameSei : String
    , nameMei : String
    , kanaSei : String
    , kanaMei : String
    , birthday : String
    , gender : String
    }


emptyCustoemrForm : CustomerForm
emptyCustoemrForm =
    { nameSei = ""
    , nameMei = ""
    , kanaSei = ""
    , kanaMei = ""
    , birthday = ""
    , gender = ""
    }



-- Decoders


decoderNameSei : Decoder CustomerForm Error String
decoderNameSei =
    Decoder.identity
        |> required Error.required
        |> Decoder.assert (Decoder.maxLength (Error.invalid "30文字以内でお願いします") 30)
        |> Decoder.lift .nameSei


decoderNameMei : Decoder CustomerForm Error Zenkaku
decoderNameMei =
    Zenkaku.decoder
        |> required Error.required
        |> Decoder.lift .nameMei


decoderKanaSei : Decoder CustomerForm Error Zenkaku
decoderKanaSei =
    Zenkaku.decoderZenkakuKana
        |> required Error.required
        |> Decoder.lift .kanaSei


decoderKanaMei : Decoder CustomerForm Error Zenkaku
decoderKanaMei =
    Zenkaku.decoderZenkakuKana
        |> required Error.required
        |> Decoder.lift .kanaMei


decoderGender : Decoder CustomerForm Error Gender
decoderGender =
    (Decoder.custom <|
        \s ->
            if s == "M" then
                Ok Male

            else if s == "F" then
                Ok Female

            else
                Err [ Error.invalid "不正な性別が入力されました" ]
    )
        |> required Error.required
        |> Decoder.lift .gender


decoder : Decoder CustomerForm Error Customer
decoder =
    Decoder.top Customer
        |> Decoder.field decoderNameSei
        |> Decoder.field decoderNameMei
        |> Decoder.field decoderKanaSei
        |> Decoder.field decoderKanaMei
        |> Decoder.field decoderGender



-- model


type alias Model =
    { customerForm : CustomerForm
    , submitted : Bool
    }



--


init : () -> ( Model, Cmd Msg )
init _ =
    ( { customerForm = emptyCustoemrForm, submitted = True }, Cmd.none )


type Msg
    = ChangedNameSei String
    | BluredNameSei
    | ChangedNameMei String
    | BluredNameMei
    | ChangedKanaSei String
    | ChangedKanaMei String
    | ClickedGender String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg ({ customerForm } as model) =
    let
        setForm form =
            { model | customerForm = form }
    in
    case msg of
        ChangedNameSei s ->
            ( setForm { customerForm | nameSei = s }, Cmd.none )

        BluredNameSei ->
            ( setForm { customerForm | nameSei = Zenkaku.toZenkaku customerForm.nameSei }, Cmd.none )

        ChangedNameMei s ->
            ( setForm { customerForm | nameMei = s }, Cmd.none )

        BluredNameMei ->
            ( setForm { customerForm | nameMei = Zenkaku.toZenkaku customerForm.nameMei }, Cmd.none )

        ChangedKanaSei s ->
            ( setForm { customerForm | kanaSei = s }, Cmd.none )

        ChangedKanaMei s ->
            ( setForm { customerForm | kanaMei = s }, Cmd.none )

        ClickedGender s ->
            ( setForm { customerForm | gender = s }, Cmd.none )


view : Model -> Html Msg
view { customerForm, submitted } =
    let
        fieldError : Decoder CustomerForm Error a -> Maybe String
        fieldError d =
            case Decoder.run d customerForm of
                Ok _ ->
                    Nothing

                Err errs ->
                    if submitted then
                        Just <| String.concat <| List.map Error.errorField <| errs

                    else
                        Nothing
    in
    div []
        [ div [ class "flex flex-row" ]
            [ div [ class "flex flex-col" ]
                [ label [] [ text "姓" ]
                , input
                    [ onInput ChangedNameSei
                    , onBlur BluredNameSei
                    , value customerForm.nameSei
                    , classInputText
                    ]
                    []
                , errorTip <| fieldError decoderNameSei
                ]
            , div [ class "flex flex-col" ]
                [ label [] [ text "名" ]
                , input [ onInput ChangedNameMei, value customerForm.nameMei, classInputText ] []
                , errorTip <| fieldError decoderNameMei
                ]
            ]
        , div [ class "flex flex-row" ]
            [ div [ class "flex flex-col" ]
                [ label [] [ text "セイ" ]
                , input [ onInput ChangedKanaSei, value customerForm.kanaSei, classInputText ] []
                , errorTip <| fieldError decoderKanaSei
                ]
            , div [ class "flex flex-col" ]
                [ label [] [ text "メイ" ]
                , input [ onInput ChangedKanaMei, value customerForm.kanaMei, classInputText ] []
                , errorTip <| fieldError decoderKanaMei
                ]
            ]
        , div [ class "flex flex-row" ]
            [ div []
                [ input
                    [ id "customer-form-female"
                    , class "hidden"
                    , type_ "radio"
                    , onClick (ClickedGender "F")
                    , checked (customerForm.gender == "F")
                    ]
                    []
                , label [ for "customer-form-female" ] [ text "女性" ]
                ]
            , div []
                [ input
                    [ id "customer-form-male"
                    , class "hidden"
                    , type_ "radio"
                    , onClick (ClickedGender "M")
                    , checked (customerForm.gender == "M")
                    ]
                    []
                , label [ for "customer-form-male" ] [ text "男性" ]
                ]
            ]
        , div [ class "flex flex-row" ]
            [ div [] [] ]
        ]


classInputText : Html.Attribute msg
classInputText =
    class "border"


errorTip : Maybe String -> Html msg
errorTip maybeString =
    let
        err =
            p [ class "text-red" ]
                [ text <|
                    Maybe.withDefault "" maybeString
                ]
    in
    err



--


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
