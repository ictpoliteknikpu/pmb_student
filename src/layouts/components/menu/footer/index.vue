<template>
  <b-row
    align-v="center"
    align-h="between"
    class="hp-sidebar-footer mx-0 hp-bg-color-dark-90"
  >
    <div
      v-if="!collapsed"
      class="divider hp-border-black-40 hp-border-color-dark-70 mt-0 px-0"
    ></div>

    <b-col>
      <b-row align-v="center">
        <div class="w-auto px-0">
          <b-avatar
            class="hp-bg-primary-4"
            variant="none"
            :src="require('@/assets/img/memoji/user-avatar-8.png')"
            size="48px"
          ></b-avatar>
        </div>

        <div v-if="!collapsed" class="w-auto ml-8 px-0 mt-6">
          <span
            class="d-block hp-text-color-black-100 hp-text-color-dark-0 hp-p1-body lh-1"
          >
            Jane Doe
          </span>

          <b-link
            to="#"
            class="hp-badge-text hp-text-color-dark-30 font-weight-normal"
          >
            View Profile
          </b-link>
        </div>
      </b-row>
    </b-col>

    <b-col v-if="!collapsed" class="hp-flex-none w-auto px-0">
      <b-link to="#">
        <i
          class="hp-text-color-black-100 hp-text-color-dark-0 ri-settings-3-line"
          style="font-size: 24px"
        ></i>
      </b-link>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BAvatar, BLink } from "bootstrap-vue";

export default {
  props: ["collapsed"],
  components: {
    BRow,
    BCol,
    BAvatar,
    BLink,
  },
};
</script>
