<script>
    import {GetCollections} from "../../lib/firebase.ts";

    let rooms = [];
    GetCollections().then(docs => rooms = (docs));
    $: console.log(rooms)
</script>

<div>
    {#each rooms as room}
        <h1>{room}</h1>
    {/each}
</div>