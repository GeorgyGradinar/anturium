import axios from "axios";
import {HEADER_PARAMETERS, MAIN_URL} from "../../../../config";
import getHeaders from "@/mixins/requests/getHeaders";
import {pairs} from "@/stores/pairs";

export default function botRequests() {

  const pairsStore = pairs();
  const {changeAllPairs} = pairsStore;

  function getAllCryptoPairs() {
    axios.get(`${MAIN_URL}/order/positionRisk`, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        changeAllPairs(response.data.data);
      })
  }

  function getAllCryptoPairsGrid() {
    axios.get(`${MAIN_URL}/gridBot/activeBots`, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        console.log(response)
      })
  }

  function takeProfit() {
    const body = {
      "symbol": "BTCUSDT",
      "apiId": "661c1fdbf0bacb58f8f527a2"
    }
    axios.post(`${MAIN_URL}/gridBot/takeProfit`, body, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        changeAllPairs(response.data.data);
      })
  }

  return {
    getAllCryptoPairs,
    getAllCryptoPairsGrid,
    takeProfit
  }
}
