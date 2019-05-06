module FieldArrayForm exposing (main)

-- import Form.Decoder.Extra exposing (optional, required, listDecoder, requiredList)

import Browser
import Form.Decoder as Decoder exposing (Decoder, Validator)
import Html exposing (..)
import Html.Attributes as A exposing (class, disabled, for, id, style, value)
import Html.Events exposing (onBlur, onClick, onInput)
import List.Extra as List



--


type alias Club =
    { clubName : String
    , members : List Member
    }


type alias Member =
    { fullName : String
    , hobbies : List Hobby
    }


type alias Hobby =
    String



-- Form


type alias ClubForm =
    { clubName : String
    , members : List MemberForm
    }


type alias MemberForm =
    { firstName : String
    , lastName : String
    , hobbies : List HobbyForm
    }


type alias HobbyForm =
    { hobby : String }


initClubForm : ClubForm
initClubForm =
    { clubName = ""
    , members = []
    }


initMemberForm : MemberForm
initMemberForm =
    { firstName = ""
    , lastName = ""
    , hobbies = []
    }


initHobbyForm : HobbyForm
initHobbyForm =
    { hobby = "" }



-- Error Custom Type


type Error
    = Required
    | Invalid String


errorToString : Error -> String
errorToString error =
    case error of
        Required ->
            "Required"

        Invalid s ->
            s



-- Decoders


decoderClubName : Decoder ClubForm Error String
decoderClubName =
    Decoder.identity
        |> required Required
        |> Decoder.lift .clubName


decoderMembers : Decoder ClubForm Error (List Member)
decoderMembers =
    Decoder.list decoderMemberForm
        |> Decoder.assert (minLengthList (Invalid "At least one member must be entered") 1)
        |> Decoder.lift .members


decoderClubForm : Decoder ClubForm Error Club
decoderClubForm =
    Decoder.top Club
        |> Decoder.field decoderClubName
        |> Decoder.field decoderMembers


decoderFullName : Decoder MemberForm Error String
decoderFullName =
    Decoder.map2 (\a b -> a ++ " " ++ b) decoderFirstName decoderLastName


decoderFirstName : Decoder MemberForm Error String
decoderFirstName =
    Decoder.identity
        |> required Required
        |> Decoder.lift .firstName


decoderLastName : Decoder MemberForm Error String
decoderLastName =
    Decoder.identity
        |> required Required
        |> Decoder.lift .lastName


decoderHobbies : Decoder MemberForm Error (List Hobby)
decoderHobbies =
    Decoder.list decoderHobbyForm
        |> Decoder.assert (maxLengthList (Invalid "No more than five hobbies allowed") 5)
        |> Decoder.lift .hobbies


decoderMemberForm : Decoder MemberForm Error Member
decoderMemberForm =
    Decoder.top Member
        |> Decoder.field decoderFullName
        |> Decoder.field decoderHobbies


decoderHobbyForm : Decoder HobbyForm Error Hobby
decoderHobbyForm =
    Decoder.identity
        |> Decoder.lift .hobby



-- Form.Decoder.Extra


required : err -> Decoder String err a -> Decoder String err a
required err d =
    Decoder.with <|
        \s ->
            if s == "" then
                Decoder.fail err

            else
                d



-- listDecoder : Decoder a err b -> Decoder (List a) err (List b)
-- listDecoder d =
--     Decoder.custom <|
--         \list ->
--             let
--                 results =
--                     List.map (Decoder.run d) list
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
        \list ->
            if List.length list >= bound then
                Ok ()

            else
                Err [ err ]


maxLengthList : err -> Int -> Validator (List a) err
maxLengthList err bound =
    Decoder.custom <|
        \list ->
            if List.length list <= bound then
                Ok ()

            else
                Err [ err ]


