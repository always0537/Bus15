<script lang="ts">
	import { enhance } from '$app/forms';
	import { onMount } from 'svelte';
    import type { ActionData, PageData } from './$types';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
    
    export let data: PageData;
    export let form: ActionData;

    onMount(async () => {
        const code = new URLSearchParams(window.location.search).get('code');
        console.log(form);
        if(form?.success == false){
            alert(form.error);
        }
        if(code != null){
            const loginForm = document.querySelector('form');
            loginForm!.submit();
        }
        else if (form?.success == false){
        }
        else{
            goto('/');
        }
    });

    // async function login() {
    //     const code = new URLSearchParams(window.location.search).get('code');
    //     if(code != null ){
    //         await fetch('/api/login?code='+code, {
    //             method: 'GET',
    //         }).then(async (res) => {
    //             const json = await res.json();
    //             console.log(json);                
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    //     }
    // }

</script>

<div class="container-md text-center" style="paddind: 3rem;">
    <form method="post" >
	<div class="row m-3">
		<h3>登入中</h3>
        <button type="button" style="display: none">登入</button>
	</div>
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </form>
</div>
