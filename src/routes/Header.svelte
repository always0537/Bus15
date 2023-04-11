<script lang="ts">
	import { page } from '$app/stores';
	import type { Collapse } from 'bootstrap';
	import { onMount } from 'svelte';
	let listBtnCollaspe: Element;
	let collaspe: Collapse;
	let toggleList: any;
	onMount(async () => {
		const module = await import('bootstrap');
		collaspe = new module.Collapse(listBtnCollaspe, {
			toggle: false
		});

		toggleList = () => {
			collaspe.hide();
		};
	});

	export let isLogin: boolean;
</script>

<nav class="navbar fixed-top navbar-expand-lg bg-light">
	<div class="container-fluid">
		<div class="navbar-header">
			<button
			class="navbar-toggler collapsed"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-expanded="false"
		>
			<span class="navbar-toggler-icon" />
		</button>
		</div>
		<div bind:this={listBtnCollaspe} class="navbar-collapse collapse" id="navbarSupportedContent" aria-expanded="false">
			<ul class="nav navbar-nav">
				<li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a class="nav-link active" href="/" on:click={toggleList()}>首頁</a>
				</li>
				{#if isLogin == true}
					<li class="nav-item" aria-current={$page.url.pathname === '/shop' ? 'page' : undefined}>
						<a class="nav-link active" href="/shop" on:click={toggleList()}>商店</a>
					</li>
					<li
						class="nav-item"
						aria-current={$page.url.pathname === '/card-dex' ? 'page' : undefined}
					>
						<a class="nav-link active" href="/card-dex" on:click={toggleList()}>卡册</a>
					</li>
					<li class="nav-item" aria-current={$page.url.pathname === '/player' ? 'page' : undefined}>
						<a class="nav-link active" href="/player" on:click={toggleList()}>玩家名單</a>
					</li>
					<li
						class="nav-item"
						aria-current={$page.url.pathname === '/draw-card' ? 'page' : undefined}
					>
						<a class="nav-link active" href="/draw-card" on:click={toggleList()}>我要抽卡</a>
					</li>
					<li class="nav-item" aria-current={$page.url.pathname === '/logout' ? 'page' : undefined}>
						<a class="nav-link active" href="/logout" on:click={toggleList()}>登出</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>