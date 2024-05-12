<template>
  <div class="price-info">
    <p class="price-enter">
      {{ pair?.priceEnter }}
      <label>Цена входа</label>
    </p>

    <p class="price-lickvidation">
      {{ pair?.lickvidation }}
      <label>Цена ликвидации</label>
    </p>
  </div>
</template>

<script setup>
import {toRefs} from "vue";

const props = defineProps({
  pair: Object
})
const {pair} = toRefs(props);

</script>

<style scoped lang="scss">
.price-info {
  display: flex;
  justify-content: space-between;

  .price-enter,
  .price-lickvidation {
    display: flex;
    flex-direction: column;

    label {
      font-size: 10px;
      font-weight: 800;
      color: var(--dark-blue);
    }
  }

  .price-lickvidation {
    align-items: flex-end;
  }
}
</style>
