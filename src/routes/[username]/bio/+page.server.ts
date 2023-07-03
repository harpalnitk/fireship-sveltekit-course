import type { PageServerLoad, Actions } from "./$types";
import { adminAuth, adminDB } from "$lib/server/admin";
import { error, fail, redirect } from "@sveltejs/kit";

//cookies can also be ther in the input params of load function
export const load = (async ({ locals, params }) => {

    // const sessionCookie = cookies.get('__session');

    // try {
    //   // use firebase adminSDK to verify the sessionCookie
    //   //this cookie returns decoded Claims 
    //   //that contain things like userId and other userData
    //   const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);
    //   //we can then use userId to fetch firebase doc for that user
    //   const userDoc = await adminDB.collection('users').doc(decodedClaims.uid).get();
    //   const userData = userDoc.data();
    //   return {
    //     bio:userData?.bio,
    //   }
    
    // } catch (err) {
    //   console.log('error in server bio load function',err);
    //   //if firebase fails to identify the session cookie
    //   throw error(401,'Unauthorized request!')
    // }


    //! ALL THE ABOVE CODE MOVED TO HOOK

    const uid = locals.userID;

    console.log('userid in bio server file', uid)

    if (!uid) {
      throw redirect(301, "/login");
    }
  
    const userDoc = await adminDB.collection("users").doc(uid!).get();
    const { username, bio } = userDoc.data()!;
  
    //params.username is from the URL
    if (params.username !== username) {
      throw error(401, "That username does not belong to you");
    }
  
  
    return {
      bio,
    };
}) satisfies PageServerLoad;

export const actions = {
  //default action with no name
    default: async ({ locals, request, params }) => {

      const uid = locals.userID;

      const data = await request.formData();
      const bio = data.get('bio');
  
      const userRef = adminDB.collection("users").doc(uid!);
      const { username } = (await userRef.get()).data()!;
  
      //in server action we can do other validations like
      //if user is owner of that username or not
      
      //params.username is from the URL
      if (params.username !== username) {
        throw error(401, "That username does not belong to you");
      }
  
      if (bio!.length > 260) {
        return fail(400, { problem: "Bio must be less than 260 characters" });
      }
  
      await userRef.update({
        bio,
      });
    },
  } satisfies Actions;