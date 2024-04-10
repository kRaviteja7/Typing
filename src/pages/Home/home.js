import React, { useState, useRef } from "react";
import { Container, Main, Heading, Input, Congratulations } from "./style";
import Timer from "../../components/Timer/Timer";
import Word from "../../components/Word/Word";
import { getData } from '../../data';

const Home = () => {
    const [userText, setUserText] = useState("");
    const [result, setResult] = useState(false);
    const data = useRef(getData());

    const [activeWordIndex, setActiveWordIndex] = useState(0);
    const [startCounter, setStartCounter] = useState(false);
    const [correctWordArray, setCorrectWordArray] = useState([]);

    const handleChange = (value) => {
        setStartCounter(true);

        if (value.endsWith(" ")) {
            if (activeWordIndex === data.current.length) {
                setUserText("");
                setResult(true);
                setStartCounter(false);
                return;
            }

            setActiveWordIndex(index => index + 1);
            setUserText("");

            setCorrectWordArray(_data => {
                const word = value.trim();
                const newResult = [..._data];
                newResult[activeWordIndex] = word === data.current[activeWordIndex];
                return newResult;
            });
        } else {
            setUserText(value);
        }
    };

    const handleResetClick = () => {
        window.location.reload(); // Reset time to 0
    };

    return (
        <Container>
            <Main>
                <Heading>Typing Speed Task</Heading>
                <Timer
                    startCounter={startCounter}
                    correctWords={correctWordArray.filter(Boolean).length}
                />
                {result ? null : (
                    <div style={{ width: "100%", overflowX: "auto", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        {data.current.map((word, index) => (
                            <React.Fragment key={index}>
                                <Word
                                style={{ margin: "5px", whiteSpace: "pre" }}
                                text={word}
                                correct={correctWordArray[index]}
                                />
                                {index < data.current.length - 1 && <span>&nbsp;</span>}{/* Add a space character */}
                          </React.Fragment>
                        ))}
                    </div>
                )}
                {result ? (
                    <Congratulations>Congrats Buddy</Congratulations>
                ) : (
                    <Input
                        type='text'
                        value={userText}
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder='Start typing...'
                    />
                )}
                <button onClick={handleResetClick} style={{ marginLeft: 800, backgroundColor: 'blueviolet', height: 40, color: 'white' }}>Reset Time</button>
            </Main>
        </Container>
    );
}

export default Home;
