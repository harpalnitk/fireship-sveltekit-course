import type { PageServerLoad, Actions } from './$types';

export const load = (async ({cookies}) => {

    //fecth a cookie from the server
    const boatName = cookies.get('boatName');
	
    return {
        boatName
    };
}) satisfies PageServerLoad;


//actions are useful to handle mutations in the data
//on the server

export const actions = {
    //  default: async ({request,cookies})=>{
    //    const formData = await request.formData();
    //    const boatName = formData.get('boatName') as string;
    //    cookies.set('boatName',boatName);
    //  }

    //  for multiple actions use different names; default action can't
    //be used with  ultiple actions

    rename: async ({request,cookies})=>{
        const formData = await request.formData();
        const boatName = formData.get('boatName') as string;
        cookies.set('boatName',boatName);
      },
    capitalize: async ({cookies})=>{
        //const formData = await request.formData();
        const boatName = cookies.get('boatName') as string;
        cookies.set('boatName',boatName?.toUpperCase());
      }

} satisfies Actions;