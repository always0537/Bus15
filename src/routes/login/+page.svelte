<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;

    onMount(async () => {
        const code = new URLSearchParams(window.location.search).get('code');
        if(code != null){
            const loginForm = document.querySelector('form');
            loginForm!.submit();
        }
    });

    export let form : ActionData;
</script>

<div class="container-md text-center" style="paddind: 3rem;">
	<div class="row m-3">
		<h3>登入中</h3>
        <form method="post" use:enhance>
            <button type="submit" style="display:none"></button>
        </form>
	</div>        
    <div class="row m-3">
        {form?.result}
    </div>
</div>
