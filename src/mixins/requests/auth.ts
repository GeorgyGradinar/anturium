import axios from "axios";
import {ANTURIUM_STORE_KEY, API_URL, HEADER_PARAMETERS, MAIN_URL} from "../../../config";
import {ILogin, IRegistration} from "@/interfaces/auth.js";
import getHeaders from "@/mixins/requests/getHeaders";
import {personsStore} from "@/stores/person";
import storage from "@/mixins/storage";
import {storeToRefs} from "pinia";
import {useIonRouter} from "@ionic/vue";
import {useRouter} from "vue-router";
import {LOGIN, MAIN} from "@/router";
import botRequests from "@/mixins/requests/bot/botRequests";
import {pairs} from "@/stores/pairs";

export default function auth() {
  const ionRouter = useIonRouter();
  const router = useRouter();

  const personStore = personsStore();
  const {changeToken, changePerson} = personStore;
  const {token} = storeToRefs(personStore);
  const pairsStore = pairs();
  const {changeAllApiKeys} = pairsStore;
  const {getLocalStorage} = storage();
  const {webSocketBotsInfo} = botRequests();

  function initStore() {
    changeToken(getLocalStorage(ANTURIUM_STORE_KEY));

    if (token.value) {
      getPersonInfo();
    } else if (router.currentRoute.value.path === MAIN) {
      ionRouter.push(LOGIN);
    }
  }

  function registration(data: IRegistration) {
    axios.post(`${API_URL()}/auth/registration`, data, getHeaders([HEADER_PARAMETERS.content]))
      .then(response => {
        changeToken(response.data.token);
        getPersonInfo();
        ionRouter.push('/');
      })
  }

  function login(data: ILogin) {
    axios.post(`${API_URL()}/auth/login`, data, getHeaders([HEADER_PARAMETERS.content]))
      .then(response => {
        changeToken(response.data.token);
        getPersonInfo();
        ionRouter.push('/');
      })
  }

  function getPersonInfo() {
    axios.get(`${API_URL()}/auth/user`, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.authorization]))
      .then(response => {
        changePerson(response.data.data);
        changeAllApiKeys(response.data.data?.apiKeys);
        webSocketBotsInfo();
      })
  }

  return {
    initStore,
    registration,
    login
  }
}
