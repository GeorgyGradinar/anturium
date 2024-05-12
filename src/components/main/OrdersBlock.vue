<template>
  <div class="orders-block">
    <template v-for="pair in apiKeysPair?.positionsRisk">
      <OrderElement :pair="pair?.positionRisk" :api="apiKeysPair?.api"></OrderElement>
    </template>
  </div>
</template>

<script setup lang="ts">
import OrderElement from "@/components/main/OrderElement.vue";
import {ref, toRefs} from "vue";

const props = defineProps({
  apiKeysPair: Object
})
const {apiKeysPair} = toRefs(props);

let testForApiKey = ref([
  {
    symbol: 'BNBUSDT',
    unRealizedProfit: -100.35,
    roi: -109,
    quantityCoin: 1120.4,
    margin: 540.36,
    priceEnter: 210.2,
    koificientMargin: 2.44,
    lickvidation: 60.25,
    priceMarket: 180.35

  },
  {
    symbol: 'ARBUSDT',
    unRealizedProfit: 235.25,
    roi: 39.35,
    quantityCoin: 563.2,
    margin: 540.36,
    priceEnter: 1.2,
    koificientMargin: 1.15,
    lickvidation: 0.635,
    priceMarket: 1.35

  },
  {
    symbol: 'ARBUSDT',
    unRealizedProfit: 235.25,
    roi: 39.35,
    quantityCoin: 563.2,
    margin: 540.36,
    priceEnter: 1.2,
    koificientMargin: 1.15,
    lickvidation: 0.635,
    priceMarket: 1.35

  },
  {
    symbol: 'ARBUSDT',
    unRealizedProfit: 235.25,
    roi: 39.35,
    quantityCoin: 563.2,
    margin: 540.36,
    priceEnter: 1.2,
    koificientMargin: 1.15,
    lickvidation: 0.635,
    priceMarket: 1.35

  },
  {
    symbol: 'ARBUSDT',
    unRealizedProfit: 235.25,
    roi: 39.35,
    quantityCoin: 563.2,
    margin: 540.36,
    priceEnter: 1.2,
    koificientMargin: 1.15,
    lickvidation: 0.635,
    priceMarket: 1.35

  },
  {
    symbol: 'ARBUSDT',
    unRealizedProfit: 235.25,
    roi: 39.35,
    quantityCoin: 563.2,
    margin: 540.36,
    priceEnter: 1.2,
    koificientMargin: 1.15,
    lickvidation: 0.635,
    priceMarket: 1.35

  }
])
</script>

<style scoped lang="scss">
.orders-block {
  display: flex;
  margin-top: 20px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
