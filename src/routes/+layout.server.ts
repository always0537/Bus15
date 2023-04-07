
export const load = (async ({cookies}) => {
    const loginId = cookies.get('lineId');
    return {
        isLogin: loginId != null
    };
}) 