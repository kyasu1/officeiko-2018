module Zenkaku exposing
    ( Zenkaku
    , decoder
    , decoderZenkakuKana
    , toString
    , toZenkaku
    )

import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder, Validator)
import Form.Decoder.Extra exposing (required)
import Parser exposing (..)


type Zenkaku
    = Zenkaku String


toString : Zenkaku -> String
toString (Zenkaku value) =
    value


decoder : Decoder String Error Zenkaku
decoder =
    Decoder.map Zenkaku <|
        Decoder.custom <|
            \s ->
                Decoder.run validateZenkaku s


decoderZenkakuKana : Decoder String Error Zenkaku
decoderZenkakuKana =
    Decoder.map Zenkaku <|
        Decoder.custom <|
            \s ->
                Decoder.run validateZenkakuKana s



-- decoder : Decoder String Error Zenkaku
-- decoder =
--     Decoder.identity
--         |> required Error.required
--         |> Decoder.assert (Decoder.maxLength (Error.invalid "50文字以内で入力をお願いします") 50)
--         |> Decoder.map Zenkaku


validateZenkaku : Decoder String Error String
validateZenkaku =
    Decoder.custom <|
        \s ->
            case Parser.run parserZenkaku s of
                Ok parsed ->
                    Ok parsed

                Err _ ->
                    Err [ Error.invalid "全角で入力をお願いします" ]


validateZenkakuKana : Decoder String Error String
validateZenkakuKana =
    Decoder.custom <|
        \s ->
            case Parser.run parserZenkakuKana s of
                Ok parsed ->
                    Ok parsed

                Err _ ->
                    Err [ Error.invalid "カナで入力をお願いします" ]


toZenkaku : String -> String
toZenkaku s =
    String.map toZenkaku_ s


toZenkaku_ : Char -> Char
toZenkaku_ c =
    let
        code =
            Char.toCode c

        start =
            0x20

        end =
            0x7E
    in
    if start <= code && code <= end then
        Char.fromCode (code + 0xFEE0)

    else
        c


isZenkaku : Char -> Bool
isZenkaku c =
    let
        code =
            Char.toCode c |> Debug.log "code"

        start =
            0x20

        end =
            0x7E
    in
    if start <= code && code <= end then
        False

    else
        True


parserZenkaku : Parser String
parserZenkaku =
    getChompedString <|
        succeed ()
            |. chompWhile isZenkaku
            |. end


isZenkakuKana : Char -> Bool
isZenkakuKana c =
    let
        code =
            Char.toCode c

        start =
            Char.toCode 'ァ'

        end =
            Char.toCode 'ヶ'

        bar =
            Char.toCode 'ー'

        space =
            Char.toCode '\u{3000}'
    in
    if (start <= code && code <= end) || (bar == code) || (space == code) then
        True

    else
        False


parserZenkakuKana : Parser String
parserZenkakuKana =
    getChompedString <|
        succeed ()
            |. chompWhile isZenkakuKana
            |. end
