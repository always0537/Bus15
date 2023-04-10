import * as env from '$env/static/private';
import * as line from '../util/LineUtil';
import {fail, redirect} from '@sveltejs/kit';
const lineLoginLink: string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}login
&state=login
&scope=openid%20profile`);

export const load = (async ({cookies, url}) => {

    return {
        isLogin: cookies.get('token') ? true : false,
        lineLoginLink: lineLoginLink,
    };
})

export const actions = {
    loginInDev: async ({request, fetch, cookies}) => {
        const data = await request.formData();
        const user = data.get('user');
        const response = await fetch('/api/simulateLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id: user})
            }).then(async (res) => {
                let data = await res.json();
                if(res.ok){
                    cookies.set('token', data.token, {
                        httpOnly: true,
                        path: '/',
                        secure: true,
                        sameSite: 'strict',
                        maxAge: 60 * 60 * 24 * 7 // 1 week
                    });
                    return redirect(303, '/');
                }
                else{
                    return fail(500, {success: false, error: data.message});
                }
            }).catch((err) => {
                return fail(500, {success:false, error: err.message});
            });
    }
}