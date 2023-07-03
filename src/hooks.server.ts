//we might want to verify the 
//authenticated state on multiple routes
//hooks allow us to implement middleware that run on every server
//request and handle things like cookie verfiication

// but first update app.d.ts file to contain a interface for Locals
//userID

//already authenticated adminAuth
import { adminAuth } from "$lib/server/admin";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  const sessionCookie = event.cookies.get("__session");

  try {
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
    //we need to set uid on event.locals object
    //which will allow us to access this on any 
    //other server endpoint
    event.locals.userID = decodedClaims.uid;
    console.log("found user id", decodedClaims.uid);
  } catch (e) {
    event.locals.userID = null;
    return resolve(event);
  }

  return resolve(event);
}) satisfies Handle;