import * as env from '$env/static/private';
import { redirect, type Actions, fail, type ServerLoadEvent } from '@sveltejs/kit';
import * as line from '../../util/LineUtil';
import { setContext } from 'svelte';
import jwt from 'jsonwebtoken';

export const load = (async (event: ServerLoadEvent) => {

});

export const actions: Actions = {
    setToken: async (event) => {
        const token = (await event.request.formData()).get('token') as string;
        console.log(token);
        event.cookies.set('token', token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true,
            sameSite: 'strict',
            secure: true
        });
        throw redirect(303, '/');
    },
}