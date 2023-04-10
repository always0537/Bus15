import jwt from 'jsonwebtoken';
import * as env from '$env/static/private';
import { setContext } from 'svelte';

export const load = (async (event) => {
    let isLogin = false;
    let user = null;
    const token = event.cookies.get('token');    
    //verify token
    if(token != null){
        try{
            const verifier = jwt.verify(token, env.JWT_secret);
            user = verifier;
            isLogin = true;
        }
        catch{

        }
    }
    return {
        isLogin: isLogin,
        user: user
    }
});