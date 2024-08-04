<template>
  <div class="reject-popup" v-if="popupInfo">
    <p>{{ popupInfo.text }}</p>
    <img src="/public/images/close.svg" @click="emit('closePopup', popupInfo.id)" alt="close">
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

defineProps({
  popupInfo: Object
})
const emit = defineEmits(['closePopup']);
</script>

<style scoped lang="scss">
.reject-popup {
  position: relative;
  padding: 10px 25px 10px 20px;
  margin-right: 20px;
  border: 1px solid var(--red);
  color: var(--red);

  img {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 15px;
    height: 15px;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
