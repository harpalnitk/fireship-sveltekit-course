import{s as L,v as U,p as A,g as v,c as T,e as E,h as b,z as C,d as O,k as g,w as P,l as R,i as J,m as G}from"../chunks/scheduler.c6bb22b0.js";import{g as Y}from"../chunks/globals.7f7f1b26.js";import{S as F,i as K,d as w,v as M,a as h,e as m,g as k,p as z,n as W,s as Q}from"../chunks/index.c83e402d.js";import{G as q,s as I,b as j,c as x,u as S}from"../chunks/firebase.c2bbda79.js";const{console:V}=Y,y="src/routes/login/+page.svelte";function D(c){let t,u="Sign in with Google",o,i;const f={c:function(){t=v("button"),t.textContent=u,this.h()},l:function(n){t=b(n,"BUTTON",{class:!0,["data-svelte-h"]:!0}),C(t)!=="svelte-eubzr8"&&(t.textContent=u),this.h()},h:function(){k(t,"class","btn btn-primary"),g(t,y,45,2,1127)},m:function(n,d){h(n,t,d),o||(i=z(t,"click",c[1],!1,!1,!1,!1),o=!0)},p:P,d:function(n){n&&m(t),o=!1,i()}};return w("SvelteRegisterBlock",{block:f,id:D.name,type:"else",source:"(34:0) {:else}",ctx:c}),f}function H(c){let t,u,o=c[0].displayName+"",i,f,s,n="You are logged in",d,e,a="Sign out",r,$;const B={c:function(){t=v("h2"),u=R("Welcome, "),i=R(o),f=T(),s=v("p"),s.textContent=n,d=T(),e=v("button"),e.textContent=a,this.h()},l:function(l){t=b(l,"H2",{class:!0});var p=J(t);u=G(p,"Welcome, "),i=G(p,o),p.forEach(m),f=O(l),s=b(l,"P",{class:!0,["data-svelte-h"]:!0}),C(s)!=="svelte-1958qcl"&&(s.textContent=n),d=O(l),e=b(l,"BUTTON",{class:!0,["data-svelte-h"]:!0}),C(e)!=="svelte-11ll2qa"&&(e.textContent=a),this.h()},h:function(){k(t,"class","card-title"),g(t,y,39,2,912),k(s,"class","text-center text-success"),g(s,y,40,2,972),k(e,"class","btn btn-warning"),g(e,y,41,2,1033)},m:function(l,p){h(l,t,p),W(t,u),W(t,i),h(l,f,p),h(l,s,p),h(l,d,p),h(l,e,p),r||($=z(e,"click",c[2],!1,!1,!1,!1),r=!0)},p:function(l,p){p&1&&o!==(o=l[0].displayName+"")&&Q(i,o)},d:function(l){l&&(m(t),m(f),m(s),m(d),m(e)),r=!1,$()}};return w("SvelteRegisterBlock",{block:B,id:H.name,type:"if",source:"(28:0) {#if $user}",ctx:c}),B}function N(c){let t,u="Login",o,i;function f(e,a){return e[0]?H:D}let s=f(c),n=s(c);const d={c:function(){t=v("h2"),t.textContent=u,o=T(),n.c(),i=E(),this.h()},l:function(a){t=b(a,"H2",{["data-svelte-h"]:!0}),C(t)!=="svelte-bhb3ah"&&(t.textContent=u),o=O(a),n.l(a),i=E(),this.h()},h:function(){g(t,y,36,0,879)},m:function(a,r){h(a,t,r),h(a,o,r),n.m(a,r),h(a,i,r)},p:function(a,[r]){s===(s=f(a))&&n?n.p(a,r):(n.d(1),n=s(a),n&&(n.c(),n.m(i.parentNode,i)))},i:P,o:P,d:function(a){a&&(m(t),m(o),m(i)),n.d(a)}};return w("SvelteRegisterBlock",{block:d,id:N.name,type:"component",source:"",ctx:c}),d}function X(c,t,u){let o;U(S,"user"),A(c,S,e=>u(0,o=e));let{$$slots:i={},$$scope:f}=t;M("Page",i,[]);async function s(){const e=new q,a=await I(x,e);console.log(a);const r=await a.user.getIdToken();await fetch("/api/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:r})})}async function n(){await fetch("/api/signin",{method:"DELETE"}),await j(x)}const d=[];return Object.keys(t).forEach(e=>{!~d.indexOf(e)&&e.slice(0,2)!=="$$"&&e!=="slot"&&V.warn(`<Page> was created with unknown prop '${e}'`)}),c.$capture_state=()=>({GoogleAuthProvider:q,signInWithPopup:I,signOut:j,auth:x,user:S,signInWithGoogle:s,signOutSSR:n,$user:o}),[o,s,n]}class st extends F{constructor(t){super(t),K(this,t,X,N,L,{}),w("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:N.name})}}export{st as component};