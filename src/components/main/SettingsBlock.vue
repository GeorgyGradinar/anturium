<template>
  <div class="settings-block">
    <button class="add-pair" @click="toggleOpenAddPairModal(true)">Создать пару</button>
    <button class="add-pair" @click="toggleOpenAddPairModal(true)">Добавить API key</button>
  </div>

  <AddPairModal></AddPairModal>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import AddPairModal from "@/components/modals/AddPairModal.vue";
import {onMounted} from "vue";
import axios from "axios";
import {HEADER_PARAMETERS, MAIN_URL} from "../../../config";
import getHeaders from "@/mixins/requests/getHeaders";

const modalsStore = modals();
const {toggleOpenAddPairModal} = modalsStore;

onMounted(() => {

  setTimeout(() => {
    const data = {
      "publicKey": "i9orwLtWoXcjDDsS5f0va6gNOo0CgLcVUoq6XQEbLatiC3iV1jX3qWZV7cWIKTsR",
      "secretKey": "JcTPToTiEYnMSuzrHTPSsnwYnp2YI98RI95uuhsH6QKSQ5fC6BFXocaRfnb3ukHw"
    }

    axios.put(`${MAIN_URL}/user/api`, data, getHeaders([HEADER_PARAMETERS.content, HEADER_PARAMETERS.authorization]))
        .then(response => {
          console.log(response)
        })
  }, 1500)

})
</script>

<style scoped lang="scss">
.settings-block {
  display: flex;
  gap: 20px;

  .add-pair {
    border: 1px solid var(--primary-blue);
    color: var(--primary-blue);
    padding: 5px 10px;
    transition: all 0.2s;

    &:hover {
      background-color: var(--secondary-dark);
    }
  }
}
</style>
