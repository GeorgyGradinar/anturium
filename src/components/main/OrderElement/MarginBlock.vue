<template>
  <div class="margin-block">
    <p class="margin">
      {{ pair?.margin }}
      <label>Маржа</label>
    </p>

    <p class="koificient-margin">
      {{ pair?.koificientMargin }}
      <label>Коеф. маржи</label>
    </p>
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
.margin-block {
  display: flex;
  justify-content: space-between;

  .margin,
  .koificient-margin {
    display: flex;
    flex-direction: column;

    label {
      font-size: 10px;
      font-weight: 800;
      color: var(--dark-blue);
    }
  }

  .koificient-margin {
    align-items: flex-end;
  }
}
</style>
