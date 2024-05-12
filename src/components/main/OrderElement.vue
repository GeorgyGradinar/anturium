<template>
  <div class="order"
       :class="{'up': pair?.unRealizedProfit > 0, 'down': pair?.unRealizedProfit < 0}">
    <FirstBlock :pair="pair"></FirstBlock>
    <PnlBlock :pair="pair"></PnlBlock>
    <!--    <MarginBlock :pair="pair"></MarginBlock>-->
    <PriceInfo :pair="pair"></PriceInfo>

    <div class="wrapper-buttons">
      <button class="stop-spy" @click="stopWatching(pair?.symbol)">Остановить бот</button>
      <button class="take-profit"
              @click="takeProfit(pair?.symbol, apiId)"
              :class="{'up': pair?.unRealizedProfit > 0, 'down': pair?.unRealizedProfit < 0}">
        Собрать профит
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";
import FirstBlock from "@/components/main/OrderElement/FirstBlock.vue";
import PnlBlock from "@/components/main/OrderElement/PnlBlock.vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MarginBlock from "@/components/main/OrderElement/MarginBlock.vue";
import PriceInfo from "@/components/main/OrderElement/PriceInfo.vue";
import botRequests from "@/mixins/requests/bot/botRequests";

const props = defineProps({
  pair: Object,
  apiId: String
})
const {pair} = toRefs(props);
const {takeProfit, stopWatching} = botRequests();

</script>

<style scoped lang="scss">
@import "src/theme/buttons.css";

.order {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 2px solid var(--primary-orange);
  padding: 20px;
  background-color: var(--light-dark);
  border-radius: 10px;

  &.up {
    border: 2px solid var(--primary-green);
    background-color: var(--light-green);
  }

  &.down {
    border: 2px solid var(--red);
    background-color: var(--light-red);
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
