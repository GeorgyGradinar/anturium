import {modals} from "@/stores/modals";
import {pairs} from "@/stores/pairs";
import {personsStore} from "@/stores/person";
import {useRouter} from "vue-router";
import {LOGIN} from "@/router";

export default function shared() {
  const router = useRouter();
  const modalsStore = modals();
  const {clearModalStore} = modalsStore;
  const pairsStore = pairs();
  const {clearPairsStore} = pairsStore;
  const personStore = personsStore();
  const {clearPersonStore} = personStore;

  function prepareForLogout() {
    clearModalStore();
    clearPairsStore();
    clearPersonStore();
    router.push({path: LOGIN})
  }

  return {prepareForLogout}
}
