import * as env from '$env/static/private';
import { redirect, type Actions, fail } from '@sveltejs/kit';
import * as line from '../../util/LineUtil';
import { setContext } from 'svelte';

export const load = (async (event) => {

});

export const actions: Actions = {
    default: async (event) => {
        const code = event.url.searchParams.get('code');

        if(code){
            await event.fetch(`/api/login?code=${code}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(async (res) => {
                const data = await res.json();
                console.log(res);
                console.log(data);
                if(res.status == 200){
                    return data;
                }
                else{
                    return fail(data.status, {success: false, error: data.message});
                }
            }).catch((err) => {
                return {success: false, error: `${err.name}: ${err.message}`};
            });             
        }
        else{
            throw redirect(302, '/');
        }
    }
};