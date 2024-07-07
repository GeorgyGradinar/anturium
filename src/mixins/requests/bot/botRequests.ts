import axios from "axios";
import {HEADER_PARAMETERS, MAIN_URL} from "../../../../config";
import getHeaders from "@/mixins/requests/getHeaders";
import {pairs} from "@/stores/pairs";
import {storeToRefs} from "pinia";
import {personsStore} from "@/stores/person";
import {StatusWatchingBot} from "@/const/const";

export default function botRequests() {

  const pairsStore = pairs();
  const {changeAllPairs, changePairsFromWS} = pairsStore;
  const personStore = personsStore();

  function getAllCryptoPairs() {
    axios.get(`${MAIN_URL}/order/positionRisk`, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        changeAllPairs(response.data.data);
      })
  }

  function getAllCryptoPairsGrid() {
    axios.get(`${MAIN_URL}/gridBot/activeBots`, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        changeAllPairs(response.data.data);
      })
  }

  function takeProfit(symbol: string, apiId: string | undefined) {
    return axios.post(`${MAIN_URL}/gridBot/takeProfit`, {symbol, apiId},
      getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        return response
      })
  }

  function changeWatching(symbol: string, status: StatusWatchingBot, apiId: string) {
    axios.put(`${MAIN_URL}/gridBot/watching`, {symbol, status, apiId},
      getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        // changeAllPairs(response.data.data);
        getAllCryptoPairsGrid();
      })
  }

  function webSocketBotsInfo() {
    const socket = new WebSocket('wss://anturium.online/websocket');
    socket.onopen = () => {
      socket.send(JSON.stringify({
        "authorization": personStore.token
      }))
    }

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      switch (data.type) {
        case "NOTIFICATION_POSITION_RISK":
          changePairsFromWS(data.data);
      }
    }
  }

  return {
    getAllCryptoPairsGrid,
    takeProfit,
    changeWatching,
    webSocketBotsInfo
  }
}
