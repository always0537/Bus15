<script lang="ts">
  export let imgPath : string | undefined;
  export let cardTitle : string | undefined;
</script>
<div class="card">
  <img src={imgPath} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{cardTitle}</h5>
    <slot></slot>
  </div>
</div>
