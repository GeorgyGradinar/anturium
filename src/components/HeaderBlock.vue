<template>
  <header>
    <button class="logout">Выйти</button>
  </header>
</template>

<script setup lang="ts">

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
