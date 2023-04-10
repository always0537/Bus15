export const load = (async (event) => {
    const token = event.cookies.get('token');
    return {
        isLogin: token !== undefined,
    }
});