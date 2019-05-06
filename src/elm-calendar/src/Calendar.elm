module Calendar exposing
    ( Config
    , Customizations
    , HtmlDetails
    , State
    , config
    , configWithCusgtomizations
    , getMonth
    , getYear
    , inMonth
    , initWithDate
    , initWithYearMonth
    , nextMonth
    , prevMonth
    , setMonth
    , setYear
    , view
    )

import Date exposing (Date)
import Html exposing (Attribute, Html, b, button, div, table, tbody, td, text, th, thead, tr)
import Html.Attributes exposing (type_)
import Html.Events exposing (onClick)
import Time exposing (Month(..), Posix, Weekday(..))


type State
    = State
        { year : Int
        , month : Month
        }


initWithYearMonth : Int -> Month -> State
initWithYearMonth year month =
    State
        { year = year
        , month = month
        }


initWithDate : Date -> State
initWithDate date =
    State
        { year = Date.year date
        , month = Date.month date
        }


type Config msg
    = Config
        { cellAttrs : Date -> Html msg
        , customizations : Customizations msg
        }


config :
    { cellAttrs : Date -> Html msg
    }
    -> Config msg
config { cellAttrs } =
    Config
        { cellAttrs = cellAttrs
        , customizations = defaultCustomizations
        }


configWithCusgtomizations :
    { cellAttrs : Date -> Html msg
    , customizations : Customizations msg
    }
    -> Config msg
configWithCusgtomizations { cellAttrs, customizations } =
    Config
        { cellAttrs = cellAttrs
        , customizations = customizations
        }


type alias Customizations msg =
    { tableAttrs : List (Attribute msg)
    , tableHeader : List Weekday -> HtmlDetails msg
    , tbodyAttrs : List (Attribute msg)
    }


defaultCustomizations : Customizations msg
defaultCustomizations =
    { tableAttrs = []
    , tableHeader = simpleThead
    , tbodyAttrs = []
    }


type alias HtmlDetails msg =
    { attributes : List (Attribute msg)
    , children : List (Html msg)
    }


simpleThead : List Weekday -> HtmlDetails msg
simpleThead weeekdays =
    { attributes = []
    , children = List.map (\w -> td [] [ text <| weekdayToCharString w ]) weeekdays
    }


weekdayToCharString : Weekday -> String
weekdayToCharString weekday =
    case weekday of
        Sun ->
            "S"

        Mon ->
            "M"

        Tue ->
            "T"

        Wed ->
            "W"

        Thu ->
            "T"

        Fri ->
            "F"

        Sat ->
            "S"


prevMonth : State -> State
prevMonth (State state) =
    let
        prevMonthNumber =
            Date.monthToNumber state.month - 1
    in
    if prevMonthNumber < 1 then
        State { state | year = state.year - 1, month = Time.Dec }

    else
        State { state | month = Date.numberToMonth prevMonthNumber }


nextMonth : State -> State
nextMonth (State state) =
    let
        nextMonthNumber =
            Date.monthToNumber state.month + 1
    in
    if nextMonthNumber > 12 then
        State { state | year = state.year + 1, month = Time.Jan }

    else
        State { state | month = Date.numberToMonth nextMonthNumber }



-- View


view : Config msg -> State -> Html msg
view (Config { cellAttrs, customizations }) ((State { year, month }) as state) =
    let
        firstDay =
            Date.fromCalendarDate year month 1

        start =
            firstDay
                |> Date.floor Date.Sunday

        end =
            start
                |> Date.add Date.Days 42

        listOfDate =
            Date.range Date.Day 1 start end
                |> split 7
                |> List.map (tableRow cellAttrs state)
    in
    table customizations.tableAttrs
        [ header <| customizations.tableHeader [ Sun, Mon, Tue, Wed, Thu, Fri, Sat ]
        , tbody customizations.tbodyAttrs listOfDate
        ]


header : HtmlDetails msg -> Html msg
header { attributes, children } =
    thead attributes <|
        [ tr [] children ]


tableRow : (Date -> Html msg) -> State -> List Date -> Html msg
tableRow cellAttrs state listOfDate =
    tr [] <|
        List.map (tableCell cellAttrs) listOfDate


tableCell : (Date -> Html msg) -> Date -> Html msg
tableCell cellAttrs date =
    cellAttrs date



-- Utils


inMonth : State -> Date -> Bool
inMonth (State { month }) date =
    Date.month date == month


getYear : State -> Int
getYear (State { year }) =
    year


setYear : Int -> State -> State
setYear year (State state) =
    State { state | year = year }


getMonth : State -> Month
getMonth (State { month }) =
    month


setMonth : Month -> State -> State
setMonth month (State state) =
    State { state | month = month }



-- Private functions


split : Int -> List Date -> List (List Date)
split n listOfDate =
    case List.take n listOfDate of
        [] ->
            []

        listHead ->
            listHead :: split n (List.drop n listOfDate)
