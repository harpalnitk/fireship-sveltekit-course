>npm create svelte@latest fireship-sveltekit-course

1. select typescript
2. select eslint and prettier
3. npm i
4. npm run dev

3 config files
1. vite.config : bundler which bundles all the code
2. tsconfig controls typescript
3. svelte.config.js which controls settings for framework itself

4. app.d.ts file used to create own custom type definitions

## Create lib directory in src

## routing [slug]  dynamic routing

example.com/jeff

//on server side
export const load = (async ()=>{
    params.username === 'jeff'//
})

## on client side
 $page.params.username


## Navigation can be achieved with anchor tags only

in app.html
<body data-sveltekit-preload-data="hover">
tells browser to pre-render a page when user hovers over a link

we can remove this from body tag

we can force full page reload
<a data-sveltekit-reload href='/hello'>Hello </a>

ton of utilities for navigation 

import {
    afterNavigate
    beforeNavigate,
    disableScrollHandling,
    goto,
    invalidate,
    invalidateAll,
    preloadCode,
    preloadData
} from '$app/navigation'

goto('/hello');    navigate to a specific URL

run code before or after a user navigate to a page


//for creating client side router guard
beforeNavigate((navigation)=>{
    if(!admin){
        navigation.cancel();
    }
})

invalidate('/hello')   invalidates the data cache






4 special files in svelte with + sign in front

page
layout
server
error

extensions for these files are .ts,.svelte,server.ts

## on first load content is rendered on server

after that svelte will hydrate the page and client side
javascript will take over

page.ts file can do data fetching both on client and server
page.server.ts file will do data fetching only on server

a server.ts file is used to create API routes and runs only on server

error.svelte fallback for page when data fetching fails

### 3 distinct ways to fetch data
1. client side

<script lang='ts'>
    import {onMount} from 'svelte';

    let todo=null;

    onMount(async ()=>{
        todo = await fetch('../todos').then(res=> res.json())
    });
    </script>

    should be used for content which is only for
    authenticated users


2. server side

+page.server.ts in the same directory which needs data

import type {PageServerLoad} from './$types';

export const load = ( async ()=>{

//fetch api data
//fetch firebase admin sdk
//acces environment variables
//use raw sql
//access file system


    return {
        title:'My Data',
        text:'Hi'
    };
}) satisfies PageServerLoad;

this file exports a load function which will be executed when 
user navigates to that page;
this code will not be bundled on client side code
 
 in svelte component this data can be accessed as

 {data.text}



 
3. hybrid

page.ts file

import type {PageLoad} from './$types';

export const load = ( async ()=>{

//fetch api data
//fetch firebase admin sdk
//acces environment variables
//use raw sql
//access file system


    return {
        title:'My Data',
        text:'Hi'
    };
}) satisfies PageLoad;

On initial page load it will run server side
but on subsequent navigation it will run client side

because it runs client side we won't be able to access
environment variables
access firebase admin sdk

//game changing feature of svelte

we can access page data

import {page} from '$app/stores';

this is useful when we have deeply nested components 
and we can access page data anywhere in nested components

{$page.data.text}

in react do prop drilling for the same


### rendering and caching

svelte allows to use 3 strategies simultaneously in same application

1. SSR
2. SSR and client taking over
3. Pre-render where pages are pre-rendered on server on CDN for
maximum performance where data does not change often


for pre-rendering go to page.ts or page.server.ts
and export a variable 

+page.ts file

import type {PageLoad} from './$types';
export const prerender = true;
export const load = ( async ()=>{

//fetch api data
//fetch firebase admin sdk
//acces environment variables
//use raw sql
//access file system


    return {
        title:'My Data',
        text:'Hi'
    };
}) satisfies PageLoad;

if data changes page will not reflect it untill site is rebuilt and
deployed again

### entire site can be pre-rendered using the static adapter

default strategy is SSR
but if we set ssr to false

+page.ts file

import type {PageLoad} from './$types';

export const ssr = false;

export const load = ( async ()=>{

//fetch api data
//fetch firebase admin sdk
//acces environment variables
//use raw sql
//access file system


    return {
        title:'My Data',
        text:'Hi'
    };
}) satisfies PageLoad;

tells sveltekit to only render page on the client side

## 

+page.ts file

import type {PageLoad} from './$types';

export const csr = false;

export const load = ( async ()=>{

//fetch api data
//fetch firebase admin sdk
//acces environment variables
//use raw sql
//access file system


    return {
        title:'My Data',
        text:'Hi'
    };
}) satisfies PageLoad;

will disable hydration and router on the page
// good option for basic pages like about page
which does not have any interactivity

## cache control headers
if load function run again and again then 

+page.ts file

import type {PageLoad} from './$types';



export const load = ( async ({setHeaders})=>{

//fetch api data
//fetch firebase admin sdk
//acces environment variables
//use raw sql
//access file system


setHeaders({
    'cache-control':'max-age=60'   
})

//result of this load function will be cached for 60 seconds

//In some cases API might have it's own cache control settings

//then we can mirror those settings in our code

setHeaders({
    age: res.headers.get('age),
    'cache-control': res.headers.get('cache-control')   
})

    return {
        title:'My Data',
        text:'Hi'
    };
}) satisfies PageLoad;


# API ROUTES

we might have a route where we want to return JSON, FILE or TEXT
instead of HTML

we can create server.ts file in one of our routes

import type {RequestHandler, RequestEvent} from './$types';

export const GET:RequestHandler = async (e: RequestEvent)=>{

    //request Data is available in RequestEvent and provide 
    //access to cookie 
    e.cookies;
    e.params; //url params
    e.request.body //request object

//one svelte feature
//is we can make fetch calls
and cookie and authorization headers are automatically made part of that call

e.fetch('someURL')

    return new Response();
}
export const POST:RequestHandler = async ()=>{
    return new Response();
//svelte helper functions for response

return json({name:'dog'})
//headers are automatically provided with json function

//error handling
if(!user.admin){
    throw error(401,'Unauthorized')
}



}
export const DELETE:RequestHandler = async ()=>{
    return new Response();
}



### TAILWIND CSS INSTALLATION
> npm install -D tailwindcss postcss autoprefixer
> npx tailwindcss init -p

1. add 
content: ['./src/**/*.{html,js,svelte,ts}'],
in tailwind.config.js file
2. create app.css file in src dir
3. add following in app.css file
@tailwind base;
@tailwind components;
@tailwind utilities;
4. import '../app.css'; in root layout file

### INSTALL DAISYUI
>npm i -D daisyui@latest

1. add to tailwind.config.js
 plugins: [require("daisyui")],

 in app.html add
 <html lang="en" data-theme="dark">

 which is dark theme of daisy


 ### DEPLOYMENT
 >npm i -g firebase-tools
 >firebase login

 ## sveltekit hosting is only experimental on firebase
 # we need to enable this feature on the CLI
 > firebase experiments:enable webframeworks

 >firebase init hosting

 it will automatically detect that we are in sveltekit project

 On completion it will create firebase.json file and .firebaserc file
 >firebase deploy
  to push the code to the cloud

  ### need subscription to cloud functions







