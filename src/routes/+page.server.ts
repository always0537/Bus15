import * as mongo  from 'mongodb';


export const load = (async ({cookies, url}) => {
    const loginId = cookies.get('lineId');
    let isLogin : boolean = loginId != null ? true : false;
    
    return {
        isLogin: isLogin
    };
})

export const actions = {
    loginInDev:async (event) => {
        const lineId = "test";
        event.cookies.set('lineId', lineId);
        // const response = await event.fetch('/api/loginByLineId', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({lineId: lineId})
        // });
        // const user = await response.json();
        // if(user != null){
        //     event.cookies.set('lineId', user._id);
        // }
        // else{
        //     alert('登入失敗');
        // }
    }
}