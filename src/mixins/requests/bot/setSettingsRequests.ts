import axios from "axios";
import {HEADER_PARAMETERS, MAIN_URL} from "../../../../config";
import getHeaders from "@/mixins/requests/getHeaders";
import {IAddApiKey} from "@/interfaces/settings";

export default function setSettingsRequests() {

  function addApiKey(body: IAddApiKey) {
    axios.post(`${MAIN_URL}/user/api`, body, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        console.log(response)
      })
  }

  function createCryptoPairGrid(body :any) {
    axios.post(`${MAIN_URL}/gridBot/create`, body, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        console.log(response)
        return response
      })
  }

  return {
    addApiKey,
    createCryptoPairGrid
  }
}