type alias Model =
    { club : Club
    , clubForm : ClubForm
    , uid : Int
    , submitted : Bool
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( { club = { clubName = "", members = [] }
      , clubForm = initClubForm
      , uid = 0
      , submitted = False
      }
    , Cmd.none
    )


type Msg
    = ChangedClubName String
    | ClickedAddMember
    | ChangedFirstName Int String
    | ChangedLastName Int String
    | ClickedDeleteMember Int
    | ClickedAddHobby Int
    | ChangedHobby Int Int String
    | ClickedDeleteHobby Int Int
    | ClickedSubmit
    | ClickedClear


update : Msg -> Model -> ( Model, Cmd Msg )
update msg ({ clubForm } as model) =
    let
        setClubForm f =
            { model | clubForm = f }
    in
    case msg of
        ChangedClubName s ->
            ( setClubForm { clubForm | clubName = s }, Cmd.none )

        ClickedAddMember ->
            ( setClubForm { clubForm | members = List.reverse <| initMemberForm :: clubForm.members }, Cmd.none )

        ChangedFirstName memberId s ->
            let
                newMembers =
                    List.updateAt memberId
                        (\member -> { member | firstName = s })
                        clubForm.members
            in
            ( setClubForm { clubForm | members = newMembers }, Cmd.none )

        ChangedLastName memberId s ->
            let
                newMembers =
                    List.updateAt memberId
                        (\member -> { member | lastName = s })
                        clubForm.members
            in
            ( setClubForm { clubForm | members = newMembers }, Cmd.none )

        ClickedDeleteMember memberId ->
            let
                newMembers =
                    List.removeAt memberId clubForm.members
            in
            ( setClubForm { clubForm | members = newMembers }, Cmd.none )

        ClickedAddHobby memberId ->
            let
                newMembers =
                    List.updateAt memberId
                        (\member -> { member | hobbies = List.reverse <| initHobbyForm :: member.hobbies })
                        clubForm.members
            in
            ( setClubForm { clubForm | members = newMembers }, Cmd.none )

        ChangedHobby memberId hobbyId s ->
            let
                newMembers =
                    List.updateAt memberId
                        (\member -> { member | hobbies = List.updateAt hobbyId (\hobbyForm -> { hobbyForm | hobby = s }) member.hobbies })
                        clubForm.members
            in
            ( setClubForm { clubForm | members = newMembers }, Cmd.none )

        ClickedDeleteHobby memberId hobbyId ->
            let
                newMembers =
                    List.updateIfIndex ((==) memberId)
                        (\member -> { member | hobbies = List.removeAt hobbyId member.hobbies })
                        clubForm.members
            in
            ( setClubForm { clubForm | members = newMembers }, Cmd.none )

        ClickedSubmit ->
            case Decoder.run decoderClubForm clubForm of
                Ok club ->
                    ( { model
                        | club = club
                        , submitted = False
                        , clubForm = initClubForm
                      }
                    , Cmd.none
                    )

                Err errs ->
                    ( { model | submitted = True }, Cmd.none )

        ClickedClear ->
            ( { model | submitted = False, clubForm = initClubForm }, Cmd.none )


view : Model -> Html Msg
view ({ clubForm } as model) =
    let
        fieldError : Decoder ClubForm Error a -> Maybe String
        fieldError d =
            case Decoder.run d clubForm of
                Ok _ ->
                    Nothing

                Err errs ->
                    if model.submitted then
                        Just <| String.concat <| List.map errorToString <| errs

                    else
                        Nothing

        hasError : Bool
        hasError =
            case Decoder.run decoderClubForm clubForm of
                Ok _ ->
                    False

                Err _ ->
                    True
    in
    fieldset []
        [ div []
            [ label [] [ text "Club Name" ]
            , input [ onInput ChangedClubName, value clubForm.clubName ] []
            , errorTips <| fieldError decoderClubName
            ]
        , button [ onClick ClickedAddMember ] [ text "Add Member" ]

        -- , errorTips <| fieldError decoderMembers
        , errorTips <| listError model.submitted clubForm decoderMembers
        , div []
            (List.indexedMap (viewMember model.submitted) clubForm.members)

        -- , if model.submitted && hasError then
        --     button [ A.disabled hasError ] [ text "HAS ERROR" ]
        --
        --   else
        --     button [ onClick ClickedSubmit ] [ text "SUBMIT" ]
        , button [ onClick ClickedSubmit ] [ text "SUBMIT" ]
        , button [ onClick ClickedClear ] [ text "CLEAR" ]
        , br [] []
        , viewClubDirecotry model
        ]


viewMember : Bool -> Int -> MemberForm -> Html Msg
viewMember submitted memberId memberForm =
    let
        fieldError : Decoder MemberForm Error a -> Maybe String
        fieldError d =
            case Decoder.run d memberForm of
                Ok _ ->
                    Nothing

                Err errs ->
                    if submitted then
                        Just <| String.concat <| List.map errorToString <| errs

                    else
                        Nothing
    in
    fieldset []
        [ div []
            [ label [] [ text "First Name" ]
            , input [ onInput <| ChangedFirstName memberId, value memberForm.firstName ] []
            ]
        , errorTips <| fieldError decoderFirstName
        , div []
            [ label [] [ text "Last Name" ]
            , input [ onInput <| ChangedLastName memberId, value memberForm.lastName ] []
            ]
        , errorTips <| fieldError decoderLastName
        , div []
            [ button [ onClick <| ClickedDeleteMember memberId ] [ text "X" ] ]
        , div []
            [ button [ onClick <| ClickedAddHobby memberId ] [ text "Add Hobby" ]
            ]
        , errorTips <| fieldError decoderHobbies
        , div []
            (List.indexedMap (viewHobby memberId submitted) memberForm.hobbies)
        ]


viewHobby : Int -> Bool -> Int -> HobbyForm -> Html Msg
viewHobby memberId submitted hobbyId hobbyForm =
    fieldset []
        [ div []
            [ label [] [ text "Hobby ", text <| String.fromInt hobbyId ]
            , input [ onInput <| ChangedHobby memberId hobbyId, value hobbyForm.hobby ] []
            ]
        , div []
            [ button [ onClick <| ClickedDeleteHobby memberId hobbyId ] [ text "X" ] ]
        ]


errorTips : Maybe String -> Html msg
errorTips maybeError =
    p [ style "color" "red" ] [ text <| Maybe.withDefault "" <| maybeError ]


{-| To supress list of Required erros in subform, we need to filter out them
-}
listError : Bool -> f -> Decoder f Error a -> Maybe String
listError submitted f d =
    case Decoder.run d f of
        Ok _ ->
            Nothing

        Err errs ->
            if submitted && List.filter ((/=) Required) errs /= [] then
                Just <| String.concat <| List.map errorToString errs

            else
                Nothing



--


viewClubDirecotry : Model -> Html Msg
viewClubDirecotry model =
    div []
        [ text <| Debug.toString model.club ]



-- main


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
