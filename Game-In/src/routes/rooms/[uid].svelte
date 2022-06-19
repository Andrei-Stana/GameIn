<script context="module" lang="ts">
    export async function load({params}){
        const uid = params.uid;

        return{
            props:{
                uid
            }
        }
    }
</script>

<script>
    import {AddMessage} from "../../lib/firebase.ts";
    import {db} from "../../lib/firebase.ts";
    import { collection, onSnapshot } from "firebase/firestore";
    import Message from "../../components/Message.svelte";
    import {onMount} from "svelte";

    export let uid;

    let message = "";
    let msgs = [];
    let username = "";

    onMount(()=>{
        username = localStorage.getItem("username")
    })

    const HandleSubmit = async () =>{
        await AddMessage(uid, message, Date.now(), username);
        message = "";
    }

    onSnapshot(collection(db, uid) ,(snapShot) =>{
        msgs = [];
        msgs = snapShot.docs.map(doc => doc.data())
    })

</script>
<svelte:head>
    <style>
        body{
            font-family: helvetica,serif;
            display: flex ;
            flex-direction: column;
            align-items: center;
        }
    </style>
</svelte:head>
<h1 class="text-center display-5">ROOM ID: {uid}</h1>


<div>
    {#each msgs as msg}
        <Message message={msg.message} time={msg.time} username={msg.username}/>
    {/each}
</div>
<form on:submit|preventDefault={HandleSubmit}>
    <div class="input-group bottom-0 top-layer mt-5 py-2 px-5 input-bg">
        <input bind:value={message} type="text" class="form-control" placeholder="Message {uid}">
        <button class="btn btn-outline-primary" type="submit" >Send</button>
    </div>
</form>

<style>
    .top-layer{
        z-index: 1000;
    }

    .input-bg{
        background-color: #EEE;
        border-radius: 10px;
    }
</style>
