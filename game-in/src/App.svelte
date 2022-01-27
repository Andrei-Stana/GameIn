<script lang="ts">
import Route from "svelte-navigator/src/Route.svelte";
import Router from "svelte-navigator/src/Router.svelte";

import LandingPage from "./components/LandingPage.svelte"; 	
import Login from "./components/Login.svelte";
</script>

<Router>

	<main>
		<Route path="/">	
			<LandingPage />
		</Route>

		<Route path="/login">	
			<Login/>
		</Route>
		
	</main>
	<style>
	</style>
</Router>