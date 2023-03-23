<script lang="ts">
	import { each, onMount } from "svelte/internal";
	import CardDex from "../../models/CardDex";
	import {Modal} from 'bootstrap';

	let firstcard: CardDex = new CardDex();
	onMount(async () => {
		const res = await fetch('/api/mongodb');
		firstcard = await res.json();
	});

	let test: Element;
	const openModal = () => {
		console.log(test);
		new Modal(test).show();
	};
</script>

<svelte:head>
	<title>CardDex</title>
	<meta name="description" content="CardCollection" />
</svelte:head>

<div class="accordion" id="accordionExample">
	{#each Array(3) as card, index}
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingOne">
			<button
				class="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseOne"
				aria-expanded="false"
				aria-controls="collapseOne"
			>
				卡片編號 or 名稱
			</button>
		</h2>
		<div
			id="collapseOne"
			class="accordion-collapse collapse"
			aria-labelledby="headingOne"
			data-bs-parent="#accordionExample"
		>
			<div class="accordion-body">
				<div class="card">
					<img src={firstcard.img} class="card-img-top" alt="..." />
					<div class="card-body">
						<h5 class="card-title">卡片名稱</h5>
						<button class="card-text" on:click={openModal}>點擊詳細</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/each}
</div>
<div
	bind:this={test}
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">卡片名稱</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<div class="card">
					<img
						src={firstcard.img}
						class="card-img-top"
						alt="..."
					/>
					<div class="card-body">
						<p class="card-text">
							{firstcard.description}
						</p>
					</div>
				</div>
			</div>
			<div class="modal-footer justify-content-center">
				<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Button1</button>
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Button2</button>
			</div>
		</div>
	</div>
</div>
