<template>
  <b-row class="hp-authentication-page d-flex flex-column">
    <bg-item />

    <header-item />

    <b-col class="px-32 flex-shrink-1">
      <b-row align-v="center" class="h-100 m-auto" style="max-width: 420px">
        <b-col cols="12">
          <h1 class="mb-0 mb-sm-24">Recover Password</h1>

          <b-form class="mt-16 mt-sm-32 mb-8">
            <b-form-group
              label="E-mail :"
              label-for="recoverEmail"
              class="mb-16"
            >
              <b-form-input
                id="recoverEmail"
                type="email"
                placeholder="you@example.com"
              ></b-form-input>
            </b-form-group>

            <b-button
              to="/pages/authentication-modern/reset-password"
              type="submit"
              variant="primary"
              class="w-100"
            >
              Reset Password
            </b-button>
          </b-form>

          <div class="hp-form-info text-center">
            <span class="text-black-80 hp-text-color-dark-40 hp-caption mr-4">
              Go back to
            </span>

            <b-link
              class="text-primary-1 hp-text-color-dark-primary-2 hp-caption"
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
