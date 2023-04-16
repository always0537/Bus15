import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { PageServerLoadEvent } from '../$types';

export const load = (async (event: PageServerLoadEvent) => {
  let userID = event.cookies.get("token");
  if (userID === null || userID === undefined) {
    throw redirect(303, "/")
  }

  return { userID: userID };
});