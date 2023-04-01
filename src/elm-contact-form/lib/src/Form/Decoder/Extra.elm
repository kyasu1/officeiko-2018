module Form.Decoder.Extra exposing (maxLengthList, minLengthList, optional, required)

import Form.Decoder as Decoder exposing (Decoder, Validator)


required : err -> Decoder String err a -> Decoder String err a
required err d =
    Decoder.with <|
        \s ->
            if s == "" then
                Decoder.fail err

            else
                d


optional : Decoder String err a -> Decoder String err (Maybe a)
optional d =
    Decoder.with <|
        \s ->
            if s == "" then
                Decoder.always Nothing

            else
                Decoder.map Just d



--
-- list : Decoder a err b -> Decoder (List a) err (List b)
-- list d =
--     Decoder.custom <|
--         \items ->
--             let
--                 results =
--                     List.map (Decoder.run d) items
--
--                 errMaybe res =
--                     case res of
--                         Ok _ ->
--                             Nothing
--
--                         Err e ->
--                             Just e
--
--                 errors : List err
--                 errors =
--                     results
--                         |> List.map errMaybe
--                         |> List.filterMap identity
--                         |> List.concat
--             in
--             if List.isEmpty errors then
--                 Ok (List.filterMap Result.toMaybe results)
--
--             else
--                 Err []


minLengthList : err -> Int -> Validator (List a) err
minLengthList err bound =
    Decoder.custom <|
        \items ->
            if List.length items >= bound then
                Ok ()

            else
                Err [ err ]


maxLengthList : err -> Int -> Validator (List a) err
maxLengthList err bound =
    Decoder.custom <|
        \items ->
            if List.length items <= bound then
                Ok ()

            else
                Err [ err ]
