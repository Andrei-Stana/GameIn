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
        console.log(msgs)
    })

</script>

<h1 class="text-center display-5">ROOM ID: {uid}</h1>

<form on:submit|preventDefault={HandleSubmit}>
    <div class="input-group position-absolute bottom-0">
        <input bind:value={message} type="text" class="form-control" placeholder="Message {uid}">
        <button class="btn btn-outline-primary" type="submit" >Button</button>
    </div>
</form>

<div class="m-5">
    {#each msgs as msg}
        <Message message={msg.message} time={msg.time} username={msg.username}/>
    {/each}
</div>
