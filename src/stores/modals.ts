import {defineStore} from "pinia";
import {ref} from "vue";

export const modals = defineStore('modalsStore', () => {
  const isOpenAddPairModal = ref<boolean>(false);
  const isOpenAddApiKeyModal = ref<boolean>(false);

  function clearModalStore() {
    isOpenAddPairModal.value = false;
    isOpenAddApiKeyModal.value = false;
  }

  function toggleOpenAddPairModal(isOpen) {
    isOpenAddPairModal.value = isOpen;
  }

  function toggleOpenAddApiKeyModal(isOpen) {
    isOpenAddApiKeyModal.value = isOpen;
  }

  return {
    isOpenAddPairModal, toggleOpenAddPairModal,
    isOpenAddApiKeyModal, toggleOpenAddApiKeyModal,
    clearModalStore
  }
})
