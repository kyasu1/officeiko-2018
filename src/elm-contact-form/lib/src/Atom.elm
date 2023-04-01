module Atom exposing (horizontalDivider, horizontalDividerGradient)

import Color exposing (..)
import Element exposing (..)
import Element.Background as Background


horizontalDivider : Element msg
horizontalDivider =
    el
        [ height (px 1)
        , Background.color (dark grey)
        , width fill
        ]
        (text " ")


horizontalDividerGradient : { angle : Float, steps : List Color } -> Element msg
horizontalDividerGradient config =
    el
        [ height (px 1)

        -- , Background.color (dark grey)
        , Background.gradient config
        , width fill
        ]
        (text " ")
