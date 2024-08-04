<template>
  <ion-app>
      <ion-router-outlet/>
      <PopupsBlock></PopupsBlock>
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import auth from "@/mixins/requests/auth";
import {onMounted} from "vue";
import PopupsBlock from "@/components/popups/PopupsBlock.vue";

const {initStore} = auth();

onMounted(() => {
  initStore();
})
</script>

<style scoped lang="scss">
main {
  position: relative;
}
</style>
