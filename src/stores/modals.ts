import {defineStore} from "pinia";
import {ref} from "vue";
import {Popups} from "@/interfaces/sharedInterfaces";

export const modals = defineStore('modalsStore', () => {
  const allPopups = ref<Popups[]>([]);
  const isOpenAddPairModal = ref<boolean>(false);
  const isOpenAddApiKeyModal = ref<boolean>(false);
  const isOpenTypeOfBots = ref<boolean>(false);
  const isOpenAlreadyCreatedPairs = ref<boolean>(false);

  function clearModalStore() {
    allPopups.value = [];
    isOpenAddPairModal.value = false;
    isOpenAddApiKeyModal.value = false;
    isOpenTypeOfBots.value = false;
  }

  function addRejectPopup(text: string) {
    allPopups.value.push({
      id: getId(),
      isDone: false,
      text
    })
  }

  function addDonePopup(text: string) {
    allPopups.value.push({
      id: getId(),
      isDone: true,
      text
    })
  }

  function deletePopup(id) {
    console.log(id)
    const index = allPopups.value.findIndex((popup: Popups) => popup.id === id);

    if (index === -1) return;

    allPopups.value.splice(index, 1);
  }

  function getId() {
    return Math.floor(Math.random() * 10000);
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
    allPopups, addRejectPopup, addDonePopup, deletePopup,
    isOpenAddPairModal, toggleOpenAddPairModal,
    isOpenAddApiKeyModal, toggleOpenAddApiKeyModal,
    isOpenTypeOfBots, toggleOpenTypeOfBots,
    isOpenAlreadyCreatedPairs, toggleOpenAlreadyCreatedPair,
    clearModalStore
  }
})
