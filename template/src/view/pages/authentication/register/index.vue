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
          <span
            class="d-block hp-p1-body hp-text-color-dark-0 hp-text-color-black-100 font-weight-medium mb-6"
          >
            SIGN UP FOR FREE
          </span>
          <h1 class="mb-0 mb-sm-24">Create Account</h1>
          <p class="mt-sm-8 mt-sm-0 text-black-60">
            Please sign up to your personal account if you want to use all our
            premium products.
          </p>

          <b-form class="mt-16 mt-sm-32 mb-8">
            <b-form-group
              label="Username :"
              label-for="registerUsername"
              class="mb-16"
            >
              <b-form-input id="registerUsername" type="text"></b-form-input>
            </b-form-group>

            <b-form-group
              label="E-mail :"
              label-for="registerEmail"
              class="mb-16"
            >
              <b-form-input id="registerEmail" type="email"></b-form-input>
            </b-form-group>

            <b-form-group
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
              label="Confirm Password :"
              label-for="registerConfirmPassword"
              class="mb-16"
            >
              <b-form-input
                id="registerConfirmPassword"
                type="password"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="w-100">
              Sign Up
            </b-button>
          </b-form>

          <div class="hp-form-info text-center">
            <span class="text-black-80 hp-text-color-dark-40 hp-caption mr-4">
              Already have an account?
            </span>

            <b-link
              class="hp-cursor-pointer text-primary-1 hp-text-color-dark-primary-2 hp-caption"
              to="/pages/authentication/login"
            >
              Login
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
import FooterItem from "../FooterItem.vue";

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
