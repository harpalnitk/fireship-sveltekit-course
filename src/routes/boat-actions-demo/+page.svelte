<script lang="ts">
    import type { PageData } from './$types';
    import {enhance} from '$app/forms';
    
    export let data: PageData;
</script>

<h1>{data.boatName}</h1>


<!-- if enhance is not used it will cause full page reload

enhance also
1. helps to acess form data client side
2. access status client side
3. helps in validation and error handling of data

-->
<form method='POST' use:enhance action='?/rename'>
    <input type="text" name="boatName">
    <button type="submit">Submit</button>
    <button formaction="?/capitalize">Capitalize</button>
</form>