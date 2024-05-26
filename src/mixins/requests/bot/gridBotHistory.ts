import axios from "axios";
import {HEADER_PARAMETERS, MAIN_URL} from "../../../../config";
import getHeaders from "@/mixins/requests/getHeaders";
import {pairs} from "@/stores/pairs";
import {storeToRefs} from "pinia";

export default function gridBotHistory() {
  const pairsStore = pairs();
  const {alreadySelectedPair, isAlreadySelectedPair} = storeToRefs(pairsStore);

  async function requestHistoryCreatedGridBots(): Promise<void> {
    isAlreadySelectedPair.value = true;
    const response = await axios.get(`${MAIN_URL}/history/gridBot/createBot`,
        getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.authorization]))
    alreadySelectedPair.value = response.data.history;
    isAlreadySelectedPair.value = false;
  }

  return {
    requestHistoryCreatedGridBots
  }
}
