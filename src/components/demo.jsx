
import React from "react";
import { useState } from "react";
const Demo = () => {
    const [counter, setCounter] = useState(0);
    const Clicked = () => {
        setCounter(counter + 1);
    }
    const Reset = () => {
        setCounter(0);
    }
    return (
        <>
            <form>

                <label>
                    name:
                    <input type="text" name="name" placeholder="enter your name" />
                </label>
                <input type="submit" value="submit" />
            </form>
            <h1> hello every {counter} times</h1>
            <button onclike={Clicked}>Click</button>
            <button onclick={Reset}>Reset</button>
        </>
    );
}
export default Demo;