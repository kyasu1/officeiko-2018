module Icon exposing (close, loading)

import Svg exposing (..)
import Svg.Attributes exposing (..)


loading size =
    svg
        [ version "1.1"
        , id "loader-1"
        , x "0px"
        , y "0px"
        , width <| String.fromInt size ++ "px"
        , height <| String.fromInt size ++ "px"
        , viewBox "0 0 40 40"
        , enableBackground "new 0 0 40 40"
        ]
        [ Svg.path
            [ opacity "0.2"
            , fill "#000"
            , d "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
            ]
            []
        , Svg.path
            [ fill "#000"
            , d "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z"
            ]
            [ animateTransform
                [ attributeType "xml"
                , attributeName "transform"
                , type_ "rotate"
                , from "0 20 20"
                , to "360 20 20"
                , dur "0.5s"
                , repeatCount "indefinite"
                ]
                []
            ]
        ]


close =
    svg
        [ class "h-12 w-12 fill-current text-grey hover:text-grey-darkest"
        , version "1.1"

        -- , attribute "role" "button"
        -- , attribute "xmlns" "http://www.w3.org/2000/svg"
        , viewBox "0 0 20 20"
        ]
        [ Svg.path
            [ d "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            ]
            []
        ]
