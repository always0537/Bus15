import jwt from 'jsonwebtoken';
import * as env from '$env/static/private';
import { setContext } from 'svelte';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = (async (event: ServerLoadEvent) => {
  let isLogin = false;
  let user = null;
  const token = event.cookies.get('token');
  //verify token
  if (token != null) {
    try {
      const verifier = jwt.verify(token, env.JWT_secret);
      user = verifier;
      isLogin = true;
    }
    catch {

    }
  }
  return {
    isLogin: isLogin,
    user: user
  }
});