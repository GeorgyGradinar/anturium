import {defineStore} from "pinia";
import {ref} from "vue";

export const pairs = defineStore('pairsStore', () => {
  const allPairs = ref(null);

  function clearPairsStore() {
    allPairs.value = null;
  }

  function changeAllPairs(newPairs) {
    allPairs.value = newPairs;
    console.log(allPairs.value)
  }

  function addNewPair(newPair) {
    allPairs.value.push(newPair);
  }

  return {
    allPairs, addNewPair, changeAllPairs,
    clearPairsStore
  }
})
