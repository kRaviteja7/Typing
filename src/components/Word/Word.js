import { Correct, InCorrect, Text } from "./style";

import React from 'react'

const Word = (props) => {
    const {text,correct}=props
    if(correct===true){
        return(<Correct>{text}</Correct>)
    }
    if(correct===false){
        return(<InCorrect>{text}</InCorrect>)
    }
    return(<Text>{text}</Text>)
}

export default Word
