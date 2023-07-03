<script lang="ts">
    import type { PageData } from "./$types";
    import { page } from '$app/stores';
    import { enhance } from "$app/forms";
  
    export let data: PageData;
  
  </script>
  

<main class="max-w-lg prose text-center mx-auto my-6">
  
    <p>Current Bio: <span class="text-info">{data.bio}</span></p>
  
    <p>Status Code: {$page.status}</p>
    <!-- we can use page store to access the form and optionally
    any error messages returned from the server -->
    <p class="text-error">{$page.form?.problem ?? ''}</p>
  

    <!-- this form has submit method of post instead of on submit 
    which is handled on client side 
  because this form submission will be handled on server
by an actual svelte kit action -->

<!-- use:enhance to prevent full page reload  -->
    <form method="POST" use:enhance>
      <div class="form-control">
        <label for="bio" class="label">
          <span class="label-text">Your bio</span>
        </label>
        <textarea
          name="bio"
          class="textarea textarea-bordered textarea-accent"
          value={data.bio}
        />
      </div>
      <button class="btn btn-primary my-5">Update Bio</button>
    </form>
  </main>