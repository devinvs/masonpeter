import {useState} from 'react';

import mason1 from './images/mason1.jpg'
import mason2 from './images/mason2.jpg'
import mason3 from './images/mason3.jpg'
import mason4 from './images/mason4.jpg'
import mason5 from './images/mason5.jpg'

import peter1 from './images/peter1.jpg'
import peter2 from './images/peter2.jpg'
import peter3 from './images/peter3.jpg'
import peter4 from './images/peter4.jpg'
import peter5 from './images/peter5.jpg'

const Game = () => {
    const key = [
        {name: "Mason", img: mason3},
        {name: "Peter", img: peter2},
        {name: "Peter", img: peter1},
        {name: "Mason", img: mason4},
        {name: "Peter", img: peter5},
        {name: "Mason", img: mason2},
        {name: "Peter", img: peter4},
        {name: "Mason", img: mason1},
        {name: "Mason", img: mason5},
        {name: "Peter", img: peter3},
    ];

    const [curr, setCurr] = useState(0);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");

    const nextQuestion = () => {
        setCurr(curr+1);
    }

    const guessMason = () => {
        if (key[curr].name === "Mason") {
            setScore(score + 1);
            setError("");
        } else {
            setError("INCORRECT!!!");
        }

        nextQuestion();
    }

    const guessPeter = () => {
        if (key[curr].name === "Peter") {
            setScore(score + 1);
            setError("");
        } else {
            setError("INCORRECT!!!");
        }

        nextQuestion();
    }

    if (curr===10) {
        return (
            <div>
                <h2>Score: {score} / 10</h2>
            </div>
        )
    } else {
        return (
            <div>
                <p>{error}</p>
                <img src={key[curr].img} alt=""/>
                <br/>
                <button onClick={guessMason} >Mason</button>
                <button onClick={guessPeter} >Peter</button>
            </div>
        );
    }
}

export default Game;
