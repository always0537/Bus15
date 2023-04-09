<script lang="ts">
	import type { PageData } from './$types';
	import CardDex from '@Models/CardDex';
	import AccordionItem from '@Components/AccordionItem.svelte';
	import Card from '@Components/Card.svelte';
	import { each, identity, onMount } from 'svelte/internal';
	import type { Modal } from 'bootstrap';

	let modal: Modal;
	let modalElement: Element;
	let modalCard: CardDex;
	let openModal: any;
	let firstcard: CardDex = new CardDex();

	onMount(async () => {
		let bootstrap = await import('bootstrap');
		modal = new bootstrap.Modal(modalElement);
		openModal = (card: CardDex) => {
			modalCard = card;
			modal.show();
		};

		// const res = await fetch('/api/mongodb');
		// firstcard = await res.json();
	});

	export let data: PageData;
	let cardList: CardDex[] = JSON.parse(data.CardList);
</script>

<svelte:head>
	<title>CardDex</title>
	<meta name="description" content="CardCollection" />
</svelte:head>

<div class="accordion" id="accordionExample">
	{#each cardList as card}
		<AccordionItem Title={`${card._id}-${card.name}`} ID={card._id?.toString()} Qty={card.qty}>
			<Card cardTitle={card.name} imgPath={card.img}>
				<button on:click={openModal(card)}>點擊詳細</button>
			</Card>
		</AccordionItem>
	{/each}
</div>
<div
	bind:this={modalElement}
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="exampleModalLabel">{modalCard?.name}</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body">
				<Card cardTitle={modalCard?.name} imgPath={modalCard?.img}>
					<p class="card-text">{modalCard?.description}</p>
				</Card>
			</div>
			<div class="modal-footer justify-content-center">
				<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Button1</button>
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Button2</button>
			</div>
		</div>
	</div>
</div>
