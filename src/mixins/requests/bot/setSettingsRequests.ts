import axios from "axios";
import {HEADER_PARAMETERS, MAIN_URL} from "../../../../config";
import getHeaders from "@/mixins/requests/getHeaders";
import {IAddApiKey} from "@/interfaces/settings";
import {pairs} from "@/stores/pairs";
import {storeToRefs} from "pinia";

export default function setSettingsRequests() {
    const pairsStore = pairs();
    const {isLoadingCreateGridBot} = storeToRefs(pairsStore);

    function addApiKey(body: IAddApiKey) {
    axios.post(`${MAIN_URL}/user/api`, body, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        console.log(response)
      })
  }

  async function createCryptoPairGrid(body: any) {
      isLoadingCreateGridBot.value = true;
      return await axios.post(`${MAIN_URL}/gridBot/create`, body, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
          .then(response => {
              console.log(response)
              isLoadingCreateGridBot.value = false;
              return response
          })
  }

  return {
    addApiKey,
    createCryptoPairGrid
  }
}
