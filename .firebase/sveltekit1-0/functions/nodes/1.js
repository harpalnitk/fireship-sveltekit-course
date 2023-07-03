

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5d8b7416.js","_app/immutable/chunks/scheduler.c6bb22b0.js","_app/immutable/chunks/index.c83e402d.js","_app/immutable/chunks/stores.7df0c0c0.js","_app/immutable/chunks/singletons.0df22ccc.js","_app/immutable/chunks/index.31c0fd71.js"];
export const stylesheets = [];
export const fonts = [];
