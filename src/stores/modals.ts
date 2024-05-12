import {defineStore} from "pinia";
import {ref} from "vue";

export const modals = defineStore('modalsStore', () => {
  const isOpenAddPairModal = ref<boolean>(false);
  const isOpenAddApiKeyModal = ref<boolean>(false);
  const isOpenTypeOfBots = ref<boolean>(false);
  const isOpenAlreadyCreatedPairs = ref<boolean>(false);

  function clearModalStore() {
    isOpenAddPairModal.value = false;
    isOpenAddApiKeyModal.value = false;
    isOpenTypeOfBots.value = false;
  }

  function toggleOpenAddPairModal(isOpen) {
    isOpenAddPairModal.value = isOpen;
  }

  function toggleOpenAddApiKeyModal(isOpen) {
    isOpenAddApiKeyModal.value = isOpen;
  }

  function toggleOpenTypeOfBots(isOpen) {
    isOpenTypeOfBots.value = isOpen;
  }

  function toggleOpenAlreadyCreatedPair(isOpen) {
    isOpenAlreadyCreatedPairs.value = isOpen;
  }

  return {
    isOpenAddPairModal, toggleOpenAddPairModal,
    isOpenAddApiKeyModal, toggleOpenAddApiKeyModal,
    isOpenTypeOfBots, toggleOpenTypeOfBots,
    isOpenAlreadyCreatedPairs, toggleOpenAlreadyCreatedPair,
    clearModalStore
  }
})
