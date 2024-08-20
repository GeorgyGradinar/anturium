import {defineStore} from "pinia";
import {Ref, ref, UnwrapRef} from "vue";

export const pairs = defineStore('pairsStore', () => {
  const allPairs = <any>ref(null);
  const allApiKeys = ref(null);
  const selectedTypeOfBot = ref<string | null>(null);
  const alreadySelectedPair: Ref<UnwrapRef<GridBot.AlreadySelectedPair[]>> = ref([]);
  const selectedPair = <any>ref(null);
  const isLoadingCreateGridBot = ref(false);
  const isAlreadySelectedPair = ref(false);

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
          const positionInfo = apiData.positionsRisk.find((pair: any) => {
            if (pairWS.symbol === pair.positionRisk.symbol) {
              pair.positionRisk = {
                ...pair.positionRisk,
                ...pairWS
              }
              return
            }
          })
          console.log(positionInfo)
        })
      }
    })
  }

  function changeAllApiKeys(newData: any) {
    allApiKeys.value = newData;
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
    allApiKeys, changeAllApiKeys,
    selectedTypeOfBot, changeSelectedTypeOfBot,
    alreadySelectedPair,
    selectedPair, changeSelectedPair,
    clearPairsStore,
    isLoadingCreateGridBot,
    isAlreadySelectedPair
  }
})
