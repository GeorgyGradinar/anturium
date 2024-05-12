<template>
  <div class="main-page">
    <SettingsBlock></SettingsBlock>
    <ShowApiKeyBlock v-for="apiKey in allPairs" :key="apiKey.id" :api-key="apiKey"></ShowApiKeyBlock>
  </div>
</template>

<script setup lang="ts">
import SettingsBlock from "@/components/main/SettingsBlock.vue";
import ShowApiKeyBlock from "@/components/main/ShowApiKeyBlock.vue";
import {storeToRefs} from "pinia";
import {personsStore} from "@/stores/person";
import botRequests from "@/mixins/requests/bot/botRequests";
import {watch} from "vue";
import {pairs} from "@/stores/pairs";

const personStore = personsStore();
const {person} = storeToRefs(personStore);
const pairsStore = pairs();
const {allPairs} = storeToRefs(pairsStore);
const {getAllCryptoPairs, getAllCryptoPairsGrid} = botRequests();

watch(person, () => {
  getAllCryptoPairs();
  getAllCryptoPairsGrid();
})
</script>

<style scoped lang="scss">
.main-page {
  max-height: calc(100vh - 51px);
  padding: 20px;
}
</style>
