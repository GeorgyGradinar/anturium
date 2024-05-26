import {defineStore} from "pinia";
import {ref} from "vue";

export const pairs = defineStore('pairsStore', () => {
  const allPairs = <any>ref(null);
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
  const selectedPair = <any>ref(null);
  const isLoadingCreateGridBot = ref(false);

  function clearPairsStore() {
    allPairs.value = null;
    selectedTypeOfBot.value = null;
  }

  function changeAllPairs(newPairs: any) {
    allPairs.value = newPairs;
  }

  function changePairsFromWS(data: any) {
    if (!allPairs.value) return;

    allPairs.value.forEach((apiData: any) => {
      if (apiData.api.id === data.api.id) {
        data.positionsRisk.forEach((pairWS: any) => {
          apiData.positionsRisk.find((pair: any) => {
            if (pairWS.symbol === pair.positionRisk.symbol) {
              pair.positionRisk = {
                ...pair.positionRisk,
                ...pairWS
              }
              return
            }
          })
        })
      }
    })
  }

  function addNewPair(newPair: any) {
    allPairs.value.push(newPair);
  }

  function changeSelectedTypeOfBot(type: any) {
    selectedTypeOfBot.value = type;
  }

  function changeSelectedPair(pair: any) {
    selectedPair.value = pair;
  }

  return {
    allPairs, addNewPair, changeAllPairs, changePairsFromWS,
    allApiKeys,
    selectedTypeOfBot, changeSelectedTypeOfBot,
    alreadySelectedPair,
    selectedPair, changeSelectedPair,
    clearPairsStore,
    isLoadingCreateGridBot
  }
})
