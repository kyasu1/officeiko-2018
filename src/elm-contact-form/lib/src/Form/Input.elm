module Form.Input exposing
    ( Input
    , decodeField
    , empty
    , fromString
    , isBlured
    , newPassword
    , optional
    , required
    , text
    , toString
    , username
    )

import Element exposing (Element)
import Element.Input as Input
import Form.Decoder as Decoder exposing (Decoder)


type Input
    = Input Bool String


empty : Input
empty =
    Input False ""


fromString : String -> Input
fromString =
    Input True


toString : Input -> String
toString (Input _ v) =
    v


isBlured : Input -> Bool
isBlured (Input blured _) =
    blured


type alias Config msg =
    { placeholder : Maybe (Input.Placeholder msg)
    , onChange : String -> msg
    , class : String
    , label : Input.Label msg
    }


text : Config msg -> Input -> Element msg
text config (Input _ v) =
    Input.text []
        { onChange = config.onChange
        , text = v
        , placeholder = config.placeholder
        , label = config.label
        }


username : Config msg -> Input -> Element msg
username config (Input _ v) =
    Input.username []
        { onChange = config.onChange
        , text = v
        , placeholder = config.placeholder
        , label = config.label
        }


newPassword : Bool -> Config msg -> Input -> Element msg
newPassword show config (Input _ v) =
    Input.newPassword []
        { onChange = config.onChange
        , text = v
        , placeholder = config.placeholder
        , label = config.label
        , show = show
        }



-- Decoders
-- decodeField : Decoder String err a -> Input -> Result (List err) (Maybe a)
-- decodeField =
--     Decoder.run << optional


decodeField : Decoder String err a -> Input -> Result (List err) a
decodeField d =
    \(Input _ a) ->
        Decoder.run d a


optional : Decoder String err a -> Decoder Input err (Maybe a)
optional decoder =
    Decoder.with <|
        \(Input _ a) ->
            case a of
                "" ->
                    Decoder.always Nothing

                _ ->
                    Decoder.lift toString <| Decoder.map Just <| decoder


required : err -> Decoder String err a -> Decoder Input err a
required err decoder =
    Decoder.with <|
        \(Input _ a) ->
            case a of
                "" ->
                    Decoder.fail err

                _ ->
                    Decoder.lift toString decoder
