<template>
  <b-row class="hp-authentication-page d-flex flex-column">
    <bg-item />

    <header-item />

    <b-col class="px-32 flex-shrink-1">
      <b-row align-v="center" class="h-100 m-auto" style="max-width: 390px">
        <b-col cols="12">
          <h1 class="mb-0 mb-sm-24">Create Account</h1>

          <b-form class="mt-16 mt-sm-32 mb-8">
            <b-form-group
              label="Username :"
              label-for="registerUsername"
              class="mb-16"
            >
              <b-form-input id="registerUsername" type="text"></b-form-input>
            </b-form-group>

            <b-form-group
              v-if="emailCheck"
              label="E-mail :"
              label-for="registerEmail"
              class="mb-16"
            >
              <b-form-input id="registerEmail" type="email"></b-form-input>
            </b-form-group>

            <b-form-group
              v-if="passwordCheck"
              label="Password :"
              label-for="registerPassword"
              class="mb-16"
            >
              <b-form-input
                id="registerPassword"
                type="password"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              v-if="confirmPasswordCheck"
              label="Confirm Password :"
              label-for="registerConfirmPassword"
              class="mb-16"
            >
              <b-form-input
                id="registerConfirmPassword"
                type="password"
              ></b-form-input>
            </b-form-group>

            <b-button
              v-if="!emailCheck"
              @click="emailCheck = true"
              variant="primary"
              class="w-100"
            >
              Continue
            </b-button>
            <b-button
              v-else-if="!passwordCheck"
              @click="passwordCheck = true"
              variant="primary"
              class="w-100"
            >
              Continue
            </b-button>
            <b-button
              v-else-if="!confirmPasswordCheck"
              @click="confirmPasswordCheck = true"
              variant="primary"
              class="w-100"
            >
              Continue
            </b-button>
            <b-button v-else type="submit" variant="primary" class="w-100">
              Sign Up
            </b-button>
          </b-form>

          <div class="hp-form-info text-center">
            <span class="text-black-80 hp-text-color-dark-40 hp-caption mr-4">
              Already have an account?
            </span>

            <b-link
              class="hp-cursor-pointer text-primary-1 hp-text-color-dark-primary-2 hp-caption"
              to="/pages/authentication-modern/login"
            >
              Login
            </b-link>
          </div>
        </b-col>
      </b-row>
    </b-col>

    <footer-item />
  </b-row>
</template>

<script>
import {
  BRow,
  BCol,
  BButton,
  BLink,
  BForm,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
} from "bootstrap-vue";

import BgItem from "../BgItem.vue";
import HeaderItem from "../HeaderItem.vue";
import FooterItem from "../FooterItem.vue";

export default {
  data() {
    return {
      emailCheck: false,
      passwordCheck: false,
      confirmPasswordCheck: false,
    };
  },
  components: {
    BRow,
    BCol,
    BButton,
    BLink,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BgItem,
    HeaderItem,
    FooterItem,
  },
};
</script>
