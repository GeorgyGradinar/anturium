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
import {API_URL} from "../config";

const {initStore} = auth();

onMounted(() => {

  initStore();
  console.log(API_URL())
  console.log(import.meta.env.VITE_SOCKET_URL)
})
</script>

<style scoped lang="scss">
main {
  position: relative;
}
</style>
