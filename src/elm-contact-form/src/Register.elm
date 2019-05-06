module Main exposing (main)

import Browser
import Form.Decoder as Decoder
import Html exposing (..)
import Html.Attributes exposing (name, type_, value)
import Html.Events exposing (onClick, onInput)


type alias Customer =
    { name : String
    , gender : Gender
    }


type Gender
    = Male
    | Female
    | NotSpecified


stringToGender : String -> Gender
stringToGender string =
    case string of
        "M" ->
            Male

        "F" ->
            Female

        _ ->
            NotSpecified


type alias CustomerForm =
    { name : String
    , gender : String
    }


initialCustomerForm =
    { name = ""
    , gender = ""
    }


type alias Model =
    { customerForm : CustomerForm }


initialModel : Model
initialModel =
    { customerForm = initialCustomerForm }


type Msg
    = ChangedName String
    | ChangedGender String


update : Msg -> Model -> Model
update msg ({ customerForm } as model) =
    let
        setCustomerForm form =
            { model | customerForm = form }
    in
    case msg of
        ChangedName s ->
            setCustomerForm { customerForm | name = s }

        ChangedGender s ->
            setCustomerForm { customerForm | gender = s }


view : Model -> Html Msg
view ({ customerForm } as model) =
    div []
        [ div []
            [ label [] [ text "NAME" ]
            , input [ onInput ChangedName, value customerForm.name ] []
            ]
        , div []
            [ label [] [ text "GENDER" ]
            , input [ type_ "radio", name "gender", value "M", onClick (ChangedGender "M") ] []
            , label [] [ text "Male" ]
            , input [ type_ "radio", name "gender", value "F", onClick (ChangedGender "F") ] []
            , label [] [ text "Female" ]
            ]
        , br [] []
        , div [] [ text <| Debug.toString customerForm ]
        ]


main : Program () Model Msg
main =
    Browser.sandbox
        { init = initialModel
        , view = view
        , update = update
        }
