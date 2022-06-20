<script lang="ts">
	import { onMount } from 'svelte';
	import { logOut } from '$lib/store';
	import { db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';
	import { goto } from '$app/navigation';


	export let userName = "", email = "", photoUrl = "", uid = "";
	let showUid = false;

	export async function addData() {
		await addDoc(collection(db, 'room1'), {
			name: userName
		});

	}

    onMount(() => {
		userName = localStorage.getItem("username");
		email = localStorage.getItem("email");
		photoUrl = localStorage.getItem("photoUrl");
		uid = localStorage.getItem("uid");
    });

	const ShowUid = () =>{
		if (showUid == true)
			showUid = false
		else if (showUid == false)
			showUid = true;
	}

	const CreateRoom = async () =>{
		await goto("http://localhost:5000/"+uid+"/"+1);
	}

	async function CreateChatRoom(){
		await goto("/rooms/"+ uid);
	}

	addData();
</script>

<svelte:head>
	<style>
		body {
			background-color: #f8f9fa;
		}
	</style>

	<title>Profile | {userName} </title>
</svelte:head>

<div class="position-relative">
	<img class="banner" src="../static/Images/profile_bg.png">
	<div class="position-absolute top-50 start-50 translate-middle">
		<img class="rounded-circle profile-pic border border-5 bg-light" src={photoUrl || "https://wallpapers.com/images/high/scared-zenitsu-anime-pfp-nhuc9w2ghno4beff.jpg"}>
	</div>

</div>
<div class="text-center">
	<h1 class="mt-user">{userName}</h1>
	<p>{email}</p>

	<h1 class="display-6 mt-3 uid-font"><u>UID</u></h1>
	<div class="d-flex justify-content-center">
		<div class="form-check form-switch">
			<input on:change={ShowUid} class="form-check-input" type="checkbox">
			<div class="d-flex ">
				{#if showUid}
					<p>{uid}</p>
					{:else}
					<p class="cover-uid">{uid}</p>
				{/if}
			</div>
		</div>
	</div>
</div>

<div>
	<div class="text-center d-flex justify-content-center">
		<p class="display-6 ">Create Room:</p>
		<button class="btn btn-primary btn-sm" on:click={CreateRoom}>Create</button>
	</div>
	<br>
	<div class="text-center d-flex justify-content-center">
		<p class="display-6 ">Create Chatroom:</p>
		<button class="btn btn-primary btn-sm" on:click={CreateChatRoom}>Create</button>
	</div>
</div>

<div class="text-center mt-3">
	<button class="btn btn-primary btn-sm" on:click={logOut}>Sign Out</button>
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
		color: black;
		background-color: black;
		border-radius: 5px;
	}
</style>