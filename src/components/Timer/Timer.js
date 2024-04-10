import { Container, Speed, Wpm, Span } from "./style";
import React, { useEffect, useState, useRef } from 'react';

const Timer = ({ startCounter, correctWords }) => {
    const [time, setTime] = useState(0);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        if (startCounter) {
            intervalIdRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalIdRef.current);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [startCounter]);

    const min = time / 60;
    const wpm = (correctWords / min || 0).toFixed(2);

    return (
        <Container>
            <Speed>
                TIME: <Span>{time}</Span>
            </Speed>
            <Wpm>
                WPM: <Span>{wpm}</Span>
            </Wpm>
        </Container>
    );
};

export default Timer;
