<script lang="ts">

import '../app.css';

import {user,userData} from '$lib/firebase';


//when u subscribe to a store it only 
//triggers a document read from firestore once
//if we want to use store globally
//it's a good idea to subscribe to the store in the root layout
$user;
$userData;

</script>

<div class="min-h-screen flex flex-col">
    <slot />
</div>