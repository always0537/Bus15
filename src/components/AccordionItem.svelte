<script lang="ts">
	export let Title: string;
	export let ID: string | undefined;
	export let Qty: number | undefined;
  let disabled : boolean = isNaN(Number(Qty)) || Number(Qty) <= 0;
</script>

<div class="accordion-item">
	<h2 class="accordion-header" id={`heading${ID}`}>
		<button
			class={"accordion-button collapsed" + (disabled ? " bg-dark-subtle" : "") }
			type="button"
			data-bs-toggle="collapse"
			data-bs-target={`#collapse${ID}`}
			aria-expanded="false"
      disabled={disabled}
		>
			{`${Title}(${Qty})`}
		</button>
	</h2>
	<div id={`collapse${ID}`} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
		<div class="accordion-body">
			<slot />
		</div>
	</div>
</div>
