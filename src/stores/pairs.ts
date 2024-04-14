import {defineStore} from "pinia";
import {ref} from "vue";

export const pairs = defineStore('pairsStore', () => {
  const allPairs = ref([]);

  function clearPairsStore() {
    allPairs.value = [];
  }

  function addNewPair(newPair) {
    allPairs.value.push(newPair);
    console.log(allPairs.value)
  }

  return {
    allPairs, addNewPair,
    clearPairsStore
  }
})
