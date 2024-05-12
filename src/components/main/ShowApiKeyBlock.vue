<template>
  <div class="wrapper-api-key">
    <p class="name-api-key">{{ apiKey?.api.name }}</p>
        <OrdersBlock :apiKeysPair="apiKey"></OrdersBlock>
  </div>
</template>

<script setup lang="ts">
import OrdersBlock from "@/components/main/OrdersBlock.vue";
import {toRefs} from "vue";

const props = defineProps({
  apiKey: Object
})
const {apiKey} = toRefs(props)
</script>

<style scoped lang="scss">
.wrapper-api-key {
  position: relative;
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid var(--secondary-dark);

  .name-api-key {
    position: absolute;
    top: -12px;
    left: 40px;
    padding: 0 10px;
    background-color: var(--primary-dark);
    color: var(--secondary-dark);
  }
}
</style>
