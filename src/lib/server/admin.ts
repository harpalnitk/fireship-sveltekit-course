// only used for authenticating users
//on server using cookies

//in server folder in lib tells svelte to
// run this file only on server

//0. > npm i firebase-admin
//1. go to project settings on firebase console
//2. select tab service accounts
//3. Click on generate new private key
//4. include file in gitignore service-account.json
//5. Add .env file and store
// FB_PROJECT_ID=
// FB_CLIENT_EMAIL=
// FB_PRIVATE_KEY=
//from downloaded service-account.json file

//admin can only be used on server
// i.e. in server.ts file or page.server.ts file

import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private'
import pkg from 'firebase-admin';


//try catch used because in development
//it wiil try to initialize the app more than once
//which will cause errors
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
    }),
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error('Firebase Admin Error: ', err.stack)
  }
}


export const adminDB = getFirestore();
export const adminAuth = getAuth();
