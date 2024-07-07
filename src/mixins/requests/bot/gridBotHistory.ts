import axios from "axios";
import {HEADER_PARAMETERS, MAIN_URL} from "../../../../config";
import getHeaders from "@/mixins/requests/getHeaders";
import {pairs} from "@/stores/pairs";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {personsStore} from "@/stores/person";

export default function gridBotHistory() {
  const personStore = personsStore();
  const {token} = storeToRefs(personStore);
  const pairsStore = pairs();
  const {alreadySelectedPair, isAlreadySelectedPair} = storeToRefs(pairsStore);
  const isDeletePair = ref(false);

  async function requestHistoryCreatedGridBots(): Promise<void> {
    isAlreadySelectedPair.value = true;
    const response = await axios.get(`${MAIN_URL}/history/gridBot/createBot`,
        getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.authorization]))
    alreadySelectedPair.value = response.data.history;
    isAlreadySelectedPair.value = false;
  }

  async function deletePair(id: string): Promise<void> {
    isDeletePair.value = true;
    await axios.delete(`${MAIN_URL}/history/gridBot/createBot`, {
      data: {id},
      headers: {Authorization: String(token.value), 'Content-Type': 'application/json'}
    })
    isDeletePair.value = false;
  }

  return {
    requestHistoryCreatedGridBots,
    deletePair,
    isDeletePair
  }
}
