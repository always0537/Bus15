<script lang="ts">
	import type User from '@Models/User.js';
	import { onMount } from 'svelte';

    export let data;

    function lineLogin(){
        window.location.href = data.lineLoginLink;
    }
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
    async function loginInDev(){
        const token = await fetch('/api/simulateLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id: selectedId})
            }).then(async (res) => {
                let token = await res.json();
                console.log(token);
                return token;
            }).catch((err) => {
                console.log(err);
            });
        localStorage.setItem('token', token);
    }
</script>

<div class="container-md text-center" style="paddind: 3rem;">
    {#if data.isLogin == false}
    <form method="POST">
        <div class="row m-3">
            <button type="button" class="btn btn-success" on:click={lineLogin}>
                Line登入
            </button>
        </div>
        <div class="row m-3 p-3">
            <select name="user" class="form-select" bind:value={selectedId}>
                {#each users as user}
                <option value={user._id}>{user.lineName}</option>
                {/each}
            </select>
            <button type="button" class="btn btn-secondary" on:click={loginInDev}>
                模擬登入
            </button>
        </div>
    </form>
    {/if}
</div>
