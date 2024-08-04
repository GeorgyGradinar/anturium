<template>
  <header>
    <button class="logout" @click="prepareForLogout">Выйти</button>
    <button @click="addRandomPopup">test</button>
  </header>
</template>

<script setup lang="ts">
import shared from "@/mixins/shared";
import {modals} from "@/stores/modals";
import {ref} from "vue";

const {prepareForLogout} = shared();

const modalsStore = modals();
const {addRejectPopup, addDonePopup} = modalsStore;

let test = ref(false);

function addRandomPopup() {
  if (test.value) {
    addRejectPopup('new test reject');
  } else {
    addDonePopup('new test done');
  }

  test.value = !test.value;
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100vw;
  height: 50px;
  border-bottom: 1px solid var(--primary-orange);
  padding: 0 50px;

  .logout {
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
