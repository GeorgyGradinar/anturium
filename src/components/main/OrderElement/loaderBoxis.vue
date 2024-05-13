<template>
  <div class="loader" :class="{'is-show':  isShow,'is-red': isRedColor}">
    <div class="square" id="sq1"></div>
    <div class="square" id="sq2"></div>
    <div class="square" id="sq3"></div>
    <div class="square" id="sq4"></div>
    <div class="square" id="sq5"></div>
    <div class="square" id="sq6"></div>
    <div class="square" id="sq7"></div>
    <div class="square" id="sq8"></div>
    <div class="square" id="sq9"></div>
  </div>
</template>

<script setup lang="ts">
import {toRefs} from "vue";

const props = defineProps({
  isShow: Boolean,
  isRedColor: Boolean
})
const {isShow, isRedColor} = toRefs(props);
</script>

<style scoped lang="scss">
@keyframes loader_5191 {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(133, 203, 47, 0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s;
  opacity: 0;
  z-index: -1;

  &.is-show {
    opacity: 1;
    z-index: 1;
  }

  .square {
    background: var(--primary-green);
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
  }

  &.is-red {
    background-color: rgba(235, 68, 90, 0.2);

    .square {
      background: var(--red);
    }
  }

  #sq1 {
    margin-top: -25px;
    margin-left: -25px;
    animation: loader_5191 675ms ease-in-out 0s infinite alternate;
  }

  #sq2 {
    margin-top: -25px;
    animation: loader_5191 675ms ease-in-out 75ms infinite alternate;
  }

  #sq3 {
    margin-top: -25px;
    margin-left: 15px;
    animation: loader_5191 675ms ease-in-out 150ms infinite;
  }

  #sq4 {
    margin-left: -25px;
    animation: loader_5191 675ms ease-in-out 225ms infinite;
  }

  #sq5 {
    animation: loader_5191 675ms ease-in-out 300ms infinite;
  }

  #sq6 {
    margin-left: 15px;
    animation: loader_5191 675ms ease-in-out 375ms infinite;
  }

  #sq7 {
    margin-top: 15px;
    margin-left: -25px;
    animation: loader_5191 675ms ease-in-out 450ms infinite;
  }

  #sq8 {
    margin-top: 15px;
    animation: loader_5191 675ms ease-in-out 525ms infinite;
  }

  #sq9 {
    margin-top: 15px;
    margin-left: 15px;
    animation: loader_5191 675ms ease-in-out 600ms infinite;
  }
}
</style>
