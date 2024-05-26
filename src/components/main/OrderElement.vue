<template>
  <div class="order"
       :class="{'up': pair?.unRealizedProfit > 0, 'down': pair?.unRealizedProfit < 0, 'change': activeChangeAnimation }">
    <FirstBlock :pair="pair"></FirstBlock>
    <PnlBlock :pair="pair"></PnlBlock>
    <!--    <MarginBlock :pair="pair"></MarginBlock>-->
    <PriceInfo :pair="pair"></PriceInfo>

    <div class="wrapper-buttons">
      <button v-if="pair?.isActive" class="stop-spy" @click="changeWatching(pair?.symbol, StatusWatchingBot.pause, api?.id)">Остановить бот</button>
      <button v-else class="start-spy" @click="changeWatching(pair?.symbol, StatusWatchingBot.start, api?.id)">Возобновить бота</button>
      <button class="take-profit"
              @click="prepareForTakingProfit(pair?.symbol, api?.id)"
              :class="{'up': pair?.unRealizedProfit > 0, 'down': pair?.unRealizedProfit < 0}">
        Собрать профит
      </button>
    </div>
    <LoaderBoxis :isShow="activeMainLoader" :isRedColor="pair?.unRealizedProfit < 0"></LoaderBoxis>
  </div>
</template>

<script setup lang="ts">
import {ref, toRefs, watch} from "vue";
import FirstBlock from "@/components/main/OrderElement/FirstBlock.vue";
import PnlBlock from "@/components/main/OrderElement/PnlBlock.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MarginBlock from "@/components/main/OrderElement/MarginBlock.vue";
import PriceInfo from "@/components/main/OrderElement/PriceInfo.vue";
import botRequests from "@/mixins/requests/bot/botRequests";
import LoaderBoxis from "@/components/main/OrderElement/loaderBoxis.vue";
import {StatusWatchingBot} from "@/const/const";

const props = defineProps({
  pair: Object,
  api: Object
})
const {pair, api} = toRefs(props);
const {takeProfit, changeWatching} = botRequests();

const activeChangeAnimation = ref<boolean>(false);
const activeMainLoader = ref<boolean>(false);

watch(pair, (newVal: any, oldValue: any) => {
  if (newVal.unRealizedProfit !== oldValue.unRealizedProfit) {
    toggleActiveChangeAnimation();
  }
})

function toggleActiveChangeAnimation() {
  activeChangeAnimation.value = true;

  setTimeout(() => {
    activeChangeAnimation.value = false;
  }, 300)
}

function prepareForTakingProfit(symbol: string, id: string) {
  activeMainLoader.value = true;
  takeProfit(symbol, id)
      .then(() => {
        activeMainLoader.value = false;
      })
}

</script>

<style scoped lang="scss">
@import "src/theme/buttons.css";

.order {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid var(--primary-orange);
  padding: 20px;
  background-color: var(--light-dark);
  border-radius: 10px;
  opacity: 1;
  transition: all 0.7s;

  &.up {
    border: 2px solid var(--primary-green);
    background-color: var(--light-green);

    &.change {
      opacity: 0.2;
    }
  }

  &.down {
    border: 2px solid var(--red);
    background-color: var(--light-red);

    &.change {
      opacity: 0.3;
    }
  }

  h4 {
    margin: unset;
    color: var(--white);
  }

  .pnl {
    position: relative;
    display: flex;
    gap: 5px;

    .title {
    }
  }

  .wrapper-buttons {
    display: flex;
    gap: 10px;

    .take-profit {
      padding: 5px 10px;
      transition: all 0.2s;

      &.up {
        color: var(--primary-green);
        border: 1px solid var(--light-green);

        &:hover {
          border: 1px solid var(--primary-green);
          background-color: var(--light-green);
        }
      }

      &.down {
        color: var(--red);
        border: 1px solid var(--light-red);

        &:hover {
          border: 1px solid var(--red);
          background-color: var(--light-red);
        }
      }
    }

    .start-spy {
      color: var(--primary-green);
      border: 1px solid var(--primary);
      padding: 5px 10px;
      transition: all 0.2s;

      &:hover {
        border: 1px solid var(--primary-green);
        background-color: var(--primary);
      }
    }

    .stop-spy {
      color: var(--primary-orange);
      border: 1px solid var(--light-orange);
      padding: 5px 10px;
      transition: all 0.2s;

      &:hover {
        border: 1px solid var(--primary-orange);
        background-color: var(--light-orange);
      }
    }
  }
}
</style>
