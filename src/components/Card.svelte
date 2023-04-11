<script lang="ts">
  export let imgPath : string | undefined;
  export let cardTitle : string | undefined;
</script>
<div class="card bus-card" style="background-image: url({imgPath});">
  <!-- <img src="/materials/CARD_Front1.png" class="card-img-top" alt="..."/> -->
  <div class="card-body bus-card-body">
    <div class="card-title bus-card-title">{cardTitle}</div>
    <slot></slot>
  </div>
</div>

<style>
  /* @media screen and (max-width: 576px){
      .bus-card {
      border: none;
      background-size: 160px 160px;
      background-position-x: center;
      background-position-y: 64px;
      background-repeat: no-repeat;      
      text-align: center;
    }

    .bus-card-body{
      padding: 0;
      min-height: 350px;
      background-image: url("/materials/CARD_Front1.png");
      background-size: 278px 350px;
      background-position: center;
      background-repeat: no-repeat;
    }

    .bus-card-title{
      font-weight: bolder;
      margin-top: 36px;
      margin-bottom: 170px;
    }
  } */

  .bus-card {
      border: none;
      background-size: 160px 160px;
      background-position-x: center;
      background-position-y: 64px;
      background-repeat: no-repeat;      
      text-align: center;
    }

    .bus-card-body{
      padding: 0;
      min-height: 350px;
      background-image: url("/materials/CARD_Front1.png");
      background-size: 278px 350px;
      background-position: center;
      background-repeat: no-repeat;
    }

    .bus-card-title{
      font-weight: bolder;
      margin-top: 36px;
      margin-bottom: 170px;
    }
</style>