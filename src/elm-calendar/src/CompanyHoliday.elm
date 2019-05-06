module Main exposing (main)

import Browser
import Calendar
import Date exposing (Date)
import Dict
import Html exposing (..)
import Html.Attributes exposing (class, title)
import Html.Events exposing (onBlur, onClick, onInput)
import Json.Decode as Decode exposing (Decoder, Value)
import Task exposing (Task)
import Time exposing (Month, Weekday)


type alias Holiday =
    { date : Date
    , label : String
    }


type alias Model =
    { holiday : List Holiday
    , special : List Holiday
    , today : Today
    }


type Today
    = Today Date
    | Loading
    | Error


flagsDecoder : Decoder ( List Holiday, List Holiday )
flagsDecoder =
    Decode.map2 Tuple.pair
        (Decode.field "holiday" fieldDecoder)
        (Decode.field "special" fieldDecoder)


fieldDecoder : Decoder (List Holiday)
fieldDecoder =
    Decode.dict Decode.string
        |> Decode.map Dict.toList
        |> Decode.map (List.filterMap fieldHelper)


fieldHelper : ( String, String ) -> Maybe Holiday
fieldHelper ( dateString, label ) =
    case Date.fromIsoString dateString of
        Ok date ->
            Just (Holiday date label)

        Err _ ->
            Nothing


init : Value -> ( Model, Cmd Msg )
init flags =
    case Decode.decodeValue flagsDecoder flags of
        Ok ( holiday, special ) ->
            ( { holiday = holiday
              , special = special
              , today = Loading
              }
            , Task.perform GetToday whatDayToday
            )

        Err _ ->
            ( { holiday = []
              , special = []
              , today = Error
              }
            , Cmd.none
            )


type Msg
    = GetToday Date


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GetToday date ->
            ( { model | today = Today date }
            , Cmd.none
            )


whatDayToday : Task x Date
whatDayToday =
    Task.map2 zoneTimeToDate Time.here Time.now


zoneTimeToDate : Time.Zone -> Time.Posix -> Date
zoneTimeToDate zone now =
    Date.fromCalendarDate (Time.toYear zone now) (Time.toMonth zone now) (Time.toDay zone now)


bgClosed =
    "bg-green"


bgSpecial =
    "bg-orange"


textHoliday =
    "text-red-dark"


textSaturday =
    "text-blue-dark"


textWeekday =
    "text-black"


textClosed =
    "text-white"


cellAttrs :
    { national : List Holiday
    , special : List Holiday
    , today : Date
    }
    -> Calendar.State
    -> Date
    -> Html msg
cellAttrs { national, special, today } state date =
    let
        base =
            [ class "text-center p-1 border-grey border border-solid w-8 h-8" ]
    in
    if Calendar.inMonth state date then
        let
            textColor =
                case national |> List.filter (\s -> s.date == date) |> List.head of
                    Just d ->
                        [ class textHoliday, title d.label ]

                    Nothing ->
                        if Date.weekday date == Time.Sun then
                            [ class textHoliday ]

                        else if Date.weekday date == Time.Sat then
                            [ class textSaturday ]

                        else
                            [ class textWeekday ]

            bgColor =
                case special |> List.filter (\s -> s.date == date) |> List.head of
                    Just s ->
                        [ class <| String.join " " [ bgSpecial, "font-bold" ], title s.label ]

                    Nothing ->
                        if Date.weekday date == Time.Wed then
                            [ class <| String.join " " [ bgClosed, textClosed, "font-bold" ], title "定休日" ]

                        else if Date.weekday date == Time.Tue then
                            let
                                sat =
                                    (Date.day date - 1) // 7 + 1
                            in
                            if (sat == 1) || (sat == 3) then
                                [ class <| String.join " " [ bgClosed, textClosed, "font-bold" ], title "定休日" ]

                            else
                                []

                        else
                            []

            tdWithToday a b =
                if a == b then
                    td (List.concat [ base, textColor, bgColor, [ class "p-0", title "今日" ] ])
                        [ span [ class "border-2 rounded-full bg-red border-red text-white" ] [ text <| String.fromInt <| Date.day date ]
                        ]

                else
                    td (List.concat [ base, textColor, bgColor ]) [ text <| String.fromInt <| Date.day date ]
        in
        tdWithToday date today

    else
        td base []


myThead : List Weekday -> Calendar.HtmlDetails msg
myThead weeekdays =
    { attributes = []
    , children = List.map weekdayToKanjiShort weeekdays
    }


weekdayToKanjiShort : Weekday -> Html msg
weekdayToKanjiShort weekday =
    let
        cell classNames weekdayString =
            td [ class ("text-center p-1 border-grey border border-solid " ++ classNames) ] [ text weekdayString ]
    in
    case weekday of
        Time.Sun ->
            cell textHoliday "日"

        Time.Mon ->
            cell "" "月"

        Time.Tue ->
            cell "" "火"

        Time.Wed ->
            cell "" "水"

        Time.Thu ->
            cell "" "木"

        Time.Fri ->
            cell "" "金"

        Time.Sat ->
            cell textSaturday "土"


type State
    = State
        { calendar : Calendar.State
        }


initialState : Date -> State
initialState today =
    State { calendar = Calendar.initWithDate today }


setYearMonth : Int -> Month -> State -> State
setYearMonth year month (State state) =
    State
        { state
            | calendar =
                Calendar.setYear year <|
                    Calendar.setMonth month <|
                        state.calendar
        }


customizations : Calendar.Customizations msg
customizations =
    { tableAttrs = [ class "mx-auto border-collapse bg-white" ]
    , tableHeader = myThead
    , tbodyAttrs = []
    }


calendarConfig : Calendar.State -> List Holiday -> List Holiday -> Date -> Calendar.Config msg
calendarConfig calendar holiday special today =
    Calendar.configWithCusgtomizations
        { cellAttrs =
            cellAttrs
                { national = holiday
                , special = special
                , today = today
                }
                calendar
        , customizations = customizations
        }


view : Model -> Html msg
view model =
    case model.today of
        Today today ->
            div []
                (List.range 1 2
                    |> List.map (\i -> Calendar.initWithDate (Date.add Date.Months (i - 1) today))
                    |> List.map
                        (\calendar ->
                            div [ class "text-center mb-2 mx-auto p-4" ]
                                [ p [ class "mb-2" ] [ text <| String.concat [ String.fromInt <| Calendar.getYear calendar, "年", String.fromInt <| Date.monthToNumber <| Calendar.getMonth calendar, "月" ] ]
                                , Calendar.view (calendarConfig calendar model.holiday model.special today) calendar
                                ]
                        )
                )

        Loading ->
            div [] [ text "営業カレンダーを準備中" ]

        Error ->
            div [] [ text "営業カレンダーの読込みに失敗" ]


main : Program Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
