import { store } from '@Models/AuthToken.js';
import User from '@Models/User.js';

export const load = (async () => {
    let user = new User(null, null, null, null);
    store.subscribe((value) => {
        user = value;
    });
    return {
        isLogin: user._id != null
    };
}) 