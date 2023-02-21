import React from 'react';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import Router, { useRouter } from 'next/router';

function Home() {

    const [currentNote, setCurrentNote] = useState('');

    const handleNoteChange = (text: React.SetStateAction<string>) => {
        setCurrentNote(text);
    }
    
    // if enter was pressed, save the note
    // and clear the input
    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            console.log('enter pressed');
            parseNoteText(e, currentNote);
        }
    }

    const parseNoteText = (e: any, text: string) => {
        // if text has / at the beginning, it's a command
        // otherwise, it's a note
        if (text[0] === '/') {
            console.log('command');
            // don't go to the next line
            e.preventDefault();
            setCurrentNote('');
        }
        else {
            console.log('note');
        }
    }

    // log what the user types in the textarea to the console
    useEffect(() => {
        console.log(currentNote);
        let token = localStorage.getItem("token");
        if (token) {
            console.log("You are logged in at home!");
            console.log("Token: ", token);
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
                        border-gray-700 overflow-hidden">
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Home;
