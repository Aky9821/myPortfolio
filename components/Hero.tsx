import React from 'react'
import { Typewriter, useTypewriter , Cursor} from 'react-simple-typewriter'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["hello1", "hello2", "hello3"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#DC143C'></Cursor>
            </h1>
        </div>
    )
}

export default Hero