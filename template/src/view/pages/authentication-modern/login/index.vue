<template>
  <b-row class="hp-authentication-page d-flex flex-column">
    <bg-item />

    <header-item />

    <b-col class="px-32 flex-shrink-1">
      <b-row align-v="center" class="h-100 m-auto" style="max-width: 390px">
        <b-col cols="12">
          <h1 class="mb-0 mb-sm-24">Login</h1>

          <b-form class="mt-16 mt-sm-32 mb-8">
            <b-form-group
              label="Username :"
              label-for="loginUsername"
              class="mb-16"
            >
              <b-form-input id="loginUsername" type="text"></b-form-input>
            </b-form-group>

            <b-form-group
              v-if="step"
              label="Password :"
              label-for="loginPassword"
              class="mb-16"
            >
              <b-form-input id="loginPassword" type="password"></b-form-input>
            </b-form-group>

            <b-row v-if="step" align-v="center" align-h="between" class="mb-16">
              <b-col class="hp-flex-none w-auto">
                <b-form-checkbox>Remember me</b-form-checkbox>
              </b-col>

              <b-col class="hp-flex-none w-auto">
                <b-link
                  class="hp-button text-black-80 hp-text-color-dark-40"
                  to="/pages/authentication-modern/recover-password"
                >
                  Forgot Password?
                </b-link>
              </b-col>
            </b-row>

            <b-button
              v-if="step"
              to="/"
              type="submit"
              variant="primary"
              class="w-100"
            >
              Sign in
            </b-button>
            <b-button
              v-else
              @click="step = true"
              variant="primary"
              class="w-100"
            >
              Continue
            </b-button>
          </b-form>

          <div class="hp-form-info text-center">
            <span class="text-black-80 hp-text-color-dark-40 hp-caption mr-4">
              Don’t you have an account?
            </span>

            <b-link
              class="text-primary-1 hp-text-color-dark-primary-2 hp-caption"
              to="/pages/authentication-modern/register"
            >
              Create an account
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
      step: false,
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
