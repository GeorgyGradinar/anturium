<template>
  <div class="first-block">
    <h4>{{ pair?.symbol }}</h4>

    <div class="market-price">
      <p class="price"><span>$</span>{{ pair?.priceMarket }}</p>
      <p class="label">Рыночная цена</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps({
  pair: Object
})
const {pair} = toRefs(props);


</script>

<style scoped lang="scss">
.first-block {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .market-price {

    .price {
      font-size: 20px;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 2px;
      color: var(--white);

      span {
        font-size: 15px;
      }
    }

    .label {
      font-size: 10px;
      font-weight: 800;
      color: var(--dark-blue);
    }
  }
}
</style>
