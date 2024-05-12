<template>
  <v-dialog
      v-model="isOpenAlreadyCreatedPairs"
      width="auto"
      class="already-created-pairs"
      transition="dialog-bottom-transition"
  >
    <div class="content">
      <div class="pair" v-for="pair in alreadySelectedPair" :key="pair.id">
        <p>Пара: <span>{{ pair.pair }}</span></p>
        <p>Количество монет: <span>{{ pair.countCoin }}</span></p>
        <p>Прайс покупки: <span>{{ pair.price }}</span></p>
        <p>Количество ордеров: <span>{{ pair.countOrders }}</span></p>
        <p>Шаг в %: <span>{{ pair.step }}</span></p>
        <p>Decimals: <span>{{ pair.decimals }}</span></p>

        <button class="primary-button reuse" @click="reusePair(pair)">Использовать</button>
        <button class="primary-button delete">Удалить</button>
      </div>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";
import {pairs} from "@/stores/pairs";

const pairsStore = pairs();
const {addNewPair, changeSelectedPair} = pairsStore;
const {alreadySelectedPair} = storeToRefs(pairsStore);

const modalsStore = modals();
const {toggleOpenAlreadyCreatedPair, toggleOpenAddPairModal} = modalsStore;
const {isOpenAlreadyCreatedPairs} = storeToRefs(modalsStore);

function reusePair(pair) {
  changeSelectedPair(pair);
  toggleOpenAlreadyCreatedPair(false);
  toggleOpenAddPairModal(true);
}
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

    .pair {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 230px;
      border: 2px solid var(--dark-blue);
      padding: 20px;
      transition: all 0.2s;

      p {
        span {
          color: var(--primary-blue);
        }
      }

      .reuse {
        border: 1px solid var(--primary-blue);

        &:hover {
          background-color: var(--dark-blue);
        }
      }

      .delete {
        border: 1px solid var(--red);
        color: var(--red);

        &:hover {
          background-color: var(--light-red);
        }
      }
    }
  }
}
</style>
