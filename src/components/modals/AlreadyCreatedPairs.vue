<template>
  <v-dialog
      v-model="isOpenAlreadyCreatedPairs"
      width="auto"
      class="already-created-pairs"
      transition="dialog-bottom-transition"
  >
    <div class="content">
      <template v-if="!isAlreadySelectedPair">
        <div class="pair" :key="pair.params.symbol" v-for="pair in alreadySelectedPair">
          <p>Пара: <span>{{ pair.params.symbol }}</span></p>
          <p>Количество монет: <span>{{ pair.params.qty }}</span></p>
          <p>Прайс покупки: <span>{{ pair.params.price }}</span></p>
          <p>Количество ордеров: <span>{{ pair.params.qtyOpenOrders }}</span></p>
          <p>Шаг в %: <span>{{ pair.params.step }}</span></p>
          <p>Decimals: <span>{{ pair.params.decimals }}</span></p>

          <v-btn class="primary-button reuse" @click="reusePair(pair)">Использовать</v-btn>
          <v-btn class="primary-button delete" :loading="historyGridBot.isDeletePair.value" @click="deletePair(pair._id)">Удалить</v-btn>
        </div>
      </template>
      <p v-else>Loading...</p>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";
import {pairs} from "@/stores/pairs";
import gridBotHistory from "@/mixins/requests/bot/gridBotHistory";

const pairsStore = pairs();
const {changeSelectedPair} = pairsStore;
const {alreadySelectedPair, isAlreadySelectedPair} = storeToRefs(pairsStore);
const historyGridBot = gridBotHistory();

const modalsStore = modals();
const {toggleOpenAlreadyCreatedPair, toggleOpenAddPairModal} = modalsStore;
const {isOpenAlreadyCreatedPairs} = storeToRefs(modalsStore);

function reusePair(pair: any) {
  changeSelectedPair(pair);
  toggleOpenAlreadyCreatedPair(false);
  toggleOpenAddPairModal(true);
}

async function deletePair(id: string): Promise<void> {
  await historyGridBot.deletePair(id);
  await historyGridBot.requestHistoryCreatedGridBots();
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
        --v-theme-surface: transparent;

        &:hover {
          background-color: var(--dark-blue);
        }
      }

      .delete {
        border: 1px solid var(--red);
        color: var(--red);
        --v-theme-surface: transparent;

        &:hover {
          background-color: var(--light-red);
        }
      }
    }
  }
}
</style>
