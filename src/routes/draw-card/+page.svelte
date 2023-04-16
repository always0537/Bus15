<script lang="ts">
	import Card from '@Components/Card.svelte';
	import type CardDex from '@Models/CardDex';
	import { LoadingView } from '@Models/LoadingView';
	import type { Modal } from 'bootstrap';
	import { getContext, onMount } from 'svelte';

	let resultList: CardDex[] = new Array();
	let resultModal: Modal;
	onMount(async () => {
		let bootstrap = await import('bootstrap');
		resultModal = new bootstrap.Modal(document.getElementById('draw_result')!);
	});

	const drawCard = async (qty: number): Promise<void> => {
		let InitStart = Date.now();
		LoadingView?.show();
		let api = qty > 1 ? '/api/draw-card10' : '/api/draw-card1';
		let response = await fetch(api, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'post'
		});
		let result = await response.json();
		resultList = result.ReturnValue.map((n: CardDex) => {
			n.displayType = 'back';
			return n;
		});
		LoadingView?.hide();
		if (resultList.length === 0) {
			return;
		}

		resultModal.show();
		console.log(`takeTime : ${Date.now() - InitStart}`);
	};
</script>

<svelte:head>
	<title>DrawCard</title>
	<meta name="description" content="GetCard" />
</svelte:head>
<div class="row">
	<div class="col text-center">
		<button
			class="btn btn-primary m-2 d-inline"
			on:click={() => {
				drawCard(1);
			}}>單抽出奇蹟測試</button
		>
		<Card
			displayType="back"
			on:click={() => {
				drawCard(1);
			}}
		/>
	</div>
</div>
<div class="row">
	<div class="col text-center">
		<button
			class="btn btn-danger m-2 d-inline"
			on:click={() => {
				drawCard(10);
			}}>一次來十張</button
		>
	</div>
</div>

<div>
	<div
		class="modal fade"
		id="draw_result"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header bg-light">
					<h5 class="modal-title">抽卡結果</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" />
				</div>
				<div class="modal-body">
					{#if resultList.length == 1}
						<Card
							turnStytle={'simple'}
							displayType={resultList[0].displayType}
							cardTitle={resultList[0].name}
							imgPath={resultList[0].img}
						/>
					{:else}
						<div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
							{#each resultList as card}
								<div class="col">
									<Card
										turnStytle={'simple'}
										displayType={card.displayType}
										cardTitle={card.name}
										imgPath={card.img}
									/>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
