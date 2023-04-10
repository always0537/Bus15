<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
    import type { ActionData, PageData } from './$types';
    
    export let data: PageData;

    // onMount(async () => {
    //     const code = new URLSearchParams(window.location.search).get('code');
    //     if(code != null){
    //         const loginForm = document.querySelector('form');
    //         loginForm!.submit();
    //     }
    // });

    async function login() {
        const code = new URLSearchParams(window.location.search).get('code');
        if(code != null ){
            await fetch('/api/login?code='+code, {
                method: 'GET',
            }).then(async (res) => {
                const json = await res.json();
                console.log(json);                
            }).catch((err) => {
                console.log(err);
            });
        }
    }

</script>

<div class="container-md text-center" style="paddind: 3rem;">
	<div class="row m-3">
		<h3>登入中</h3>
        <button type="button" on:click={login}>登入</button>
	</div>        
</div>
