<template>
  <div class="order">
    <h4>BNBUSDT</h4>
    <div class="pnl">
      <p class="title">Pnl</p>
      <p class="money">-4000</p>
      <p class="currency">USDT</p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.order {
  border: 1px solid var(--primary-orange);
  padding: 10px;

  h4 {
    margin: unset;
    color: var(--white);
  }

  .pnl {
    position: relative;
    display: flex;
    gap: 5px;

    .title {
      position: absolute;
    }
  }
}
</style>
