import React from "react";
import {useState} from "react";
const Form = () => {
    const [data,setData] = useState(0);
       const Clicked = () => {
        setData(data +1);
       }
       const Reset = () => {
        setData(0);
       }
    return (
        <>
            <form>
                <lable>
                    name:
                    <input type="text" name="name" />
                </lable>
                <input type="submit" value="submit" />
            </form>
            <h1> button click {data} add</h1>
            <button onClick={Clicked}>click</button>
            <button onClick={Reset} >reset</button>
        
        </>
    );

}
export default Form;