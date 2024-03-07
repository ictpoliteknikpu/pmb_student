<template>
  <div class="hp-header-logo d-flex align-items-center">
    <b-link to="/" class="position-relative d-flex">
      <img
        v-if="this.$store.state.themeConfig.direction == 'rtl' && this.$store.state.themeConfig.theme == 'light'"
        class="hp-logo"
        v-bind:src="require('@/assets/img/logo/logo-rtl.svg')"
        alt="logo"
      />
      <img
        v-if="this.$store.state.themeConfig.direction == 'rtl' && this.$store.state.themeConfig.theme == 'dark'"
        class="hp-logo"
        v-bind:src="require('@/assets/img/logo/logo-rtl-dark.svg')"
        alt="logo"
      />
      <img
        v-else-if="this.$store.state.themeConfig.direction == 'ltr' && this.$store.state.themeConfig.theme == 'light'"
        class="hp-logo"
        v-bind:src="require('@/assets/img/logo/logo.svg')"
        alt="logo"
      />
      <img
        v-else-if="this.$store.state.themeConfig.direction == 'ltr' && this.$store.state.themeConfig.theme == 'dark'"
        class="hp-logo"
        v-bind:src="require('@/assets/img/logo/logo-dark.svg')"
        alt="logo"
      />

      <div
        class="position-absolute hp-bg-black-20 hp-bg-dark-90 rounded-circle border hp-border-color-black-0 hp-border-color-dark-90 d-flex align-items-center justify-content-center"
        :style="`width: 18px; height: 18px; top: -5px; ${
          this.$store.state.themeConfig.direction === 'rtl'
            ? 'right: 0px;'
            : 'left: 21px;'
        }`"
      >
        <svg
          class="hp-fill-color-dark-0"
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.557 0H7.5L6 2.45L4.7145 0H0L6 10.5L12 0H9.557ZM1.5 0.875H2.957L6 6.3L9.043 0.875H10.5L6 8.75L1.5 0.875Z"
            fill="#2D3436"
          />
        </svg>
      </div>
    </b-link>

    <a
      href="https://hypeople-studio.gitbook.io/yoda/change-log"
      target="_blank"
      class="hp-caption font-weight-normal hp-text-color-primary-1"
    >
      v.{{ this.$store.state.themeConfig.version }}
    </a>
  </div>
</template>

<script>
import { BLink } from "bootstrap-vue";

export default {
  components: {
    BLink,
  },
};
</script>
