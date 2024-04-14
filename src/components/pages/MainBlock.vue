<template>
  <div class="main-page">
    <SettingsBlock></SettingsBlock>
    <OrdersBlock></OrdersBlock>

  </div>
</template>

<script setup lang="ts">
import SettingsBlock from "@/components/main/SettingsBlock.vue";
import OrdersBlock from "@/components/main/OrdersBlock.vue";
</script>

<style scoped lang="scss">
.main-page {
  width: 100vw;
  max-height: calc(100vh - 51px);
  padding: 20px;
}
</style>
