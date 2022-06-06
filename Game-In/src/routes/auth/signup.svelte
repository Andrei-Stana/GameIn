<script lang="ts">
    import {auth, googleProvider} from "$lib/firebase.ts";
    import {goto} from "$app/navigation";

    let email = "", password = "";
    const SignUpGoogle = async () =>{
        const res = await auth.signInWithPopup(googleProvider)
        const user = res.user;
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("username", res.user.displayName)
        localStorage.setItem("photoUrl", res.user.email)
        console.log(user)
        await goto("../main")
    }

    const SignUpWithMail = async () =>{
        const creds = await auth.createUserWithEmailAndPassword(email, password);
    }
</script>


<svelte:head>
    <style>
        body {
            background: #23272A;
        }
    </style>

    <title>Signup</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
                <div class="card-body p-4 p-sm-5">
                    <h5 class="card-title text-center mb-5 fw-light display-3">Sign Up</h5>
                    <form on:submit|preventDefault={SignUpWithMail}>
                        <div class="form-floating mb-3">
                            <input required bind:value={email} type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input required type="password" class="form-control" id="floatingPassword" placeholder="Password">
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check mb-3">
                            <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck">
                            <label class="form-check-label" for="rememberPasswordCheck">
                                Remember password
                            </label>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                                up</button>
                        </div>
                        <hr class="my-4">
                    </form>
                        <div class="d-grid mb-2">
                            <button on:click={SignUpGoogle} class="btn btn-google btn-login text-uppercase fw-bold">
                                <i class="bi bi-google"></i> Sign in with Google
                            </button>
                        </div>
                        <div class="d-grid">
                            <button class="btn btn-primary btn-login text-uppercase fw-bold">
                                <i class="bi bi-meta"></i> Sign in with Meta
                            </button>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .btn-login {
        font-size: 0.9rem;
        letter-spacing: 0.05rem;
        padding: 0.75rem 1rem;
    }

    .btn-google {
        color: white !important;
        background-color: #ea4335;
    }
</style>