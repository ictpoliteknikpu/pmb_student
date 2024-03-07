<template>
  <b-card class="hp-card-6">
    <b-row align-h="between" class="flex-column mx-n24">
      <b-col class="text-center mt-12 mb-64 mb-md-0 px-0">
        <img
          v-if="this.$store.state.themeConfig.theme === 'dark'"
          :src="require('@/assets/img/dashboard/line.svg')"
          alt="Upgrade Account"
          class="w-100"
        />
        <img
          v-else
          :src="require('@/assets/img/dashboard/lineDark.svg')"
          alt="Upgrade Account"
          class="w-100"
        />
      </b-col>

      <b-col cols="12" class="text-center mt-96 pt-12">
        <h3 class="mb-12">Upgrade Account</h3>
        <p class="hp-p1-body mb-0">
          5 integrations, 30 team members, <br />
          advanced
          <span
            class="hp-text-color-primary-1 hp-mx-4 hp-text-color-dark-primary-2"
          >
            features
          </span>
          for teams.
        </p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
