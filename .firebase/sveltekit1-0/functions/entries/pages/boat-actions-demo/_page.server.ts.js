const load = async ({ cookies }) => {
  const boatName = cookies.get("boatName");
  return {
    boatName
  };
};
const actions = {
  //  default: async ({request,cookies})=>{
  //    const formData = await request.formData();
  //    const boatName = formData.get('boatName') as string;
  //    cookies.set('boatName',boatName);
  //  }
  //  for multiple actions use different names; default action can't
  //be used with  ultiple actions
  rename: async ({ request, cookies }) => {
    const formData = await request.formData();
    const boatName = formData.get("boatName");
    cookies.set("boatName", boatName);
  },
  capitalize: async ({ cookies }) => {
    const boatName = cookies.get("boatName");
    cookies.set("boatName", boatName?.toUpperCase());
  }
};
export {
  actions,
  load
};
