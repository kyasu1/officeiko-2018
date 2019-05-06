module Spinner exposing (view)

import Svg exposing (..)
import Svg.Attributes exposing (..)



-- <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
-- 	<path fill="#C779D0" d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z">
-- 		<animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite"/>
-- 	</path>
-- </svg>


view color =
    svg [ width "50", height "50", viewBox "0 0 50 50" ]
        [ Svg.path
            [ fill color
            , d "M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
            ]
            [ animateTransform
                [ attributeName "transform"
                , type_ "rotate"
                , from "0 25 25"
                , to "360 25 25"
                , dur "0.5s"
                , repeatCount "indefinite"
                ]
                []
            ]
        ]
