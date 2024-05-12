import {defineStore} from "pinia";
import {ref} from "vue";

export const pairs = defineStore('pairsStore', () => {
  const allPairs = ref(null);
  const allApiKeys = ref(['kfdjdnvjkf435345', 'sdjfsdf345kj353']);
  const selectedTypeOfBot = ref<string | null>(null);
  const alreadySelectedPair = ref([
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
    {
      pair: 'ARBUSEDT',
      countCoin: 25,
      price: 1.2,
      countOrders: 19,
      step: 1,
      decimals: 2
    },
  ]);
  const selectedPair = ref(null);

  function clearPairsStore() {
    allPairs.value = null;
    selectedTypeOfBot.value = null;
  }

  function changeAllPairs(newPairs) {
    allPairs.value = newPairs;
  }

  function addNewPair(newPair) {
    allPairs.value.push(newPair);
  }

  function changeSelectedTypeOfBot(type) {
    selectedTypeOfBot.value = type;
  }

  function changeSelectedPair(pair) {
    selectedPair.value = pair;
  }

  return {
    allPairs, addNewPair, changeAllPairs,
    allApiKeys,
    selectedTypeOfBot, changeSelectedTypeOfBot,
    alreadySelectedPair,
    selectedPair, changeSelectedPair,
    clearPairsStore
  }
})
