import { readable, writable } from "svelte/store";
import User from "@Models/User";

const initUser = new User(null, null, null, null);

export const store = writable(initUser);

export const getInfo = (async () => {
});

export const logout = (async () => {
    store.set(initUser);
});