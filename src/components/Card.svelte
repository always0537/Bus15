<script lang="ts">
	import type { $displayType } from '@Models/CardDex';
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let imgPath: string | undefined = '';
	export let cardTitle: string | undefined = '';
	export let cardDetail: string = '';

	export let displayType: $displayType = 'simple';
	export let turnStytle: $displayType = 'back';
	const card_back_img = '/materials/CARD_BACK.png';
	const card_detail_img = '/materials/CARD_Front1.png';
	const card_simple_img = '/materials/CARD_Front2.png';
</script>

{#if displayType === 'simple'}
	<div in:fade={{ duration: 1000 }} class="card bus-card" style="background-image: url({imgPath});">
		<div class="card-body bus-card-body simple" style="background-image: url({card_simple_img});">
			<slot />
		</div>
	</div>
{:else if displayType === 'detail'}
	<div class="card bus-card" style="background-image: url({imgPath});">
		<div class="card-body bus-card-body" style="background-image: url({card_detail_img});">
			<div class="card-title bus-card-title">{cardTitle}</div>
			<div class="bus-card-detail">{cardDetail}</div>
		</div>
	</div>
{:else if displayType === 'back'}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="card bus-card"
		on:click={() => {
			if (turnStytle !== 'back' && displayType === 'back') {
				displayType = turnStytle;
			}
		}}
	>
		<div class="card-body bus-card-body" style="background-image: url({card_back_img});" />
	</div>
{/if}

<style>
	/* @media screen and (max-width: 576px){

  } */

	.bus-card {
		border: none;
		background-size: 160px 160px;
		background-position-x: center;
		background-position-y: 64px;
		background-repeat: no-repeat;
		text-align: center;
	}

	.bus-card-body {
		padding: 0;
		min-height: 350px;
		background-size: 278px 350px;
		background-position: center;
		background-repeat: no-repeat;
	}

	.bus-card-title {
		font-weight: bolder;
		margin-top: 36px;
		margin-bottom: 170px;
		color: #385aa1;
	}

	/* Card-Simple */
	.bus-card-body.simple {
		padding-top: 233px;
	}
	/* Card-Detail */
	.bus-card-detail {
		color: white;
		font-size: small;
	}

	/* Card-Back */
</style>
