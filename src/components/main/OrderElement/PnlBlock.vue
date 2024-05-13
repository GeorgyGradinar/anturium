<template>
  <div class="pnl-block">
    <div class="wrapper-pnl">
      <div class="pnl">
        <p class="price" :class="{'up' : pair?.unRealizedProfit > 0, 'down': pair?.unRealizedProfit < 0}">
          {{ cutUnRealizedProfit(pair?.unRealizedProfit) }}
        </p>
        <label>$</label>
      </div>

      <p class="roi" :class="{'up' : pair?.unRealizedProfit > 0, 'down': pair?.unRealizedProfit < 0}">
        {{ countPercent() }}
        <label>%</label>
      </p>
    </div>

    <div class="wrapper-quantity-coin">
      <p class="quantity-coin">{{ pair?.positionAmt }}</p>
      <label>Колличество монет</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps({
  pair: Object
})
const {pair} = toRefs(props);

function cutUnRealizedProfit(profit: string) {
  return Number(profit).toFixed(2);
}

function countPercent() {
  const percentageDifference = (Number(pair?.value?.markPrice) - Number(pair?.value?.entryPrice)) * 100 / Number(pair?.value?.entryPrice)
 return  (percentageDifference * Number(pair?.value?.leverage)).toFixed(2);
}

</script>

<style scoped lang="scss">
.pnl-block {
  display: flex;
  justify-content: space-between;

  .wrapper-pnl {
    .pnl {
      display: flex;
      align-items: flex-end;
      gap: 2px;

      label {
        font-size: 17px;
        margin-bottom: 13px;
        color: var(--dark-blue);
      }

      .price {
        font-size: 45px;
        display: flex;
        align-items: flex-end;

        &.up {
          color: var(--primary-green);
        }

        &.down {
          color: var(--red);
        }
      }
    }

    .roi {
      &.up {
        color: var(--primary-green);
      }

      &.down {
        color: var(--red);
      }

      label {
        font-size: 12px;
      }
    }
  }

  .wrapper-quantity-coin {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    label {
      font-size: 10px;
      font-weight: 800;
      color: var(--dark-blue);
    }
  }
}
</style>
