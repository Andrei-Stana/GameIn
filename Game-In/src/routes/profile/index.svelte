<script lang="ts">
    import { onMount } from 'svelte';
    import { logOut } from '$lib/store';
    import { goto } from '$app/navigation';
    import Navbar from "../../components/Navbar.svelte";


    let userName = "", email = "", photoUrl = "", uid = "";
    $: showUid = false;
    $: uiUid = "";

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
        await goto("http://localhost:5000/"+uid+"/"+1);
    }

    async function CreateChatRoom(){
        await goto("/rooms/"+ uid);
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
            background: rgb(238,150,246);
            background: linear-gradient(90deg, rgba(238,150,246,1) 0%, rgba(109,69,203,1) 100%);
        }
    </style>

    <title>GameIn · {userName} </title>
</svelte:head>
<Navbar>
    <a class="nav-link mx-2" href="/">Home</a>
    <a class="nav-link mx-2 " on:click={logOut}>Log Out</a>
</Navbar>
<div class="position-relative">
    <img class="banner" src="https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_960_720.jpg">
    <div class="position-absolute top-50 start-50 translate-middle">
        <img class="rounded-circle profile-pic border border-5 bg-light" src={photoUrl || "https://wallpapers.com/images/high/scared-zenitsu-anime-pfp-nhuc9w2ghno4beff.jpg"}>
    </div>

</div>
<div class="text-white text-center">
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

<div>
    <div class="text-white text-center d-flex justify-content-center mb-2 mt-2">
        <button class="btn btn-primary btn-lg" on:click={CreateChatRoom}>Create Chatroom</button>
    </div>
    <div class="text-white text-center d-flex justify-content-center">
        <button class="btn btn-primary btn-lg" on:click={CreateRoom}>Create Room</button>
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap');
    /*font-family: 'Noto Serif', serif;*/

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