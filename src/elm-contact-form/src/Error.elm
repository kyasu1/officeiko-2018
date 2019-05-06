module Error exposing (Error, errorField, invalid, required)


type Error
    = Required
    | Invalid String


required =
    Required


invalid =
    Invalid


errorField : Error -> String
errorField error =
    case error of
        Required ->
            "入力をお願いします"

        Invalid s ->
            s
