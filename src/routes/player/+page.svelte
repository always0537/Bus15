<svelte:head>
	<title>Player</title>
	<meta name="description" content="Player List" />
</svelte:head>
<script lang="ts">

</script>

<div class="accordion" id="accordionExample">
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
				玩家名稱
			</button>
		</h2>
		<div
			id="collapseOne"
			class="accordion-collapse collapse"
			aria-labelledby="headingOne"
			data-bs-parent="#accordionExample"
		>
			<div class="accordion-body">
        <botton type="button" class="btn btn-outline-primary">功能</botton>
        <botton type="button" class="btn btn-outline-primary">功能</botton>
			</div>
		</div>
	</div>
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingTwo">
			<button
				class="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseTwo"
				aria-expanded="false"
				aria-controls="collapseTwo"
			>
      玩家名稱
			</button>
		</h2>
		<div
			id="collapseTwo"
			class="accordion-collapse collapse"
			aria-labelledby="headingTwo"
			data-bs-parent="#accordionExample"
		>
    <div class="accordion-body">
      <botton type="button" class="btn btn-outline-primary">功能</botton>
      <botton type="button" class="btn btn-outline-primary">功能</botton>
    </div>
  </div>
	</div>
	<div class="accordion-item">
		<h2 class="accordion-header" id="headingThree">
			<button
				class="accordion-button collapsed"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#collapseThree"
				aria-expanded="false"
				aria-controls="collapseThree"
			>
      玩家名稱
			</button>
		</h2>
		<div
			id="collapseThree"
			class="accordion-collapse collapse"
			aria-labelledby="headingThree"
			data-bs-parent="#accordionExample"
		>
    <div class="accordion-body">
      <botton type="button" class="btn btn-outline-primary">功能</botton>
      <botton type="button" class="btn btn-outline-primary">功能</botton>
    </div>
  </div>
	</div>
</div>

