import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { checkIfUserIsLoggedIn, isCommandValid, logout } from '../utilities/utils';

function Home() {

    const [currentNote, setCurrentNote] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleNoteChange = (text: React.SetStateAction<string>) => {
        setCurrentNote(text);
    }
    
    // if enter was pressed, save the note
    // and clear the input
    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            parseNoteBlock(e, currentNote);
        }
    }

    const parseNoteBlock = (e: any, text: string) => {
        if (text[0] === '/') {
            let command = text.split(' ')[0].slice(1);
            let isValid = isCommandValid(command);
            if (isValid) { 
                console.log('valid command');
                e.preventDefault();
                setCurrentNote('');
            }
        }
    }

    useEffect(() => {
        let isLoggedIn = checkIfUserIsLoggedIn();
        if(isLoggedIn) {
            setIsLoggedIn(true);
        } else {
            Router.push("/login");
        }
    }, [currentNote]);


  return (
    <React.Fragment>
        <Head>
            <title>Working Memory</title>
        </Head>
        <div className="grid grid-col-1 text-2xl w-full text-center p-5">
            <div className="flex flex-row justify-between"> 
                <div className="flex flex-col w-10/12">
                    {/* search bar */}
                    <input className="w-full h-10 rounded-2xl bg-dark-gray focus:outline-none 
                    text-sm mb-5 p-2 px-5 text-note-text" type="text" placeholder="search ..." />

                    <div className="w-full bg-gradient-to-b from-dark-gray to-darkest-gray p-5 rounded-2xl h-40 min-h-full">
                        <textarea 
                        onChange={(e) => handleNoteChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        value={currentNote}
                        className="w-full h-full text-sm text-note-text bg-transparent-gray 
                        focus:outline-none resize-none border-b 
                        border-gray-700 ">
                        </textarea>
                    </div>
                </div>
                <div className="flex flex-col w-2/12">
                    {/* sidebar */}
                    {isLoggedIn ? (
                        <div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-col">
                                    <button 
                                    onClick={() => logout()}
                                    className="rounded-full bg-dark-gray focus:outline-none text-sm ml-5 mb-5 p-2 px-5 text-note-text">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            
                        </div>
                    )}
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
