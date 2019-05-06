module Inquiry.Email exposing
    ( Email
    , decoder
    , toString
    )

import Email
import Error exposing (Error)
import Form.Decoder as Decoder exposing (Decoder)
import Form.Decoder.Extra exposing (required)


type alias Email =
    Email.Email



-- Email1がメールアドレスとしてただしかチェック
-- EMail1とEmail2が同じかチェック
-- decoderE2 : Decoder ( Input, Input ) Error Email
-- decoderE2 =
--     Decoder.custom <|
--         \( a, b ) ->
--             if Input.toString a == "" then
--                 Err [ Empty ]
--
--             else
--                 case Decoder.run Email.decoder (Input.toString a) of
--                     Ok validEmail ->
--                         if toString validEmail == Input.toString b then
--                             Ok validEmail
--
--                         else
--                             Err [ NotMatch ]
--
--                     Err problem ->
--                         Err <| List.map Invalid problem


toString : Email -> String
toString =
    Email.toString



-- type Error
--     = Empty
--     | NotMatch
--     | Invalid Email.Problem
--
--
-- errorField : Error -> List String
-- errorField error =
--     case error of
--         Empty ->
--             [ "メールアドレスを入力してください" ]
--
--         NotMatch ->
--             [ "メールアドレスが一致しません" ]
--
--         Invalid Email.TooLongLocalPart ->
--             [ "メールアドレスの前半が長すぎます" ]
--
--         Invalid Email.UnexpectedEnd ->
--             [ "末尾に記号や数字が含まれています" ]
--
--         _ ->
--             [ "不正なメールアドレスが入力されました" ]


decoder : Decoder String Error Email
decoder =
    Decoder.identity
        |> required Error.required
        |> Decoder.andThen (\_ -> Decoder.mapError problemToError <| Email.decoder)


problemToError : Email.Problem -> Error
problemToError p =
    case p of
        Email.TooLongLocalPart ->
            Error.invalid "メールアドレスの前半が長すぎます"

        Email.UnexpectedEnd ->
            Error.invalid "末尾に記号や数字が含まれています"

        _ ->
            Error.invalid "不正なメールアドレスが入力されました"



-- |> Decoder.andThen (\_ -> Decoder.mapError Invalid Email.decoder)
--
--
-- decoder : Decoder Input Error Name
-- decoder =
--     Decoder.identity
--         |> Input.required Required
--         |> Decoder.assert (Decoder.maxLength TooLong 50)
--         |> Decoder.map Name
