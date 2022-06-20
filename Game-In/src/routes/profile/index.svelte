<script lang="ts">
    import { onMount } from 'svelte';
    import { logOut } from '$lib/store';
    import { goto } from '$app/navigation';
    import Navbar from "../../components/Navbar.svelte";
    
    let userName = "", email = "", photoUrl = "", uid = "";
    $: showUid = false;
    $: uiUid = "";


    let id = "";
   
    onMount(() => {
        email = localStorage.getItem("email");
        userName = localStorage.getItem("username");
        photoUrl = localStorage.getItem("photoUrl");
        uid = localStorage.getItem("uid");
        });
        
    const CoverUid = () =>{
        let result = "";
        for (let i = 0; i < uid.length; i++) {
            result += "*";
        }
        return result;
    }


    const CreateRoom = async () =>{
        await goto("http://localhost:5000/"+id+"/"+1);
    }

    async function CreateChatRoom(){
        await goto("/rooms/"+ id);
    }

    $: {
        if (showUid){
            uiUid = CoverUid();
        }
    }
</script>

<svelte:head>
    <style>
        body {
            background: #f8f9fa;
        }
    </style>

    <title>GameIn · {userName} </title>
</svelte:head>
<Navbar>
    <a class="nav-link mx-2" href="/">Home</a>
    <a class="nav-link mx-2 " on:click={logOut}>Log Out</a>
</Navbar>
<div class="position-relative">
    <img class="banner" src="..\static\Images\profile_default.png">
    <div class="position-absolute top-50 start-50 translate-middle">
        <img class="rounded-circle profile-pic border border-5 bg-light" src={photoUrl || "https://wallpapers.com/images/high/scared-zenitsu-anime-pfp-nhuc9w2ghno4beff.jpg"}>
    </div>

</div>
<div class="text-center">
    <h1 class="mt-user">{userName}</h1>
    <p>{email}</p>

    <h1 class="display-6 mt-5 uid-font"><u>UID</u></h1>
    <div class="d-flex justify-content-center">
        <div class="form-check form-switch">
            <input bind:checked={showUid} class="form-check-input" type="checkbox">
            <div class="d-flex ">
                {#if showUid}
                    <p>{uid}</p>
                {:else}
                    <p class="cover-uid">{uiUid}</p>
                {/if}
            </div>
        </div>
    </div>
</div>
<br>
<div class="d-flex justify-content-center">
    <p class="mx-2" id="room-id-text">Room ID:</p>
    <form action="" class="mx-1">
        <input bind:value={id} type="text" class="form-control" placeholder="Room ID">
    </form>

    <button class="btn btn-primary mx-1" id="btn-1" on:click="{CreateRoom}">Join Video</button>
    <button class="btn btn-primary" id="btn-2" on:click="{CreateChatRoom}">Join Chat</button>
</div>



<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');
    /*font-family: 'Noto Serif', serif;*/

    #selection{
        height: 2.3em;
    }

    #room-id-text{
        font-size: 1.3em;
    }

    .banner{
        height: 15em;
        width: 100%;
        object-fit: cover;
        opacity: 80%;
    }

    .profile-pic{
        width: 12rem;
        height: 12em;
        object-fit: cover;
        margin-top: 100%;
    }

    .mt-user{
        margin-top: 3em;
    }

    .uid-font{
        font-family: 'Noto Serif', serif;
    }

    .cover-uid{
    }
</style>