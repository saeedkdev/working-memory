import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function logMeIn() {
        let loginData = {
            email: email,
            password: password
        }
        console.log("You requested to login with the following data: ", loginData);
        axios.post('http://localhost:3000/login', loginData).then((response) => {
            console.log("Response from the server: ", response);
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }

    return (
        <React.Fragment>
            <Head>
                <title>Login to Working Memory</title>
            </Head>
            <div className="grid grid-col-1 text-2xl w-full p-5 justify-center">
                <div className="flex flex-row justify-between"> 
                    {/* login form */}
                    <div className="flex flex-col w-10/12">
                        <div className="w-full bg-gradient-to-b from-dark-gray to-darkest-gray p-5 rounded-2xl h-40 min-h-full">
                            <img className="w-1/4 mx-auto mb-5" src="https://i.ibb.co/M9r4MWM/wm-logo.png" />
                            <input className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text text-center" type="text" placeholder="youremail@example.com" 
                            value={email} onChange={ e => setEmail(e.target.value) } /> 
                            <input className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text text-center" type="password" placeholder="Type in you password ..." 
                            value={password} onChange={ e => setPassword(e.target.value) } /> 
                            <button className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text hover:bg-gray-300 hover:text-gray-800"
                    onClick={logMeIn}
                        >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Login;
