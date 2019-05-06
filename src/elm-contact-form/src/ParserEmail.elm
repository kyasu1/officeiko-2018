module ParserEmail exposing (parser)

-- import Parser exposing (..)

import Parser.Advanced exposing (..)



{-

   This attempts to validate email address string using new [elm/parser](https://package.elm-lang.org/packages/elm/parser/latest/) package.
   The valid email address is somethin like `local@domain.domain.domain` with the following restrictions,

   - local and mulplie domains part is separated by `@` and it appears only once.
   - local part only contains alphabets, numbers, dots, dashes and underscores. Successive dots are not allowed. The total length must be less than or equal to 64 characters.
   - domain part only contains alphabets, numbers, dashes and underscores.
   - Each domain is separated by a dot, there must be at least one sub-domain under the top level domain (tld).
       - an email address like `user@localhost` is not allowed.
   - The total length of an email address must be less than or equal to 254 characters.

   link to ellie app https://ellie-app.com/3dTBmxmDCmza1
-}


{-| Problem
-}
type Problem
    = TooLongLocalPart -- "local part must be less than or equal to 64"
    | EmptyHostName -- "empty host name is not allowd"
    | InvalidSubdomain -- "domain must conatin at least one subdomain"
    | InvalidTld -- "tld must be in alphabet"
    | TooLongEmail -- "the total length must be less than 254 characters"
    | NoHostName -- "domain name must be followed by a top level domain"
    | ExpectingSymbol String
    | UnexpectedEnd
    | UnexpectedChar


type alias MyParser a =
    Parser.Advanced.Parser Never Problem a



{-
   parse local part
-}


localParser : MyParser String
localParser =
    succeed identity
        |. chompIf Char.isAlpha UnexpectedChar
        |. chompWhile (\c -> Char.isAlphaNum c || c == '.' || c == '-' || c == '_')
        |> getChompedString
        |> andThen
            (\s ->
                if String.length s <= 64 then
                    succeed s

                else
                    problem TooLongLocalPart
            )



{-
   parse domain part string
-}


hostParser : MyParser String
hostParser =
    succeed identity
        |. chompWhile (\c -> Char.isAlphaNum c || c == '-' || c == '_')
        |> getChompedString
        |> andThen
            (\s ->
                if String.length s > 0 then
                    succeed s

                else
                    problem EmptyHostName
            )



{-
   parse list of domain
-}


domainsParser : MyParser (List String)
domainsParser =
    loop [] domainHelper
        |> andThen
            (\listOfString ->
                case List.reverse listOfString of
                    [] ->
                        problem InvalidSubdomain

                    hd :: _ ->
                        if tldCheck hd then
                            succeed listOfString

                        else
                            problem InvalidTld
            )



{-
   parse `.domain-string`
-}


domainHelper : List String -> MyParser (Step (List String) (List String))
domainHelper revStrings =
    oneOf
        [ succeed (\string -> Loop (string :: revStrings))
            |. symbol (Token "." <| ExpectingSymbol ".")
            |= hostParser
        , succeed ()
            |> map (\_ -> Done (List.reverse revStrings))
        ]



{-
   check the tld contains only alphabets
-}


tldCheck : String -> Bool
tldCheck s =
    s
        |> String.toList
        |> List.filter (not << Char.isAlpha)
        |> List.length
        |> (==) 0



{-
   copmose all subparsers as emailParser
-}


parser : MyParser String
parser =
    succeed (\local host hosts -> ( local, host, hosts ))
        |= localParser
        |. symbol (Token "@" <| ExpectingSymbol "@")
        |= hostParser
        |= domainsParser
        |. end UnexpectedEnd
        |> andThen
            (\( local, host, hosts ) ->
                if List.length hosts > 0 then
                    let
                        domain =
                            host ++ "." ++ String.join "." hosts

                        email =
                            local ++ "@" ++ domain
                    in
                    if String.length domain <= 253 && String.length email <= 254 then
                        succeed email

                    else
                        problem TooLongEmail

                else
                    problem NoHostName
            )
