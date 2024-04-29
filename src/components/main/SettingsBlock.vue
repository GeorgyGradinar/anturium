<template>
  <div class="settings-block">
    <button class="add-pair" @click="toggleOpenAddPairModal(true)">Создать пару</button>
    <button class="add-pair" @click="toggleOpenAddApiKeyModal(true)">Добавить API key</button>
  </div>

  <AddPairModal></AddPairModal>
  <AddApiKey></AddApiKey>
</template>

<script setup lang="ts">
import {modals} from "@/stores/modals";
import AddPairModal from "@/components/modals/AddPairModal.vue";
import AddApiKey from "@/components/modals/AddApiKey.vue";

const modalsStore = modals();
const {toggleOpenAddPairModal, toggleOpenAddApiKeyModal} = modalsStore;
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
