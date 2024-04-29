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

  function createCryptoPairGrid() {
    const body = {
      "idApi": "662f534a07d1e0b361902742",
      "params": {
        "symbol": "ETHUSDT",
        "qty": 0.06,
        "price": 0,
        "side": "BUY",
        "qtyOpenOrders": 15,
        "step": 4,
        "decimals": 3
      }
    }
    axios.post(`${MAIN_URL}/gridBot/create`, body, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        console.log(response)
      })
  }

  return {
    addApiKey,
    createCryptoPairGrid
  }
}
