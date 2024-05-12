<template>
  <v-dialog
      v-model="isOpenTypeOfBots"
      width="auto"
      class="type-of-bots"
      transition="dialog-bottom-transition"
  >
    <div class="content">

      <h4>Выберите тип пары</h4>
      <div class="wrapper-types">
        <button class="type-of-bot" @click="selectType('martangale')">
          <h5>Мартынгейл</h5>
          <p>Тип сетки в которой каждый последующий ордер будет увеличен в 2 раза от предыдущего</p>
        </button>
        <button class="type-of-bot" @click="selectType('web')">
          <h5>Сетка</h5>
          <p>Последующий ордер будет увеличен на тот размер который вы укажите</p>
        </button>
      </div>

    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {pairs} from "@/stores/pairs";
import {storeToRefs} from "pinia";

const modalsStore = modals();
const {toggleOpenTypeOfBots, toggleOpenAddPairModal} = modalsStore;
const {isOpenTypeOfBots} = storeToRefs(modalsStore);

const pairsStore = pairs()
const {changeSelectedTypeOfBot} = pairsStore;

function selectType(type) {
  changeSelectedTypeOfBot(type);
  toggleOpenTypeOfBots(false);
  toggleOpenAddPairModal(true);
}
</script>

<style scoped lang="scss">
.type-of-bots {

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    background-color: var(--secondary-dark);
    border: 2px solid var(--dark-blue);

    h4 {
      color: var(--primary-blue);
      margin: 0;
      font-size: 20px;
    }

    .wrapper-types {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .type-of-bot {
      max-width: 200px;
      border: 2px solid var(--dark-blue);
      padding: 15px;
      transition: all 0.2s;

      &:hover {
        border: 2px solid var(--primary-blue);
      }

      h5 {
        margin: 0 0 10px 0;
        color: var(--primary-blue);
      }

      p {
        color: var(--dark-blue);
      }
    }
  }
}
</style>
