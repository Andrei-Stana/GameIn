<script context="module" lang="ts">
	export async function load({ params }) {
		const uid = params.uid;

		return {
			props: {
				uid
			}
		};
	}
</script>

<script>
	import { AddMessage } from '../../lib/firebase.ts';
	import { db } from '../../lib/firebase.ts';
	import { collection, onSnapshot } from 'firebase/firestore';
	import Message from '../../components/Message.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { goto } from '$app/navigation';

	export let uid;

	let message = '';
	let msgs = [];
	let username = '';
	let TOKEN = "4bf957b2484fa876b79aefc68e8aa2d3ba57872e";
	let url = "http://localhost:3000/rooms/UZ9NPmlT0serxmsaXX9GT6Q9NqF2";

	onMount(() => {
		username = localStorage.getItem('username');
		console.log()
	});

	const HandleSubmit = async () => {
		await AddMessage(uid, message, Date.now(), username);
		message = '';
	};

	const Leave = async () => {
		await goto('../profile');
	};

	let unsub = onSnapshot(collection(db, uid), (snapShot) => {
		msgs = [];
		msgs = snapShot.docs.map((doc) => doc.data());
	});

	fetch('https://api-ssl.bitly.com/v4/bitlinks', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ "long_url": `${url}`, "domain": "bit.ly", "group_guid": "Ba1bc23dE4F", "title": "Bitly API Documentation", "tags": [ "bitly", "api" ], "deeplinks": [ { "app_id": "com.bitly.app", "app_uri_path": "/store?id=123456", "install_url": "https://play.google.com/store/apps/details?id=com.bitly.app&hl=en_US", "install_type": "promote_install" } ] })
	}).then(data => console.log(data))

	onDestroy(() => {
		unsub();
	});
</script>

<svelte:head>
	<style>
		body {
			font-family: helvetica, serif;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	</style>
	<title>GameIn · {uid}</title>
</svelte:head>
<h1 class="text-center room-id-txt">ROOM ID: {uid}</h1>

<div class="mb-5" id="chat">
	{#each msgs as msg}
		<Message message={msg.message} time={msg.time} username={msg.username} />
	{/each}
</div>

<form on:submit|preventDefault={HandleSubmit} class="position-absolute bottom-0 start-50 translate-middle-x w-100 position-fixed">
	<div class="input-group top-100 top-layer ">
		<button class="btn btn-primary" type="button" on:click={Leave}>Leave</button>
		<input
			bind:value={message}
			type="text"
			class="form-control"
			placeholder="Message {uid}"
			required
		/>
		<button class="btn btn-primary" type="submit">Send</button>
	</div>
</form>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap');
	/*font-family: 'Sora', sans-serif;*/
	.top-layer {
		z-index: 1000;
	}

	.room-id-txt{
		font-size: 2em;
		font-family: 'Sora', sans-serif;
	}

	@media screen and (max-width: 550px){
		.room-id-txt{
			font-size: 1em;
		}
	}
</style>
