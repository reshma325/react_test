import React, { useState } from 'react'

const Register = () => {
    const [data, setData] = useState({ name: "", email: "", password: "" });
    
    function sendData() {
        if (data.name && data.email && data.password) {
             setData([...data,])
            alert("Registered!!!")
        } else {
            alert("Please fill all the required data")
        }
    }


    return (
        <div>
            <form onSubmit={sendData} >
                <label>Name:</label><br />
                <input type='text' name='name'></input><br />
                <label>Email:</label><br />
                <input type='email' name='email'></input><br />
                <label>Password:</label><br />
                <input type='password' name='password'></input><br />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Register