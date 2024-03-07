<template>
  <b-row class="hp-authentication-page">
    <left-item />

    <b-col cols="12" lg="6" class="py-sm-64 py-lg-0">
      <b-row align-v="center" align-h="center" class="h-100 mx-4 mx-sm-n32">
        <b-col
          cols="12"
          md="9"
          xl="7"
          class="col-xxxl-5 px-8 px-sm-0 pt-24 pb-48"
        >
          <h1 class="mb-0 mb-sm-24">Login</h1>
          <p class="mt-sm-8 mt-sm-0 text-black-60">
            Welcome back, please login to your account.
          </p>

          <b-form class="mt-16 mt-sm-32 mb-8">
            <b-form-group
              label="Username :"
              label-for="loginUsername"
              class="mb-16"
            >
              <b-form-input id="loginUsername" type="text"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Password :"
              label-for="loginPassword"
              class="mb-16"
            >
              <b-form-input id="loginPassword" type="password"></b-form-input>
            </b-form-group>

            <b-row align-v="center" align-h="between" class="mb-16">
              <b-col class="hp-flex-none w-auto">
                <b-form-checkbox>Remember me</b-form-checkbox>
              </b-col>

              <b-col class="hp-flex-none w-auto">
                <b-link
                  class="hp-button text-black-80 hp-text-color-dark-40"
                  to="/pages/authentication/recover-password"
                >
                  Forgot Password?
                </b-link>
              </b-col>
            </b-row>

            <b-button to="/" type="submit" variant="primary" class="w-100">
              Sign in
            </b-button>
          </b-form>

          <div class="hp-form-info text-center">
            <span class="text-black-80 hp-text-color-dark-40 hp-caption mr-4">
              Don’t you have an account?
            </span>

            <b-link
              class="text-primary-1 hp-text-color-dark-primary-2 hp-caption"
              to="/pages/authentication/register"
            >
              Create an account
            </b-link>
          </div>

          <footer-item />
        </b-col>
      </b-row>
    </b-col>
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

import LeftItem from "../LeftItem.vue";
import FooterItem from '../FooterItem.vue';

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BLink,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    LeftItem,
    FooterItem,
  },
};
</script>
