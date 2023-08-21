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
        if (item.length >=3 && item.length <=7 || item.length==0) {
            setFnameErr(false)
        }
        else {
            setFnameErr(true)
        }
        setFname(item)
    }
      const fnamevaluehandle = (e) => {
        e.preventDefault();
        if (fnameErr == true || fname.length==0){
        alert("first name is Invalid")
        }
        if (lnameErr == true || lname.length==0){
            alert("last name is Invalid")
            }
            if (emailErr == true || email.length==0){
                alert("email is Invalid")
                }
                if (phoneErr == true || phone.length==0){
                    alert("phone no. is Invalid")
                    }
                    if (ageErr == true || age.length==0){
                        alert("age is Invalid")
                        }
      } 

    const lnameHandle = (e) => {
        let item =e.target.value;
        if (item.length >=5 && item.length <=9 || item.length==0 ) {
            setLnameErr(false)
        }
        else {
            setLnameErr(true)
        }
        setLast(item);
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

         if(emailvalue.length==0){
            setEmailErr (false)
         }
         
    }
    const phoneHandle = (e) => {
        let regex =/^[6-9]\d{9}$/g
        let phonevalue = e.target.value;
        setPhoneErr(!(regex.test(phonevalue)));
        setPhone(phonevalue);  
        
        if (phonevalue.length==0){
            setPhoneErr (false)
        }
        
    }
    const ageHandle = (e) => {
        let ageitem =e.target.value;
        console.log ("this is" ,age);
        if (ageitem >= 18 && ageitem <= 100 ){
        setAgeErr (false);
    }
    else {
        setAgeErr (true);
    }
       if (ageitem.length==0){
           setAgeErr(false)
       }
    setAge(ageitem)

    }

    const SubmitForm = () => {
        if (fnameErr === true || lnameErr === true || emailErr === true || phoneErr === true || ageErr === true || fname.length === 0 || lname.length === 0 || email.length === 0 || phone.length ===0 || age.length === 0){
            document.getElementById('FailMessage').innerHTML = "Registration Unsuccessful";
            document.getElementById('FailMessage').style.display="block"
            document.getElementById('PassMessage').style.display="none"
        } else {
            document.getElementById('PassMessage').innerHTML = "Registration Successful";
            document.getElementById('PassMessage').style.display="block"
            document.getElementById('FailMessage').style.display="none"
        }
    }

    return (
        <>
            <div className="mainContainer">
                <div className='PassMessage' id='PassMessage'></div>
                <div className='FailMessage' id='FailMessage'></div>
                <div className="mainForm">
                    <h1 className='mainHeading'>Regestration Form</h1>
                    <form className='formBox' onSubmit={ fnamevaluehandle} >
                        <label className='mainLabel'>First Name:</label>
                        <input type="text" name="firstname" onChange={fnameHandle} className='mainInput' />{fnameErr?<span className='ErroeMessage'>First Name Invalid</span>:""} <br/>
                        <label className='mainLabel'>Last Name:</label>
                        <input type="text" name="lastname" onChange={lnameHandle} className='mainInput' /> {lnameErr?<span className='ErroeMessage'>Last Name Invalid</span>:""}
                        <br/>
                        <label className='mainLabel'>Email:</label>
                        <input type="text" name="email" onChange={emailHandle} className='mainInput' /> {emailErr?<span className='ErroeMessage'> Email is Invalid</span>:""}
                        <br/>
                         <label className='mainLabel'>Phone:</label>
                        <input type="text" name="phone" onChange={phoneHandle} className='mainInput' /> {phoneErr?<span className='ErroeMessage'>Phone no. is Invalid</span>:""}
                        <br/>
                        <label className='mainLabel'>Age:</label>
                        <input type="text" name="age" onChange={ageHandle} className='mainInput' />{ageErr?<span className='ErroeMessage'>Age is Invalid</span>:""}
                        <button type="submit"  onClick={SubmitForm} className='mainButton'>submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default MainForm; 