<script>
	import {UploadImage, AddAccount, GetUsername} from "../../lib/firebase.ts";
	import {onMount} from "svelte";
	import {goto} from "$app/navigation";

	let placeholderPfp = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png";
    let image, uid, email;
    $: uiImg = "";
	$: upLoadedImg = "";
	$: username = "";
	onMount(() =>{
		uid = localStorage.getItem("uid");
		email = localStorage.getItem("email")
	})

    const OnFileSelected = (e) =>{
        let image = e.target.files[0];
		upLoadedImg = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e =>{
            image = e.target.result;
            uiImg = image
        }
    }

    const  CreateAccount = async () =>{
		const imgUrl = await UploadImage(upLoadedImg, uid);
		await AddAccount(uid, email, imgUrl, username);
		localStorage.setItem("photoUrl", imgUrl);
		localStorage.setItem("username", username);
		await goto("../profile");
    }

	$: {
		username = GetUsername(uid);
	}
</script>
<h1 class="display-2 text-center">Only 1 Step left</h1>
<div class="text-center">
    {#if uiImg}
        <img src="{uiImg}" class="rounded-circle profile-pic border border-5 bg-light pfp-size" alt="Profile Pic" width="250" height="250">
        {:else}
        <img src="{placeholderPfp}" class="rounded-circle profile-pic border border-5 bg-light pfp-size" alt="Profile Pic" width="250" height="250">
    {/if}
</div>

<h1 class="display-4 text-center">"{username || "Your Name"}"</h1>
<form on:submit|preventDefault={CreateAccount} class="container">
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
        <input bind:value={username} maxlength="15" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required>
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Profile Picture</label>
        <input on:change={(e) => OnFileSelected(e)} bind:this={image} type="file" class="form-control" id="inputGroupFile01" accept="image/*">
    </div>
    <div class="text-center">
        <button type="submit" class="btn btn-primary btn-lg">Create</button>
    </div>
</form>

<style>

    .pfp-size{
        width: 250px;
        height: 250px;
        object-fit: cover;
    }
</style>