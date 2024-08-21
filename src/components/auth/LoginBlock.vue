<template>
  <section class="registration-page">
    <v-form class="registration" @submit.prevent="submit">
      <p class="title">Login</p>

      <v-text-field
          v-model="email"
          label="Email"
          color="#ff6b02"
          variant="underlined"
      ></v-text-field>

      <v-text-field
          v-model="password"
          label="Password"
          color="#ff6b02"
          type="password"
          variant="underlined"
      ></v-text-field>

      <button class="submit-button" type="submit">Submit</button>
      <div class="propose-registration">
        <p>Если у вас нет аккаунта?</p>
        <button class="submit-button" @click="routeTo">Зарегистрироваться</button>
      </div>
    </v-form>
  </section>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import auth from "@/mixins/requests/auth";
import {REGISTRATION} from "@/router";
import {useIonRouter} from '@ionic/vue';
import {encryptPassword} from "@/unit/unit";


const {login} = auth();
const ionRouter = useIonRouter();

const email = ref<string | null>(null);
const password = ref<string | null>(null);

function submit() {
  if (!password.value) return;
  const loginPassword = encryptPassword(password.value);
  login({
    mail: email.value,
    password: loginPassword
  })
}

function routeTo() {
  ionRouter.push(REGISTRATION);
}
</script>

<style scoped lang="scss">
.registration-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .registration {
    width: 500px;
    padding: 30px;
    border: 1px solid var(--primary-orange);

    .title {
      color: var(--primary-orange);
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .submit-button {
      padding: 10px 20px;
      border: 2px solid var(--primary-orange);
      color: var(--primary-orange);
      font-weight: 600;
      transition: all 0.2s;

      &:hover {
        background-color: var(--secondary-dark);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .propose-registration {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      p {
        font-size: 15px;
        font-weight: 700;
        color: var(--primary-orange);
      }
    }
  }
}
</style>
