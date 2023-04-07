<script lang="ts">
	import Header from './Header.svelte';
	import { onMount } from 'svelte';
	let bootstrap: any;
	onMount(async () => {
		bootstrap = await import('bootstrap');
	});
</script>

<div>
	<header>
		<Header />
	</header>

	<main>
		<div class="container body-content my-2">
			<slot />
		</div>
	</main>

	<footer class="my-2">
		<div class="text-center">
			<p>version 0.0.1</p>
		</div>
	</footer>
</div>
