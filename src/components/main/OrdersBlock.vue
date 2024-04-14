<template>
  <div class="orders-block">
      <OrderElement></OrderElement>
  </div>
</template>

<script setup lang="ts">

import OrderElement from "@/components/main/OrderElement.vue";
</script>

<style scoped lang="scss">
.orders-block {
  display: flex;
  width: 100vw;
  margin-top: 20px;
}
</style>
