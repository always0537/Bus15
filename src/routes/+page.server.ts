import * as env from '$env/static/private';
import { store } from '@Models/AuthToken';
import User from '@Models/User.js';


const lineLoginLink: string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}
&state=login
&scope=openid%20profile`);

export const load = (async ({ cookies, url }) => {
    const loginId = cookies.get('lineId');
    const code = url.searchParams.get('code');
    let isLogin: boolean = false;

    if (loginId)

        return {
            lineLoginLink: lineLoginLink,
            isLogin: isLogin
        };
})

export const actions = {
    loginInDev: async (event) => {
        const user = new User('test', 'test', 'test', null);
        store.set(user);
    }
}