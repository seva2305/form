import React from 'react'
import "./MainForm.css";
import { useState } from 'react';

const MainForm = () => {
    const [fname, setFname] = useState('');
    const [fnameErr, setFnameErr] =useState(false);
    const [lname, setLast] =useState('');
    const [lnameErr, setLnameErr] =useState(false);
    const [email, setEmail] =useState('');
    const [emailErr, setEmailErr] =useState(false);
    const [phone, setPhone] =useState('');
    const [phoneErr, setPhoneErr] =useState(false);
    const [age, setAge] =useState('');
    const [ageErr, setAgeErr] =useState(false);
 



    const fnameHandle = (e) => {
        let item =e.target.value;
        if (item.length >=3 && item.length <=7) {
            setFnameErr(false)
        }
        else {
            setFnameErr(true)
        }
        setFname(item)
    }
    const valueHandle = () => {
        if (fnameErr == true)
        {
            alert('your First name is Invalid');
        }
    }
    const lnameHandle = (e) => {
        let lnameitem =e.target.value;
        if (lnameitem.length >=5 && lnameitem.length <=9) {
            setLnameErr(false)
        }
        else {
            setLnameErr(true)
        }
        setLast(lnameitem);
    }
    const valuesHandle = () => {
        if (lnameErr == true);
        {
            alert('your Last name is Invalid');
        }
    }
    const emailHandle = (e) => {
         let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
         let emailvalue = e.target.value;
         setEmailErr(!(regex.test(emailvalue)));
         setEmail(emailvalue); 
    }
    const phoneHandle = (e) => {
        let regex =/^[6-9]\d{9}$/g
        let phonevalue = e.target.value;
        setPhoneErr(!(regex.test(phonevalue)));
        setPhone(phonevalue);   
    }
    const ageHandle = (e) => {
        let ageitem =e.target.value;
        console.log ("this is" ,age);
        if (ageitem >16 && ageitem < 100 ){
        setAgeErr (false);
    }
    else {
        setAgeErr (true);
    }
    setAge(ageitem)

    }

    return (
        <>
            <div className="mainContainer">
                <div className="mainForm">
                    <h1 className='mainHeading'>Regestration Form</h1>
                    <form className='formBox' onSubmit={valuesHandle} >
                        <label className='mainLabel'>First Name:</label>
                        <input type="text" name="firstname" onChange={fnameHandle} className='mainInput' />{fnameErr?<span className='ErroeMessage'>First Name Invalid</span>:""} <br/>
                        <label className='mainLabel'>Last Name:</label>
                        <input type="text" name="lastname" onChange={lnameHandle} className='mainInput' /> {lnameErr?<span className='ErroeMessage'>Last Name Invalid</span>:""}
                        <br/>
                        <label className='mainLabel'>Email:</label>
                        <input type="text" name="email" onChange={emailHandle} className='mainInput' /> {emailErr?<span className='ErroeMessage'> Email is Invalid</span>:""}
                        <br/>
                         <label className='mainLabel'>Phone:</label>
                        <input type="text" name="phone" onChange={phoneHandle} className='mainInput' /> {phoneErr?<span className='ErrorMessage'>Phone no. is Invalid</span>:""}
                        <br/>
                        <label className='mainLabel'>Age:</label>
                        <input type="text" name="age" onChange={ageHandle} className='mainInput' />{ageErr?<span className='ErrorMessage'>Age is Invalid</span>:""}
                        <button type="button" className='mainButton'>submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MainForm;