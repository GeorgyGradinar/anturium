<template>
  <div class="order">
    <h4>{{ pair.symbol }}</h4>
    <div class="pnl">
      <p class="title">Pnl</p>
      <p class="money">{{ pair?.unRealizedProfit }}</p>
      <p class="currency">USDT</p>
    </div>

    <div class="wrapper-buttons">
      <button class="primary-button">Остановить отслеживание</button>
      <button class="primary-button">Собрать профит</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps({
  pair: Object,
  apiId: String
})
const {pair} = toRefs(props);

</script>

<style scoped lang="scss">
@import "src/theme/buttons.css";
.order {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
    }
  }

  .wrapper-buttons {
    display: flex;
    gap: 10px;
  }
}
</style>
