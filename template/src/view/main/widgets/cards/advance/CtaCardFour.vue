<template>
  <b-card class="hp-card-6">
    <b-row align-h="between" class="flex-column">
      <b-col cols="12" class="text-center mt-24">
        <div
          class="position-absolute"
          style="
            left: -8px;
            right: -8px;
            top: 45%;
            transform: translate(0px, -50%);
          "
        >
          <img
            :src="require('@/assets/img/dashboard/line.svg')"
            alt="Upgrade Account"
            class="w-100"
          />
        </div>

        <img
          :src="require('@/assets/img/logo/logo-blue-shadow.svg')"
          alt="Upgrade Account"
          class="position-relative"
        />
      </b-col>

      <b-col cols="12" class="text-center mt-42">
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
