<script>
    import {onMount} from "svelte";

    export let message;
    export let time;
    export let username;

    let usernameLocal = ""
    onMount(()=>{
        username = localStorage.getItem("username")
    })
</script>

{#if username === usernameLocal}
    <div class="alert alert-dark" role="alert">
        <p>{username}</p>
        <p>{message}</p>
        <p class="float-end">{time}</p>
    </div>
    {:else}
    <div class="alert alert-success" role="alert">
        <p>{username}</p>
        <p>{message}</p>
        <p class="float-end">{time}</p>
    </div>
{/if}
