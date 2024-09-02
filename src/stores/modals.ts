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

  function toggleOpenAddPairModal(isOpen: boolean) {
    isOpenAddPairModal.value = isOpen;
  }

  function toggleOpenAddApiKeyModal(isOpen: boolean) {
    isOpenAddApiKeyModal.value = isOpen;
  }

  function toggleOpenTypeOfBots(isOpen: boolean) {
    isOpenTypeOfBots.value = isOpen;
  }

  function toggleOpenAlreadyCreatedPair(isOpen: boolean) {
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
