//server based authentication using firebase

import { adminAuth } from '$lib/server/admin';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {

	//idToken value is generated on googleSignIn in front end app and
	//sent in the body of POST request

    const { idToken } = await request.json();

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

	//verify idToken using adminAuth api on the server
    const decodedIdToken = await adminAuth.verifyIdToken(idToken);

	//added security feature make sures that auth time on that
	//token was less than 5 minutes ago; because cookie
	//should only be set if a user authenticated recently
   
	//Cookies are basically values that are created on the server
	//and then sent to the client and stored in the browser
	if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
        const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
        const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: '/' };

        //use sveltekit to set cookies in the browser client
		// if we are planning on deploying the app to firebase
		//we need to give the cookie name of __session;
		//firebase will cache this data on CDN but it need that specific
		//name in order to work
		cookies.set('__session', cookie, options);

        return json({ status: 'signedIn' });
    } else {
        throw error(401, 'Recent sign in required!');
    }


};

export const DELETE: RequestHandler = async ({ cookies }) => {
	//use sveltekit to delete cookie
    cookies.delete('__session', { path: '/' });
    return json({ status: 'signedOut' });
}