<template>
  <v-dialog
      v-model="isOpenAddPairModal"
      width="auto"
      class="add-pair-modal"
      transition="dialog-bottom-transition"
  >
    <v-form class="content" @submit.prevent="createPair">

      <div class="wrapper-api-keys">
        <v-select
            v-model="selectedApiKey"
            :items="person.apiKeys"
            :item-title="'name'"
            variant="outlined"
            persistent-hint
            hide-details
            label="Api key"
            rounded="0"
            color="#08e7f9"
            base-color="#08e7f9"
            return-object
        ></v-select>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Пара"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="symbol">
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

      <v-btn class="create-pair" :loading="isLoadingCreateGridBot" type="submit">Создать</v-btn>

      <div class="wrapper-already-create-pair">
        <button @click.prevent="seeAlreadyCreatedPairs">Посмотреть уже созданные пары</button>
      </div>

    </v-form>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";
import {ref, watch} from "vue";
import {pairs} from "@/stores/pairs";
import setSettingsRequests from "@/mixins/requests/bot/setSettingsRequests";
import {personsStore} from "@/stores/person";
import gridBotHistory from "@/mixins/requests/bot/gridBotHistory";

const pairsStore = pairs();
const {changeSelectedPair} = pairsStore;
const {isLoadingCreateGridBot, selectedPair, selectedTypeOfBot} = storeToRefs(pairsStore);
const personStore = personsStore();
const {person} = storeToRefs(personStore);
const modalsStore = modals();
const {toggleOpenAlreadyCreatedPair, toggleOpenAddPairModal} = modalsStore;
const {isOpenAddPairModal} = storeToRefs(modalsStore);
const {createCryptoPairGrid} = setSettingsRequests()
const {requestHistoryCreatedGridBots} = gridBotHistory()

const selectedApiKey = ref<any>('');
const symbol = ref<string>('');
const countCoin = ref<number>(0);
const price = ref<number>(0);
const countOrders = ref<number>(0);
const step = ref<number>(0);
const countDecimals = ref<number>(0);

watch(isOpenAddPairModal, () => {
  if (isOpenAddPairModal.value) {
    console.log(selectedPair.value)
    if (selectedPair.value) {
      symbol.value = selectedPair.value?.params.symbol;
      countCoin.value = selectedPair.value?.params.qty;
      price.value = selectedPair.value?.params.price || 0;
      countOrders.value = selectedPair.value?.params.qtyOpenOrders;
      step.value = selectedPair.value?.params.step;
      countDecimals.value = selectedPair.value?.params.decimals;
    }
  } else {
    symbol.value = '';
    countCoin.value = 0;
    price.value = 0;
    countOrders.value = 0;
    step.value = 0;
    countDecimals.value = 0;
    changeSelectedPair(null);
  }
})

async function createPair() {
  const createdGridBotResponse = await createCryptoPairGrid({
    idApi: selectedApiKey.value?._id,
    params: {
      symbol: symbol.value,
      qty: countCoin.value,
      price: price.value,
      side: 'BUY',
      qtyOpenOrders: countOrders.value,
      step: step.value,
      decimals: countDecimals.value,
      strategy: selectedTypeOfBot.value === 'MARTINGALE' ? "MARTINGALE" : 'DEFAULT',
      marginType: "CROSSED",
      stepRevers: 10
    },
  })

  if (createdGridBotResponse.data.success) isOpenAddPairModal.value = false;
}

function seeAlreadyCreatedPairs() {
  requestHistoryCreatedGridBots();
  toggleOpenAddPairModal(false);
  toggleOpenAlreadyCreatedPair(true);
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
    overflow: auto;

    .wrapper-api-keys {

    }

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
      --v-theme-surface: transparent;

      &:hover {
        background-color: var(--dark-blue);
      }
    }

    .wrapper-already-create-pair {
      display: flex;
      justify-content: flex-end;

      button {
        color: var(--primary-blue);
        transition: all 0.2s;
        text-decoration: underline;

        &:hover {
          color: var(--dark-blue);
        }
      }
    }
  }
}
</style>
