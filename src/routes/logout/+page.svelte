<script lang="ts">
	import { onMount } from "svelte";

	//logout and 3 seconds redirect to home page
	let timer = 3;
    onMount(() => {
        setInterval(() => {
		timer -= 1;
		if (timer == 0) {
			window.location.href = '/';
		}
	}, 1000);
    });
</script>

<div class="container-md text-center" style="paddind: 3rem;">
	<div class="row m-3">
		<h1>登出成功</h1>
	</div>
	<div class="row m-3">
		<h3>{timer}秒後將自動跳轉回首頁</h3>
	</div>
</div>
