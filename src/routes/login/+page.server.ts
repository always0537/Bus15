import * as env from '$env/static/private';
import { redirect, type Actions } from '@sveltejs/kit';
import * as line from '../../util/LineUtil';
import { setContext } from 'svelte';

export const load = (async (event) => {

});

export const actions: Actions = {
    default: async (event) => {
        const code = event.url.searchParams.get('code');

        if(code){
            const jwtFromLine = await line.GetJWTfromLineCode(code);        
            const userInfo = line.GetLineDecode(jwtFromLine);
            console.log({userInfo: userInfo});

            await event.fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then((res) => {
                if(res.ok) {
                    event.cookies.set('token', jwtFromLine, {
                        httpOnly: true,
                        path: '/',
                        secure: true,
                        sameSite: 'strict',
                        maxAge: 60 * 60 * 24 * 7 // 1 week
                    });
                }
                throw redirect(303, '/');
            });             
        }
        else{
            throw redirect(302, '/');
        }
    }
};