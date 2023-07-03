

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.92591b40.js","_app/immutable/chunks/scheduler.c6bb22b0.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/index.c83e402d.js","_app/immutable/chunks/firebase.c2bbda79.js","_app/immutable/chunks/index.31c0fd71.js"];
export const stylesheets = [];
export const fonts = [];
