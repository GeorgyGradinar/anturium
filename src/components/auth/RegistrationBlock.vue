<template>
  <section class="registration-page">
    <div class="registration">
      <p>Registration</p>

      <v-text-field
          v-model="login"
          label="Login"
          color="#08e7f9"
          variant="underlined"
      ></v-text-field>

      <v-text-field
          v-model="email"
          label="Email"
          color="#08e7f9"
          variant="underlined"
      ></v-text-field>

      <v-text-field
          v-model="password"
          label="Password"
          variant="underlined"
          type="password"
      ></v-text-field>

      <!--      <v-text-field-->
      <!--          v-model="confirmPassword"-->
      <!--          label="Confirmation Password"-->
      <!--          color="#08e7f9"-->
      <!--          variant="underlined"-->
      <!--      ></v-text-field>-->

      <button class="submit-button" @click="submit">Submit</button>

      <div class="propose-registration">
        <p>Если у вас нет аккаунта?</p>
        <button class="submit-button" @click="routeTo">Зарегистрироваться</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";
import auth from "@/mixins/requests/auth.js";
import {LOGIN} from "@/router";
import {useIonRouter} from "@ionic/vue";
import {encryptPassword} from "@/unit/unit";

const ionRouter = useIonRouter();
const {registration} = auth();

const login = ref<string | null>(null);
const email = ref<string | null>(null);
const password = ref<string | null>(null);

function submit() {
  const passwordEncrypt = encryptPassword(password.value || '');
  registration({
    login: login.value,
    mail: email.value,
    password: passwordEncrypt
  });
}

function routeTo() {
  ionRouter.push(LOGIN);
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

    p {
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
      margin-top: 30px;

      p {
        font-size: 15px;
        margin-bottom: 0;
      }
    }
  }
}
</style>
