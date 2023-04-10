import * as env from '$env/static/private';
import * as line from '../util/LineUtil';
import { setContext } from 'svelte';

const lineLoginLink: string = (`https://access.line.me/oauth2/v2.1/authorize?response_type=code
&client_id=${env.LINE_client_id}
&redirect_uri=${env.LINE_redirect_uri}/login
&state=login
&scope=openid%20profile`);

export const load = (async ({cookies, url}) => {
    return {
        lineLoginLink: lineLoginLink,
    };
})

export const actions = {
    
}