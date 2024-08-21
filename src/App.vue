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
  console.log(import.meta)
  console.log(import.meta.env.VITE_API_URL)
  // const IONIC_API_URL = import.meta.env.VITE_API_BASE_URL

})
</script>

<style scoped lang="scss">
main {
  position: relative;
}
</style>
