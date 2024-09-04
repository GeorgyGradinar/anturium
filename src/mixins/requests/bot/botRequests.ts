import axios from "axios";
import {API_URL, HEADER_PARAMETERS} from "../../../../config";
import getHeaders from "@/mixins/requests/getHeaders";
import {pairs} from "@/stores/pairs";
import {personsStore} from "@/stores/person";
import {StatusWatchingBot} from "@/const/const";
import {popupStore} from "@/stores/popup";

export default function botRequests() {

  const pairsStore = pairs();
  const {changeAllPairs, changePairsFromWS} = pairsStore;
  const personStore = personsStore();
  const storePopup = popupStore();

  function getAllCryptoPairs() {
    axios.get(`${API_URL()}/order/positionRisk`, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        changeAllPairs(response.data.data);
      })
  }

  async function getAllCryptoPairsGrid() {
    await axios.get(`${API_URL()}/gridBot/activeBots`, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        changeAllPairs(response.data.data);
      })
  }

  function takeProfit(symbol: string, apiId: string | undefined) {
    return axios.post(`${API_URL()}/gridBot/takeProfit`, {symbol, apiId},
      getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        return response
      })
  }

  function changeWatching(symbol: string, status: StatusWatchingBot, apiId: string) {
    return axios.put(`${API_URL()}/gridBot/watching`, {symbol, status, apiId},
      getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.accept, HEADER_PARAMETERS.authorization]))
      .then(response => {
        // changeAllPairs(response.data.data);
        getAllCryptoPairsGrid();
        return response;
      })
  }

  function webSocketBotsInfo() {
    const socket = new WebSocket(`wss://${import.meta.env.VITE_SOCKET_URL}/websocket`);
    socket.onopen = () => {
      socket.send(JSON.stringify({
        "authorization": personStore.token
      }))
    }

    socket.onmessage = (event) => {
      if (event.data === "Connection with server") return;
      const data = JSON.parse(event.data)
      console.log(data)
      switch (data.type) {
        case "NOTIFICATION_POSITION_RISK":
          changePairsFromWS(data.data);
          break
        case "NOTIFICATION_BOT":
          if (data.data?.message === 'relistingBot') storePopup.addDonePopup(`Прибыль по ${data.data.symbol} успешно зафиксирована. Ордера выставлены снова`);
          break
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
