import jwt from 'jsonwebtoken';
import * as env from '$env/static/private';

export const load = (async (event) => {
    let isLogin = false;
    const token = event.cookies.get('token');    
    //verify token
    if(token != null){
        try{
            const verifier = jwt.verify(token, env.JWT_secret);
            isLogin = true;
        }
        catch{

        }
    }
    return {
        isLogin: isLogin
    }
});