<script lang="ts">
	import { browser } from '$app/environment';
	import type User from '@Models/User.js';
	import { onMount } from 'svelte';
	import type { ActionData } from './$types.js';
	import { error } from '@sveltejs/kit';

    export let data;
    
    let users : User[] = [];
    onMount(async () => {
        users = await fetch('/api/simulateLogin', {
            method: 'GET',
        }).then(async (res) => {
            const json = await res.json();
            return json;
        }).catch((err) => {
            console.log(err);
        });
    });

    let selectedId : string;
    let form : ActionData;
</script>

<div class="container-md text-center" style="paddind: 3rem;">
    {#if data.isLogin == false}
    <form method="POST">
        <div class="row m-3">
            <button type="button" class="btn btn-success" on:click={()=>window.location.href=data.lineLoginLink}>
                Line登入
            </button>
        </div>
        <div class="row m-3 p-3">
            <select name="user" class="form-select">
                {#each users as user}
                <option value={user._id}>{user.lineName}</option>
                {/each}
            </select>
            <button type="submit" class="btn btn-secondary" formaction="?/loginInDev">
                模擬登入
            </button>
        </div>
        {#if form?.success}
        <div class="row m-3">
            <p>
                {form?.error}
            </p>
        </div>
        {/if}
    </form>
    {/if}
</div>
