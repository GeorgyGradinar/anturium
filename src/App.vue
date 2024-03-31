<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet} from '@ionic/vue';
import auth from "@/mixins/requests/auth";
import {onMounted} from "vue";

const {initStore} = auth();

onMounted(() => {
  initStore();
})
</script>
