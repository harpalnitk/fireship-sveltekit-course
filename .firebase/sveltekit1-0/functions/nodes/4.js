import * as server from '../entries/pages/boat-actions-demo/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/boat-actions-demo/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/boat-actions-demo/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.caf29ef7.js","_app/immutable/chunks/scheduler.c6bb22b0.js","_app/immutable/chunks/index.c83e402d.js","_app/immutable/chunks/forms.ba07bc8f.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.0df22ccc.js","_app/immutable/chunks/index.31c0fd71.js"];
export const stylesheets = [];
export const fonts = [];
