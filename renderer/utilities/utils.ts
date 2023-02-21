import Router, { useRouter } from 'next/router';
import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';

interface DecodedJwtPayload extends JwtPayload { 
    secret: string;
    exp: number;
}

const jwtSecret: string = process.env.JWT_SECRET;


export function checkIfUserIsLoggedIn() : boolean {
    let token = localStorage.getItem('token');
    if (token) {
        let decodedToken: DecodedJwtPayload = jwtDecode(token);
        const now = new Date().getTime() / 1000;
        if (decodedToken.exp < now) {
            console.log('token expired');
            return false;
        }
        return true;

    }
    return false;
}
