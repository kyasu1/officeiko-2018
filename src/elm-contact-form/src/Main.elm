module Main exposing (main)

import Browser
import Browser.Events exposing (onResize)
import Contact
import Element exposing (..)
import Html exposing (Html)


type alias Flags =
    { width : Int
    , height : Int
    }


type alias Model =
    { device : Device
    , contact : Contact.Model
    }


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( { device = Element.classifyDevice flags
      , contact = Contact.initialModel
      }
    , Cmd.none
    )



-- UPDATE --


type Msg
    = DeviceClassified Device
    | ContactMsg Contact.Msg


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        DeviceClassified device ->
            ( { model | device = device }, Cmd.none )

        ContactMsg subMsg ->
            let
                ( newModel, cmd ) =
                    Contact.update subMsg model.contact
            in
            ( { model | contact = newModel }, Cmd.map ContactMsg cmd )



-- SUBSCRIPTIONS --


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ onResize <|
            \width height ->
                DeviceClassified (Element.classifyDevice { width = width, height = height })
        , Contact.subscriptions model.contact |> Sub.map ContactMsg
        ]



-- VIEW --


view : Model -> Html Msg
view model =
    layout [] (Contact.view model.device model.contact |> Element.map ContactMsg)


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
