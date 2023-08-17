import React from 'react'
import "./MainForm.css";


const MainForm = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="mainForm">
                    <h1 className='mainHeading'>Regestration Form</h1>
                    <form className='formBox' >
                        <label className='mainLabel'>First Name:</label>
                        <input type="text" name="firstname" className='mainInput' /> <br/>
                        <label className='mainLabel'>Last Name:</label>
                        <input type="text" name="lastname" className='mainInput' /> 
                        <br/>
                        <label className='mainLabel'>Email:</label>
                        <input type="text" name="email" className='mainInput' />
                        <br/>
                         <label className='mainLabel'>Phone:</label>
                        <input type="text" name="phone" className='mainInput' /> 
                        <br/>
                        <label className='mainLabel'>Age:</label>
                        <input type="text" name="age" className='mainInput' />
                    </form>
                </div>
            </div>
        </>
    );
}

export default MainForm