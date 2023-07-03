import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(data.boatName)}</h1>  <form method="POST" action="?/rename"><input type="text" name="boatName"> <button type="submit" data-svelte-h="svelte-1ou7dtz">Submit</button> <button formaction="?/capitalize" data-svelte-h="svelte-1cnr5tt">Capitalize</button></form>`;
});
export {
  Page as default
};
