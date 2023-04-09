<script lang="ts">
    export let data;

    function lineLogin(){
        window.location.href = data.lineLoginLink;
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
        <div class="row m-3">
            <button class="btn btn-secondary" formaction="?/loginInDev">
                模擬登入
            </button>
        </div>
    </form>
    {/if}
</div>
