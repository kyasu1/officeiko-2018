module Inquiry.Name exposing
    ( Name
    , decoder
    , toString
    )

import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder)
import Form.Decoder.Extra exposing (required)


type Name
    = Name String


toString : Name -> String
toString (Name value) =
    value


decoder : Decoder String Error Name
decoder =
    Decoder.identity
        |> required Error.required
        |> Decoder.assert (Decoder.maxLength (Error.invalid "50文字以内で入力をお願いします") 50)
        |> Decoder.map Name
