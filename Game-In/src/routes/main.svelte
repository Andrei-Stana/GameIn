<script lang="ts">
    import {user, userName, photoUrl, logOut} from "$lib/store"
    import { db } from "$lib/firebase";
    import { addDoc, collection } from "firebase/firestore";	

    export async function addData(){
    await addDoc(collection(db, "room1"), {
        name: userName
      });
}

addData();
</script>

<h1>
    hello {userName}
</h1>

<button on:click={logOut}>Log out</button>


