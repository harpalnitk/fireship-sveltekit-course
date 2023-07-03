

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.bad2f502.js","_app/immutable/chunks/scheduler.c6bb22b0.js","_app/immutable/chunks/index.c83e402d.js","_app/immutable/chunks/firebase.c2bbda79.js","_app/immutable/chunks/index.31c0fd71.js"];
export const stylesheets = [];
export const fonts = [];
