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

	onMount(() => {
		username = localStorage.getItem('username');
	});

	const HandleSubmit = async () => {
		await AddMessage(uid, message, Date.now(), username);
		document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
		message = '';
	};

	const Leave = async () => {
		await goto('../profile');
	};

	let unsub = onSnapshot(collection(db, uid), (snapShot) => {
		msgs = [];
		msgs = snapShot.docs.map((doc) => doc.data());
	});

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
</svelte:head>
<h1 class="text-center display-5">ROOM ID: {uid}</h1>

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
	.top-layer {
		z-index: 1000;
	}
</style>
