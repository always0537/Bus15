<script lang="ts">
	import { onMount } from 'svelte';
	let drawCard1: Function;
	onMount(() => {
		drawCard1 = async (): Promise<void> => {
			let jsonresult = await fetch('/api/draw-card1', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'post'
			});
			console.log(jsonresult);
			let result = await jsonresult.json();
			console.log(result);
		};
	});

	const drawCard10: Function = async (): Promise<void> => {};
</script>

<svelte:head>
	<title>DrawCard</title>
	<meta name="description" content="GetCard" />
</svelte:head>
<div class="row">
	<div class="col text-center">
		<button class="btn btn-primary m-2 d-inline" on:click={drawCard1()}>單抽出奇蹟測試</button>
	</div>
</div>
<div class="row">
	<div class="col text-center">
		<button class="btn btn-danger m-2 d-inline">一次來十張</button>
	</div>
</div>
