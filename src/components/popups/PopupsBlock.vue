<template>
  <div class="all-popups">
    <template v-for="popup in allPopups" :key="popup.id">
      <DonePopup v-if="popup.isDone" :popupInfo="popup" @closePopup="deletePopup"></DonePopup>
      <RejectPopup v-else :popupInfo="popup" @closePopup="deletePopup"></RejectPopup>
    </template>
  </div>
</template>

<script setup lang="ts">
import DonePopup from "@/components/popups/DonePopup.vue";
import RejectPopup from "@/components/popups/RejectPopup.vue";
import {modals} from "@/stores/modals";
import {storeToRefs} from "pinia";

const modalsStore = modals();
const {allPopups} = storeToRefs(modalsStore);
const {deletePopup} = modalsStore;

</script>

<style scoped lang="scss">
.all-popups {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-end;
  position: absolute;
  right: 0;
  bottom: 10px;
}
</style>
