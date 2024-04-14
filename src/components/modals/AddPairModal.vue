<template>
  <v-dialog
      v-model="isOpenAddPairModal"
      width="auto"
      class="add-pair-modal"
      transition="dialog-bottom-transition"
  >
    <div class="content">
      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Пара"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="pair">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Количество купленных монет на старте"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="countCoin">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Прайс покупки (0 - по маркету)"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="price">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Количество ордеров"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="countOrders"
                      type="number">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Шаг в %"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="step">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Decimals"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="countDecimals">
        </v-text-field>
      </div>

      <button class="create-pair" @click="createPair">Создать</button>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {pairs} from "@/stores/pairs";

const pairsStore = pairs();
const {addNewPair} = pairsStore;

const pair = ref<string>('');
const countCoin = ref<number>(0);
const price = ref<number>(0);
const countOrders = ref<number>(0);
const step = ref<number>(0);
const countDecimals = ref<number>(0);

const modalsStore = modals();
const {isOpenAddPairModal} = storeToRefs(modalsStore);

function createPair() {
  addNewPair({
    pair: pair.value,
    countCoin: countCoin.value,
    price: price.value,
    countOrders: countOrders.value,
    step: step.value,
    countDecimals: countDecimals.value
  })
}
</script>

<style scoped lang="scss">

.add-pair-modal {
  border-radius: 0;

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    padding: 30px;
    background-color: var(--secondary-dark);
    border: 2px solid var(--dark-blue);

    .wrapper-parameter {
      p {
        color: var(--white);
      }
    }

    .create-pair {
      border: 1px solid var(--dark-blue);
      color: var(--white);
      padding: 10px;
      transition: all 0.2s;

      &:hover {
        background-color: var(--dark-blue);
      }
    }
  }
}
</style>
