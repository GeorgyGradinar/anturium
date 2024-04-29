<template>
  <div class="wrapper-api-key">
    <p class="name-api-key">{{ apiKey.name }}</p>
    <template v-for="apikey in allPairs">
        <OrdersBlock :apiKeysPair="apikey"></OrdersBlock>
    </template>
  </div>
</template>

<script setup lang="ts">
import OrdersBlock from "@/components/main/OrdersBlock.vue";
import {pairs} from "@/stores/pairs";
import {storeToRefs} from "pinia";

const props = defineProps({
  apiKey: Object
})

const pairsStore = pairs();
const {allPairs} = storeToRefs(pairsStore);
</script>

<style scoped lang="scss">
.wrapper-api-key {
  position: relative;
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid var(--secondary-dark);
  border-bottom: 1px solid var(--secondary-dark);

  .name-api-key {
    position: absolute;
    top: -12px;
    left: 40px;
    padding: 0 10px;
    background-color: var(--primary-dark);
  }
}
</style>
