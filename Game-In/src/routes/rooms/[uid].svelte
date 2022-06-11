<script context="module" lang="ts">
    import {db} from "$lib/firebase"
    import { doc, addDoc, collection, serverTimestamp, query, orderBy} from 'firebase/firestore';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';
    import { onMount } from 'svelte';


    let userName = "";



    export async function load({params}){
        const uid = params.uid;

        return{
            props:{
                uid
            }
        }
    }
    const docRef = collection(db, 'room1');

    
    const AddData = async(e) =>{
        e.preventDefault();
        

    
        await addDoc(docRef, {
            user: userName,
            message: (<HTMLInputElement>document.getElementById("chatinput")).value,
            created: serverTimestamp()
        })
    }


</script>

<script>

    onMount(() => {
		userName = localStorage.getItem("username");
    });
    const q = query(collection(db, 'room1'), orderBy('created'))
    
    const messages = collectionData(q, 'message').pipe(startWith([]));
    export let uid;
    console.log(uid)
</script>

<h1>Your ROOM ID: {uid}</h1>

<form on:submit={AddData}>
    <input type="text" id="chatinput"><br><br>
    <button type="submit">Send</button>

</form>

<ul>
	{#each $messages as message}
        <p>{message.user}: {message.message}</p>
	{/each}
</ul>