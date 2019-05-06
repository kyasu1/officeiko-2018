module Parsers exposing (tel)

import Parser exposing (..)


tel : Parser String
tel =
    succeed identity
        |. chompIf (\c -> c == '0')
        |. chompWhile isVarTel
        |. end
        |> getChompedString



-- getChompedString <|
--     succeed ()
--         |. chompIf (\c -> c == '0')
--         |. chompWhile isVarTel


isVarTel : Char -> Bool
isVarTel char =
    Char.isDigit char || char == '-'


whitespace : Parser ()
whitespace =
    chompWhile (\c -> c == ' ')
