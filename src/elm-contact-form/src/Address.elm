module Main exposing (main)

import Address.Zip as Zip exposing (Zip)
import Browser
import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder, Validator)
import Form.Decoder.Extra exposing (optional, required)
import Html exposing (..)
import Html.Attributes as A exposing (class, disabled, for, id, value)
import Html.Events exposing (onBlur, onClick, onInput)


type alias Address =
    { zip : Zip
    , prefecture : Prefecture
    , city : String
    , street : String
    , extension : Maybe String
    }


type alias AddressForm =
    { zip : String
    , prefecture : String
    , city : String
    , street : String
    , extension : String
    }


initialForm : AddressForm
initialForm =
    { zip = ""
    , prefecture = ""
    , city = ""
    , street = ""
    , extension = ""
    }


type Prefecture
    = Tokyo
    | Osaka
    | Saitama


stringToPrefecture : String -> Maybe Prefecture
stringToPrefecture str =
    case str of
        "東京都" ->
            Just Tokyo

        "大阪府" ->
            Just Osaka

        "埼玉県" ->
            Just Saitama

        _ ->
            Nothing


prefectureToString : Prefecture -> String
prefectureToString p =
    case p of
        Tokyo ->
            "東京都"

        Osaka ->
            "大阪府"

        Saitama ->
            "埼玉県"



-- Field Decoders
-- decoderZip : Decoder AddressForm Error Zip
-- decoderZip =
--     Decoder.identity
--         |> Decoder.assert (Decoder.minLength Invalid 7)
--         |> Decoder.assert (Decoder.maxLength Invalid 7)
--         |> required Required
--         |> Decoder.lift .zip
--         |> Decoder.map Zip


decoderPrefecture : Decoder { r | prefecture : String } Error Prefecture
decoderPrefecture =
    Decoder.lift .prefecture <|
        required Error.required <|
            Decoder.custom <|
                \s ->
                    Result.fromMaybe [ Error.invalid "不正な都道府県名が入力されました" ] (stringToPrefecture s)


decoderCity : Decoder AddressForm Error String
decoderCity =
    Decoder.identity |> required Error.required |> Decoder.lift .city


decoderStreet : Decoder AddressForm Error String
decoderStreet =
    Decoder.identity |> required Error.required |> Decoder.lift .street


decoderExtension : Decoder AddressForm Error (Maybe String)
decoderExtension =
    Decoder.identity
        |> Decoder.assert (Decoder.maxLength (Error.invalid "50文字以内で入力してください") 50)
        |> optional
        |> Decoder.lift .extension


decoder : Decoder AddressForm Error Address
decoder =
    Decoder.top Address
        |> Decoder.field Zip.decoder
        |> Decoder.field decoderPrefecture
        |> Decoder.field decoderCity
        |> Decoder.field decoderStreet
        |> Decoder.field decoderExtension



-- Model


type alias Model =
    { addressForm : AddressForm
    , submitted : Bool
    , listOfAddress : List Address
    }



-- Update


type Msg
    = ChangedZip String
    | ChangedPrefecture String
    | ChangedCity String
    | ChangedStreet String
    | ChangedExtension String
    | ClickedSubmit
    | BluredZip


