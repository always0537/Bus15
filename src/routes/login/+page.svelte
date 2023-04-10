<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	export let data: PageData;
	let tokenForm: HTMLFormElement;
	let tokenInput: HTMLInputElement;
	onMount(async () => {
		const code = new URLSearchParams(window.location.search).get('code');
		if (code != null) {
			await fetch('/api/login?code=' + code, {
				method: 'GET'
			})
				.then(async (res) => {
					const data = await res.json();
					if (res.ok) {
						tokenInput.value = data.token;
						tokenForm.submit();
					} else {
						alert(data.message);
						goto('/');
					}
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			goto('/');
		}
	});
</script>

<div class="container-md text-center" style="paddind: 3rem;">
	<form method="post" bind:this={tokenForm} action="?/setToken">
		<div class="row m-3">
			<h3>登入中</h3>
			<div>
				<input type="text" name="token" bind:this={tokenInput} />
				<button type="submit">登入</button>
			</div>
		</div>
		<div class="d-flex justify-content-center">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</form>
</div>