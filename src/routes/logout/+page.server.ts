import { logout } from '@Models/AuthToken.js';

export const load = (async () => {
    logout();
});