init : () -> ( Model, Cmd Msg )
init _ =
    ( { addressForm = initialForm
      , submitted = False
      , listOfAddress = []
      }
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg ({ addressForm } as model) =
    let
        setAddressForm : AddressForm -> Model
        setAddressForm f =
            { model | addressForm = f }
    in
    case msg of
        ChangedZip s ->
            ( setAddressForm { addressForm | zip = s }, Cmd.none )

        ChangedPrefecture s ->
            ( setAddressForm { addressForm | prefecture = s }, Cmd.none )

        ChangedCity s ->
            ( setAddressForm { addressForm | city = s }, Cmd.none )

        ChangedStreet s ->
            ( setAddressForm { addressForm | street = s }, Cmd.none )

        ChangedExtension s ->
            ( setAddressForm { addressForm | extension = s }, Cmd.none )

        ClickedSubmit ->
            case Decoder.run decoder addressForm of
                Ok address ->
                    ( { model
                        | listOfAddress = address :: model.listOfAddress
                        , submitted = False
                        , addressForm = initialForm
                      }
                    , Cmd.none
                    )

                Err errs ->
                    ( { model | submitted = True }, Cmd.none )

        BluredZip ->
            case Decoder.run Zip.decoder addressForm of
                Ok zip ->
                    ( setAddressForm { addressForm | zip = Zip.format zip }, Cmd.none )

                Err errs ->
                    ( model, Cmd.none )



-- VIEW


view : Model -> Html Msg
view ({ addressForm, submitted } as model) =
    let
        fieldError : Decoder AddressForm Error a -> Maybe String
        fieldError d =
            case Decoder.run d addressForm of
                Ok _ ->
                    Nothing

                Err errs ->
                    if submitted then
                        Just <| String.concat <| List.map Error.errorField <| errs

                    else
                        Nothing

        hasError : Bool
        hasError =
            case Decoder.run decoder addressForm of
                Ok _ ->
                    False

                Err _ ->
                    True
    in
    div [ class "w-full max-w-sm container mx-auto flex justify-center items-center mt-4" ]
        [ div [ class "flex flex-wrap -mx-3 mb-6" ]
            [ div [ classField ] <|
                let
                    maybeError =
                        fieldError Zip.decoder
                in
                [ label [ for "input-zip", classLabel ] [ text "郵便番号", labelRequired ]
                , input
                    [ id "input-zip"
                    , onInput ChangedZip
                    , onBlur BluredZip
                    , value addressForm.zip
                    , classInput maybeError
                    ]
                    []
                , errorTips maybeError
                ]
            , div [ classField ] <|
                let
                    maybeError =
                        fieldError decoderPrefecture
                in
                [ label [ for "input-prefecture", classLabel ] [ text "都道府県", labelRequired ]
                , input
                    [ id "input-prefecture"
                    , onInput ChangedPrefecture
                    , value addressForm.prefecture
                    , classInput maybeError
                    ]
                    []
                , errorTips maybeError
                ]
            , div [ classField ] <|
                let
                    maybeError =
                        fieldError decoderCity
                in
                [ label [ for "input-city", classLabel ] [ text "市区町村", labelRequired ]
                , input
                    [ id "input-city"
                    , onInput ChangedCity
                    , value addressForm.city
                    , classInput maybeError
                    ]
                    []
                , errorTips maybeError
                ]
            , div [ classField ] <|
                let
                    maybeError =
                        fieldError decoderStreet
                in
                [ label [ for "input-street", classLabel ] [ text "住所1", labelRequired ]
                , input
                    [ id "input-street"
                    , onInput ChangedStreet
                    , value addressForm.street
                    , classInput maybeError
                    ]
                    []
                , errorTips maybeError
                ]
            , div [ classField ] <|
                let
                    maybeError =
                        fieldError decoderExtension
                in
                [ label [ for "input-extension", classLabel ] [ text "住所2" ]
                , input
                    [ id "input-extension"
                    , onInput ChangedExtension
                    , value addressForm.extension
                    , classInput maybeError
                    ]
                    []
                , errorTips maybeError
                ]
            , div [ class "w-full text-center" ]
                [ if submitted && hasError then
                    button [ classButtonDisabled ] [ text "エラーがあります" ]

                  else
                    button [ classButton, onClick ClickedSubmit ] [ text "送信" ]
                ]
            , div [ class "mt-4" ] <|
                List.map viewAddress model.listOfAddress
            ]
        ]


viewAddress : Address -> Html msg
viewAddress address =
    div [ classField ]
        [ text <|
            String.concat
                [ Zip.format address.zip
                , " "
                , prefectureToString address.prefecture
                , address.city
                , address.street
                , Maybe.withDefault "" address.extension
                ]
        ]


labelRequired : Html msg
labelRequired =
    span [ class "text-red" ] [ text "（必須）" ]


errorTips : Maybe String -> Html msg
errorTips maybeError =
    p [ classFieldError ] [ text <| Maybe.withDefault "" <| maybeError ]



-- field :
--     { fieldId : String
--     , labelText : String
--     , d : Decoder form err a
--     , handleInput : String -> msg
--     , handleBlur : msg
--     , submitted : Bool
--     , f : form
--     , toValue : form -> String
--     , errorToString_ : err -> String
--     }
--     -> Html msg
-- field { fieldId, labelText, d, handleInput, handleBlur, submitted, f, toValue, errorToString_ } =
--     div [ classField ] <|
--         let
--             maybeError =
--                 case Decoder.run d f of
--                     Ok _ ->
--                         Nothing
--
--                     Err errs ->
--                         if submitted then
--                             Just <| String.concat <| List.map errorToString_ <| errs
--
--                         else
--                             Nothing
--         in
--         [ label [ for fieldId, classLabel ] [ text labelText, labelRequired ]
--         , input
--             [ id fieldId
--             , onInput handleInput
--             , onBlur handleBlur
--             , value <| toValue f
--             , classInput maybeError
--             ]
--             []
--         , errorTips maybeError
--         ]
-- Classes


classInput maybeError =
    let
        base =
            "appearnce-none block w-full bg-grey-lighter text-grey-darker border rounded py-3 px-4 mb-3 leading-tight focus:outline focus:bg-white"
    in
    case maybeError of
        Just _ ->
            class <| base ++ " border-red"

        Nothing ->
            class <| base


classField =
    class "w-full md:w-1/2 px-3 mb-6 md:mb-0"


classFieldError =
    class "text-red text-xs italic"


classLabel =
    class "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"


buttonBase =
    "w-full max-w-xs font-bold py-2 px-4 rounded focus:outline-none"


classButton =
    class <| buttonBase ++ " bg-blue text-white hover:bg-blue-light"


classButtonDisabled =
    class <| buttonBase ++ " bg-red text-white opacity-50 cursor-not-allowed"



-- main


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
