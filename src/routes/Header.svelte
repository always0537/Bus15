<script lang="ts">
	import { page } from "$app/stores";
	let listBtnCollaspe : Element;
	let closeList = ()=>{
		//@ts-ignore
		let collaspe = new bootstrap.Collapse(listBtnCollaspe);
		collaspe.toggle();
	}
</script>
	<nav class="navbar navbar-expand-lg bg-light">
		<div class="container-fluid">
			<button 
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" ></span>
			</button>
			<div bind:this = {listBtnCollaspe} class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li
					class="nav-item"
					aria-current={$page.url.pathname === "/" ? "page" : undefined}
				>
					<a class="nav-link active" href="/" on:click={closeList}>Home</a>
				</li>
				<li
					class="nav-item"
					aria-current={$page.url.pathname === "/shop" ? "page" : undefined}
				>
					<a class="nav-link active" href="/shop" on:click={closeList}>商店</a>
				</li>
				<li
					class="nav-item"
					aria-current={$page.url.pathname === "/card-dex" ? "page" : undefined}
				>
					<a class="nav-link active" href="/card-dex" on:click={closeList}>卡册</a>
				</li>
				<li
				class="nav-item"
				aria-current={$page.url.pathname === "/player" ? "page" : undefined}
			>
				<a class="nav-link active" href="/player" on:click={closeList}>玩家名單</a>
			</li>
				<li
					class="nav-item"
					aria-current={$page.url.pathname === "/draw-card" ? "page" : undefined}
				>
					<a class="nav-link active" href="/draw-card"on:click={closeList}>我要抽卡</a>
				</li>
			</ul>
		</div>
	</nav>

