module Color exposing
    ( base
    , black
    , blue
    , dark
    , darker
    , darkest
    , green
    , grey
    , indigo
    , light
    , lighter
    , lightest
    , orange
    , pink
    , purple
    , red
    , teal
    , white
    , yellow
    )

import Element exposing (Color, rgb255, rgba)



{--
Grey
--}


black =
    rgb255 34 41 47


white =
    rgb255 255 255 255


type Lightness
    = Darkest
    | Darker
    | Dark
    | Base
    | Light
    | Lighter
    | Lightest


darkest : (Lightness -> Color) -> Color
darkest hue =
    hue Darkest


darker : (Lightness -> Color) -> Color
darker hue =
    hue Darker


dark : (Lightness -> Color) -> Color
dark hue =
    hue Dark


base : (Lightness -> Color) -> Color
base hue =
    hue Base


lightest : (Lightness -> Color) -> Color
lightest hue =
    hue Lightest


lighter : (Lightness -> Color) -> Color
lighter hue =
    hue Lighter


light : (Lightness -> Color) -> Color
light hue =
    hue Light



--


grey : Lightness -> Color
grey lightness =
    case lightness of
        Darkest ->
            rgb255 61 72 82

        Darker ->
            rgb255 96 111 123

        Dark ->
            rgb255 135 149 161

        Base ->
            rgb255 210 194 204

        Light ->
            rgb255 218 225 231

        Lighter ->
            rgb255 241 245 248

        Lightest ->
            rgb255 248 250 252


red : Lightness -> Color
red lightness =
    case lightness of
        Darkest ->
            rgb255 59 13 12

        Darker ->
            rgb255 98 27 24

        Dark ->
            rgb255 204 31 26

        Base ->
            rgb255 227 52 47

        Light ->
            rgb255 239 87 83

        Lighter ->
            rgb255 249 172 170

        Lightest ->
            rgb255 252 235 234


orange : Lightness -> Color
orange lightness =
    case lightness of
        Darkest ->
            rgb255 70 42 22

        Darker ->
            rgb255 97 59 31

        Dark ->
            rgb255 222 117 31

        Base ->
            rgb255 246 153 63

        Light ->
            rgb255 250 173 99

        Lighter ->
            rgb255 252 217 182

        Lightest ->
            rgb255 255 245 235


yellow : Lightness -> Color
yellow lightness =
    case lightness of
        Darkest ->
            rgb255 69 52 17

        Darker ->
            rgb255 104 79 29

        Dark ->
            rgb255 242 208 36

        Base ->
            rgb255 255 237 74

        Light ->
            rgb255 255 243 130

        Lighter ->
            rgb255 255 249 194

        Lightest ->
            rgb255 252 251 235


green : Lightness -> Color
green lightness =
    case lightness of
        Darkest ->
            rgb255 15 47 33

        Darker ->
            rgb255 26 71 49

        Dark ->
            rgb255 31 157 85

        Base ->
            rgb255 56 193 114

        Light ->
            rgb255 81 216 138

        Lighter ->
            rgb255 162 245 191

        Lightest ->
            rgb255 227 252 236


teal : Lightness -> Color
teal lightness =
    case lightness of
        Darkest ->
            rgb255 13 51 49

        Darker ->
            rgb255 32 80 79

        Dark ->
            rgb255 56 168 157

        Base ->
            rgb255 77 192 181

        Light ->
            rgb255 100 213 202

        Lighter ->
            rgb255 160 240 237

        Lightest ->
            rgb255 232 255 254


blue : Lightness -> Color
blue lightness =
    case lightness of
        Darkest ->
            rgb255 18 40 58

        Darker ->
            rgb255 28 61 90

        Dark ->
            rgb255 39 121 189

        Base ->
            rgb255 52 144 220

        Light ->
            rgb255 108 178 235

        Lighter ->
            rgb255 188 222 250

        Lightest ->
            rgb255 239 248 255


indigo : Lightness -> Color
indigo lightness =
    case lightness of
        Darkest ->
            rgb255 25 30 56

        Darker ->
            rgb255 47 54 95

        Dark ->
            rgb255 86 97 179

        Base ->
            rgb255 101 116 205

        Light ->
            rgb255 120 134 215

        Lighter ->
            rgb255 178 183 255

        Lightest ->
            rgb255 230 232 255


purple : Lightness -> Color
purple lightness =
    case lightness of
        Darkest ->
            rgb255 33 24 60

        Darker ->
            rgb255 56 43 95

        Dark ->
            rgb255 121 74 207

        Base ->
            rgb255 149 97 226

        Light ->
            rgb255 167 121 233

        Lighter ->
            rgb255 214 187 252

        Lightest ->
            rgb255 243 235 255


pink : Lightness -> Color
pink lightness =
    case lightness of
        Darkest ->
            rgb255 69 18 37

        Darker ->
            rgb255 111 33 63

        Dark ->
            rgb255 235 82 134

        Base ->
            rgb255 246 109 155

        Light ->
            rgb255 250 126 168

        Lighter ->
            rgb255 255 187 202

        Lightest ->
            rgb255 255 235 239
