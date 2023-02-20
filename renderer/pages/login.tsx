import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Login() {

    return (
        <React.Fragment>
            <Head>
                <title>Login to Working Memory</title>
            </Head>
            <div className="grid grid-col-1 text-2xl w-full p-5">
                <div className="flex flex-row justify-between"> 
                    {/* login form */}
                    <div className="flex flex-col w-10/12">
                        <div className="w-full bg-gradient-to-b from-dark-gray to-darkest-gray p-5 rounded-2xl h-40 min-h-full">
                            <img className="w-1/4 mx-auto mb-5" src="https://i.ibb.co/M9r4MWM/wm-logo.png" />
                            <input className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text text-center" type="text" placeholder="youremail@example.com" />
                            <input className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text text-center" type="text" placeholder="Type in you password ..." />
                            <button className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none text-sm mb-5 p-2 px-5 text-note-text hover:bg-gray-300 hover:text-gray-800">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Login;
