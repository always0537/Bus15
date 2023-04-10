import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as env from '$env/static/private';
import type LineIdToken from "@Models/LineIdToken";
import * as MongoDb from 'mongodb';
import type User from "@Models/User";

const client = new MongoDb.MongoClient(env.MongoDb_ConnectionString);

export async function GetJWTfromLineCode(code: string): Promise<string> {
    let formBody: URLSearchParams = new URLSearchParams();
    formBody.append('grant_type', 'authorization_code');
    formBody.append('code', code);
    formBody.append('redirect_uri', env.LINE_redirect_uri + 'login');
    formBody.append('client_id', env.LINE_client_id);
    formBody.append('client_secret', env.LINE_client_secret);


    const res = await fetch('https://api.line.me/oauth2/v2.1/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
    });
    const json = await res.json();
    console.log(json);

    return json.id_token as string;
}

export const GetLineDecode = (id_token: string) => jwt.decode(id_token) as LineIdToken | null;