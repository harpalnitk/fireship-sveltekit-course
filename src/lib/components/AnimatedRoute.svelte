<script>
    import {fly} from 'svelte/transition';
    import {page} from '$app/stores';
</script>


<!-- how to re-render this component whenever URL changes  
svelte has in built mechanism called key 
that will rebuild all children on change
-->


<!-- we will use key to subscribe to page url  -->
{#key $page.url}
<div in:fly={{x:'-100%', duration:500}}>
<slot/>
</div>
{/key}