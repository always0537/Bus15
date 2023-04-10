<script lang="ts">
	import type { Modal } from 'bootstrap';
	import Header from './Header.svelte';
	import { getContext, onMount, setContext } from 'svelte';
	import { LoadingViewStore } from '@Models/LoadingView';
	let bootstrap: any;
	export let data;

	onMount(async () => {
		bootstrap = await import('bootstrap');
		LoadingViewStore.set(new bootstrap.Modal(document.getElementById('LoadingView')));
	});
	
	if(data.isLogin) setContext('user', data.user);

</script>

<div>
	<header>
		<Header isLogin={data.isLogin} />
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
<div>
	<div
		class="modal fade"
		id="LoadingView"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="text-center">
					<div class="spinner-border text-primary mt-4" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
				</div>
				<div class="modal-body text-center">處理中...</div>
			</div>
		</div>
	</div>
</div>
