module Form.Checkbox exposing
    ( Checkbox
    , Config
    , fromBool
    , toBool
    , view
    )

import Element exposing (Element)
import Element.Input as Input
import Form.Decoder as Decoder exposing (Decoder)


type Checkbox
    = Checkbox Bool


fromBool : Bool -> Checkbox
fromBool =
    Checkbox


toBool : Checkbox -> Bool
toBool (Checkbox checked) =
    checked


type alias Config msg =
    { onChange : Bool -> msg
    , class : String
    , label : Input.Label msg
    }


view : Config msg -> Checkbox -> Element msg
view config (Checkbox checked) =
    Input.checkbox
        []
        { onChange = config.onChange
        , icon = Input.defaultCheckbox
        , checked = checked
        , label = config.label
        }



-- Decoders
-- decodeField : Decoder Bool err a -> Checkbox -> Result (List err) (Maybe a)
-- decodeField =
--     Decoder.run << optional
--
--
-- optional : Decoder Bool err a -> Decoder Checkbox err (Maybe a)
-- optional decoder =
--     Decoder.with <|
--         \(Checkbox a) ->
--           Decode
--             case a of
--                 "" ->
--                     Decoder.always Nothing
--
--                 _ ->
--                     Decoder.lift toBool <| Decoder.map Just <| decoder
--
--
-- required : err -> Decoder Bool err a -> Decoder Checkbox err a
-- required err decoder =
--     Decoder.with <|
--         \(Checkbox a) ->
--             case a of
--                 "" ->
--                     Decoder.fail err
--
--                 _ ->
--                     Decoder.lift toBool decoder
