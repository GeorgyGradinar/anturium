<template>
  <v-dialog
      v-model="isOpenAlreadyCreatedPairs"
      width="auto"
      class="already-created-pairs"
      transition="dialog-bottom-transition"
  >
    <div class="content">
      <template v-if="!isAlreadySelectedPair">
        <PairElement v-for="pair in alreadySelectedPair"
                     :key="pair.params?.symbol"
                     :pair="pair">
        </PairElement>
      </template>
      <p v-if="isAlreadySelectedPair">Loading...</p>
      <p v-if="!alreadySelectedPair.length">У вас нет ранее созданых пар</p>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";
import {pairs} from "@/stores/pairs";
import PairElement from "@/components/modals/already-created-pairs/PairElement.vue";

const pairsStore = pairs();
const {alreadySelectedPair, isAlreadySelectedPair} = storeToRefs(pairsStore);

const modalsStore = modals();
const {isOpenAlreadyCreatedPairs} = storeToRefs(modalsStore);
</script>

<style scoped lang="scss">
@import "src/theme/buttons.css";

.already-created-pairs {
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 20px;
    width: 800px;
    max-height: 750px;
    padding: 30px;
    background-color: var(--secondary-dark);
    border: 2px solid var(--dark-blue);
    overflow-y: auto;
  }
}
</style>
