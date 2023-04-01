module Inquiry.Tel exposing
    ( Tel
    , decoder
    , toString
    )

import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder)
import Form.Decoder.Extra exposing (optional)


type Tel
    = Tel String


toString : Tel -> String
toString (Tel value) =
    value


decoder : Decoder String Error (Maybe Tel)
decoder =
    Decoder.identity
        |> optional
        |> Decoder.map (Maybe.map Tel)
