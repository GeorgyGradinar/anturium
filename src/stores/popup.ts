import {defineStore} from "pinia";
import {ref} from "vue";
import {Popups} from "@/interfaces/sharedInterfaces";

export const popup = defineStore('popupStore', () => {
  const allPopups = ref<Popups[]>([]);

  function addRejectPopup(text: string) {
    const popup = {
      id: getId(),
      isDone: true,
      text
    };
    allPopups.value.push(popup)
    setTimeout(() => deletePopup(popup.id), 5000);
  }

  function addDonePopup(text: string) {
    const popup = {
      id: getId(),
      isDone: true,
      text
    };
    allPopups.value.push(popup)
    setTimeout(() => deletePopup(popup.id), 5000);
  }

  function deletePopup(id: number) {
    console.log(id)
    const index = allPopups.value.findIndex((popup: Popups) => popup.id === id);

    if (index === -1) return;

    allPopups.value.splice(index, 1);
  }

  function getId() {
    return Math.floor(Math.random() * 10000);
  }

  return {
    allPopups,
    addDonePopup,
    addRejectPopup,
    deletePopup
  }
})
