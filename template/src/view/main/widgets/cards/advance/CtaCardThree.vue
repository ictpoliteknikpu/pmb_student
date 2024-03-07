<template>
  <b-card class="hp-card-6">
    <div class="position-absolute" style="left: 20px; bottom: 0px">
      <svg
        width="302"
        height="90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M296 96.824 172.381 9l18.207 70.449-83.051-60.34L176.214 142 63.136 63.021l27.79 73.924L5 90.505"
          :stroke="this.$store.state.themeConfig.theme === 'dark' ? '#ffffff' : '#000000'"
          stroke-width="20"
          stroke-linejoin="bevel"
        ></path>
      </svg>
    </div>

    <h1 class="mb-16 hp-text-color-black-bg hp-text-color-dark-0">
      Upgrade <br />
      Account
    </h1>

    <p
      class="h3 font-weight-normal hp-text-color-black-100 hp-text-color-dark-10 mb-0"
    >
      5 integrations, 30 <br />
      team members, <br />
      advanced
      <span class="mx-4 hp-text-color-primary-1 hp-text-color-dark-primary-2">
        features
      </span>
      <br />for teams.
    </p>
  </b-card>
</template>

<script>
import { BCard } from "bootstrap-vue";

export default {
  components: {
    BCard,
  },
};
</script>
