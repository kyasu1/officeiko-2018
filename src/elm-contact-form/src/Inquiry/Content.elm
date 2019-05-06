module Inquiry.Content exposing
    ( Content
    , decoder
    , toString
    )

import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder)
import Form.Decoder.Extra exposing (required)


type Content
    = Content String


toString : Content -> String
toString (Content value) =
    value


decoder : Decoder String Error Content
decoder =
    Decoder.identity
        |> required Error.required
        |> Decoder.assert (Decoder.maxLength (Error.invalid "500文字以内で入力をお願いします") 500)
        |> Decoder.map Content
