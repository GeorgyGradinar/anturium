import {defineStore} from "pinia";
import {ref} from "vue";
import storage from "@/mixins/storage";
import {ANTURIUM_STORE_KEY} from "../../config";

export const personsStore = defineStore('personStore', () => {
  const {setLocalStorage} = storage();

  const person = ref<any>(null);
  const token = ref<string | null>(null);

  function clearPersonStore() {
    person.value = null;
    token.value = null;
    setLocalStorage(ANTURIUM_STORE_KEY, null);
  }

  function changePerson(data: any) {
    person.value = data;
  }

  function changeToken(newToken: string) {
    token.value = newToken;
    setLocalStorage(ANTURIUM_STORE_KEY, token.value);
  }

  return {
    person, changePerson,
    token, changeToken,
    clearPersonStore
  }
})
