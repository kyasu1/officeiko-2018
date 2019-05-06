module Inquiry.Kana exposing
    ( Kana
    , decoder
    , toString
    )

import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder, Validator, custom)
import Form.Decoder.Extra exposing (required)


type Kana
    = Kana String


toString : Kana -> String
toString (Kana value) =
    value


decoder : Decoder String Error Kana
decoder =
    Decoder.identity
        |> required Error.required
        |> Decoder.assert (Decoder.maxLength (Error.invalid "50文字以内で入力をお願いします") 50)
        |> Decoder.map Kana
