import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.813635a3.js","_app/immutable/chunks/scheduler.c6bb22b0.js","_app/immutable/chunks/index.c83e402d.js","_app/immutable/chunks/stores.7df0c0c0.js","_app/immutable/chunks/singletons.0df22ccc.js","_app/immutable/chunks/index.31c0fd71.js","_app/immutable/chunks/forms.ba07bc8f.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = [];
export const fonts = [];
