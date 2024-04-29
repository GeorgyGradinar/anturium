<template>
  <div class="orders-block">
    <template v-for="pair in apiKeysPair?.positionRisk">
      <OrderElement :pair="pair" :apiId="apiKeysPair?.apiId"></OrderElement>
    </template>
  </div>
</template>

<script setup lang="ts">
import OrderElement from "@/components/main/OrderElement.vue";
import {toRefs} from "vue";

const props = defineProps({
  apiKeysPair: Object
})
const {apiKeysPair} = toRefs(props);
</script>

<style scoped lang="scss">
.orders-block {
  display: flex;
  margin-top: 20px;
  gap: 10px;
}
</style>
