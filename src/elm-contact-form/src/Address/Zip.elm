module Address.Zip exposing (Zip, decoder, format, toString)

import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder)
import Form.Decoder.Extra as Decoder exposing (required)


type Zip
    = Zip String


toString (Zip zip) =
    zip


format (Zip zip) =
    String.left 3 zip ++ "-" ++ String.right 4 zip


decoder : Decoder { r | zip : String } Error Zip
decoder =
    Decoder.identity
        |> Decoder.andThen (\s -> String.replace "-" "" s |> Decoder.always)
        |> Decoder.assert (Decoder.minLength (Error.invalid "数字7桁で入力してください") 7)
        |> Decoder.assert (Decoder.maxLength (Error.invalid "数字7桁で入力してください") 7)
        |> required Error.required
        |> Decoder.lift .zip
        |> Decoder.map Zip
