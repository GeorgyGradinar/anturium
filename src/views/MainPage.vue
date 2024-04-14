<template>
  <ion-page>
    <ion-content>
      <HeaderBlock></HeaderBlock>
      <Main/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonPage} from '@ionic/vue';
import Main from "../components/pages/MainBlock.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
</script>
