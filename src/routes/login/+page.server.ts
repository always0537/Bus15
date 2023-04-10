import * as env from '$env/static/private';
import { redirect, type Actions, fail } from '@sveltejs/kit';
import * as line from '../../util/LineUtil';
import { setContext } from 'svelte';
import jwt from 'jsonwebtoken';

export const load = (async (event) => {

});

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const token = data.get('token') as string;

        event.cookies.set('token', token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true,
            sameSite: 'strict',
            secure: true
        });
        throw redirect(303,'/');
    },
}