<template>
  <b-col cols="12">
    <b-row
      align-v="center"
      align-h="between"
      class="px-16 px-sm-64 py-16 mb-48 border-bottom hp-border-color-dark-70"
    >
      <b-col class="w-auto hp-flex-none pl-0">
        <logo />
      </b-col>

      <b-col class="w-auto hp-flex-none">
        <b-row align-v="center">
          <span
            class="hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mr-24 d-block hp-auth-header-title"
          >
            Need Help?
          </span>

          <b-link to="#" class="d-flex align-items-center"
            ><svg
              class="hp-text-color-black-100 hp-text-color-dark-0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.19 6h-6.4c-.26 0-.51.01-.75.04C3.35 6.27 2 7.86 2 10.79v4c0 4 1.6 4.79 4.79 4.79h.4c.22 0 .51.15.64.32l1.2 1.6c.53.71 1.39.71 1.92 0l1.2-1.6c.15-.2.39-.32.64-.32h.4c2.93 0 4.52-1.34 4.75-4.04.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79ZM6.5 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm3.49 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1Zm3.5 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"
                fill="currentColor"
              ></path>
              <path
                d="M21.98 6.79v4c0 2-.62 3.36-1.86 4.11-.3.18-.65-.06-.65-.41l.01-3.7c0-4-2.29-6.29-6.29-6.29l-6.09.01c-.35 0-.59-.35-.41-.65C7.44 2.62 8.8 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79Z"
                fill="currentColor"
              ></path>
            </svg>

            <span
              class="ml-6 d-block hp-p1-body hp-text-color-black-100 hp-text-color-dark-0"
            >
              Support
            </span>
          </b-link>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol, BLink } from "bootstrap-vue";

import Logo from "@/layouts/components/logo";

export default {
  components: {
    BRow,
    BCol,
    BLink,
    Logo,
  },
};
</script>
