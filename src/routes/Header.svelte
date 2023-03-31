<script lang="ts">
	import { page } from '$app/stores';
	import type { Collapse } from 'bootstrap';
	import { onMount } from 'svelte';
	let listBtnCollaspe: Element;
	let collaspe: Collapse;
	let toggleList: any;
	onMount(async () => {
		const module = await import('bootstrap');
		collaspe = new module.Collapse(listBtnCollaspe,{
			toggle :false
		});

		toggleList = () => {
			collaspe.hide();
		};
	});
</script>

<header>
	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<button
				class="navbar-toggler collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-expanded="false"
			>
				<span class="navbar-toggler-icon"/>
			</button>
			<div bind:this={listBtnCollaspe} class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav">
					<li class="nav-item" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a class="nav-link active" href="/" on:click={toggleList()} >Home</a>
					</li>
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
				</ul>
			</div>
		</div>
	</nav>
</header>
