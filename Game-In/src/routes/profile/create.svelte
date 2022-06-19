<script>
    let username;
</script>
<h1 class="display-2 text-center">Only 1 Step left</h1>
<h1 class="display-4 text-center">"{username || "Your Name"}"</h1>
<form class="container">
    <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
        <input bind:value={username} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupFile01">Profile Picture</label>
        <input type="file" class="form-control" id="inputGroupFile01" accept="image/*">
    </div>
    <div class="text-center">
        <button class="btn btn-primary btn-lg">Create</button>
    </div>
</form>