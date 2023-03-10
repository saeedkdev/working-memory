import React from 'react';
import { createContext, useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { checkIfUserIsLoggedIn } from '../utilities/utils';

const apiEndpoint: string = process.env.API_ENDPOINT;


function Login() {

    // load process.env variables

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let loginUrl = `${apiEndpoint}/login`;

    function logMeIn() {
        let loginData = {
            email: email,
            password: password
        }
        console.log("You requested to login with the following data: ", loginData);
        axios.post(`${apiEndpoint}/login`, loginData).then((response) => {
            console.log("Response from the server: ", response);
            if(response.status == 200) {
                let token = response.data;
                localStorage.setItem("token", token);
                // createContext.arguments[0].setAuth(true);
                Router.push("/home");
            }
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }

    useEffect(() => {
       let isLoggedIn = checkIfUserIsLoggedIn(); 
       if(isLoggedIn) {
           setIsLoggedIn(true);
           Router.push("/home");
       }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Login to Working Memory</title>
            </Head>
            <div className="grid grid-col-1 text-2xl w-full p-5 justify-center text-center">
                <div className="flex flex-row justify-center"> 
                    {/* login form */}
                    <div className="flex flex-col w-10/12">
                        <div className="w-full bg-gradient-to-b from-dark-gray to-darkest-gray p-5 rounded-2xl h-40 min-h-full text-center">
                            <img className="w-1/4 mx-auto mb-5" src="https://i.ibb.co/cJKn7sF/wm-logo-v2.png" />
                            <input className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text text-center" type="text" placeholder="youremail@example.com" 
                            value={email} onChange={ e => setEmail(e.target.value) } 
                            onFocus={
                            e => e.target.placeholder = ""
                            } 
                            onBlur={ e => e.target.placeholder = "youremail@example.com"}
                            /> 
                            <input className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text text-center" type="password" placeholder="Type in you password ..." 
                            value={password} onChange={ e => setPassword(e.target.value) } 
                            onFocus={
                                e => e.target.placeholder = ""
                            } 
                            onBlur={ e => e.target.placeholder = "Type in you password ..."}
                            />
                            <button className="w-1/4 h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text hover:bg-gray-300 hover:text-gray-800"
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
