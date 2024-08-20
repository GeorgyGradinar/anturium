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

        <button v-for="bot in botsGrid" :key="bot.title" class="type-of-bot" @click="selectType('DEFAULT')">
          <svg-icon type="mdi" :path="bot.icon" />{{bot.title}}
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <svg-icon v-bind="props" type="mdi" :path="mdiInformationSlabCircleOutline" />
            </template>
            <p>{{bot.info}}</p>
          </v-tooltip>
        </button>

      </div>

      <v-btn class="btn" @click="isOpenTypeOfBots = false">Закрыть</v-btn>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {pairs} from "@/stores/pairs";
import {storeToRefs} from "pinia";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiRobotLove, mdiRobotAngry, mdiInformationSlabCircleOutline } from '@mdi/js';

const modalsStore = modals();
const {toggleOpenTypeOfBots, toggleOpenAddPairModal} = modalsStore;
const {isOpenTypeOfBots} = storeToRefs(modalsStore);

const pairsStore = pairs()
const {changeSelectedTypeOfBot} = pairsStore;

const botsGrid = [
  {
    title: 'Сеточный бот',
    icon: mdiRobotLove,
    info: 'Последующий ордер будет увеличен на тот размер который вы укажите'
  },
  {
    title: 'Сеточный бот "Мартингейл"',
    icon: mdiRobotAngry,
    info: 'Сеточная торговля с применением удвоения позиций (по стратегии Мартингейл) при убытках, чтобы компенсировать убытки и достичь прибыли при благоприятном движении цены'
  }
]

function selectType(type :any) {
  changeSelectedTypeOfBot(type);
  toggleOpenTypeOfBots(false);
  toggleOpenAddPairModal(true);
}
</script>

<style scoped lang="scss">
.type-of-bots {

  .content {
    height: 80vh;
    max-height: 500px;
    display: grid;
    grid-template-rows: min-content 1fr auto;
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
      flex-direction: column;
      gap: 20px;
    }

    .type-of-bot {
      border: 2px solid var(--dark-blue);
      padding: 15px;
      transition: all 0.2s;
      display: grid;
      grid-template-columns: min-content 1fr min-content;
      align-items: center;
      justify-items: start;
      gap: 20px;
      font-size: 26px;

      &:hover {
        border: 2px solid var(--primary-blue);
      }

      p {
        color: var(--dark-blue);
      }
    }

    .btn {
      background-color: var(--secondary-dark);
      border: 2px solid var(--dark-blue);
    }
  }
}
</style>
