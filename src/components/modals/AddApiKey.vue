<template>
  <v-dialog
      v-model="isOpenAddApiKeyModal"
      width="auto"
      class="add-pair-modal"
      transition="dialog-bottom-transition"
  >
    <div class="content">
      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      v-model="name"
                      label="Имя"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      v-model="publicKey"
                      label="API Key"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      v-model="secretKey"
                      label="Secret Key"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9">
        </v-text-field>
      </div>

      <button class="create-pair" @click="saveApiKey">Создать</button>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import setSettingsRequests from "@/mixins/requests/bot/setSettingsRequests";
import {encryptAPI} from "@/unit/unit";

const modalsStore = modals();
const {isOpenAddApiKeyModal} = storeToRefs(modalsStore);
const {addApiKey} = setSettingsRequests();

const name = ref<string | null>(null);
const publicKey = ref<string | null>(null);
const secretKey = ref<string | null>(null);

function saveApiKey() {
  if (name.value && publicKey.value && secretKey.value) {
    const encryptSecretKey = encryptAPI(secretKey.value)
    addApiKey({
      'name': name.value,
      "publicKey": publicKey.value,
      "secretKey": encryptSecretKey
    });
  }

  // "publicKey": "5939bc47530f3940aabc2a98c4f472fa655daa190385bcbdcb9eeae0ba698abb",
  //     "secretKey": "d27ed34fd402f902aff34f44623dd372f885defe032deec197b38ba71df97530"
}

</script>

<style scoped lang="scss">
.add-pair-modal {
  border-radius: 0;

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    padding: 30px;
    background-color: var(--secondary-dark);
    border: 2px solid var(--dark-blue);

    .wrapper-parameter {
      p {
        color: var(--white);
      }
    }

    .create-pair {
      border: 1px solid var(--dark-blue);
      color: var(--white);
      padding: 10px;
      transition: all 0.2s;

      &:hover {
        background-color: var(--dark-blue);
      }
    }
  }
}
</style>
