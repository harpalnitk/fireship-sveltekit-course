<script lang="ts">
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
	import { auth,user } from '$lib/firebase';

	async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
	//this will store a json web token on client (not on server)
	//for further uath checks
    const credential = await signInWithPopup(auth, provider);
	console.log(credential);

  //creating cookie on the server and setting it in the browser
  //for server side authentication
    const idToken = await credential.user.getIdToken();
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //csrf token for cross site request forgery attacks
        //but sveltekit does this automatically
        //so no need to set csrf token
        // 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
      },
      body: JSON.stringify({ idToken }),
    });
  }

  async function signOutSSR() {
    //delete the server generated cookie when the user signs out
    const res = await fetch("/api/signin", { method: "DELETE" });
    await signOut(auth);
  }


</script>

<h2>Login</h2>

{#if $user}
  <h2 class="card-title">Welcome, {$user.displayName}</h2>
  <p class="text-center text-success">You are logged in</p>
  <button class="btn btn-warning" on:click={signOutSSR}
    >Sign out</button
  >
{:else}
  <button class="btn btn-primary" on:click={signInWithGoogle}
    >Sign in with Google</button
  >
{/if}
