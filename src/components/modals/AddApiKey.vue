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
                      label="Имя"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="pair">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="API Key"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="countCoin">
        </v-text-field>
      </div>

      <div class="wrapper-parameter">
        <v-text-field variant="outlined"
                      label="Secret Key"
                      hide-details
                      rounded="0"
                      color="#08e7f9"
                      base-color="#08e7f9"
                      v-model="price">
        </v-text-field>
      </div>

      <button class="create-pair" @click="createPair">Создать</button>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";
import {ref} from "vue";


const pair = ref<string>('');
const countCoin = ref<number>(0);
const price = ref<number>(0);


const modalsStore = modals();
const {isOpenAddApiKeyModal} = storeToRefs(modalsStore);

</script>

<style scoped lang="scss">

</style>
