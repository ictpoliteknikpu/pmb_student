<template>
  <b-row align-v="end" align-h="between" class="row mx-0">
    <div
      v-if="collapsed"
      class="w-auto px-0 hp-sidebar-collapse-button mb-8"
      @click="sidebarCollapsed(false)"
    >
      <div
        v-if="this.$store.state.themeConfig.sidebarCollapseButton"
        class="hp-cursor-pointer"
      >
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.91102 1.73796L0.868979 4.78L0 3.91102L3.91102 0L7.82204 3.91102L6.95306 4.78L3.91102 1.73796Z"
            fill="#B2BEC3"
          ></path>
          <path
            d="M3.91125 12.0433L6.95329 9.00125L7.82227 9.87023L3.91125 13.7812L0.000224113 9.87023L0.869203 9.00125L3.91125 12.0433Z"
            fill="#B2BEC3"
          ></path>
        </svg>
      </div>
    </div>

    <div class="w-auto px-0">
      <logo v-if="!collapsed" />
      <div v-else class="hp-header-logo">
        <b-link to="/" class="position-relative">
          <img
            v-if="this.$store.state.themeConfig.theme == 'light'"
            class="hp-logo"
            v-bind:src="require('@/assets/img/logo/logo-small.svg')"
            alt="logo"
          />
          <img
            v-else-if="this.$store.state.themeConfig.theme == 'dark'"
            class="hp-logo"
            v-bind:src="require('@/assets/img/logo/logo-small-dark.svg')"
            alt="logo"
          />

          <div
            class="position-absolute hp-bg-black-20 hp-bg-dark-90 rounded-circle border hp-border-color-black-0 hp-border-color-dark-90 d-flex align-items-center justify-content-center"
            style="width: 18px; height: 18px; top: -16px; left: 21px"
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
      </div>
    </div>

    <div
      v-if="!collapsed"
      class="w-auto px-0 hp-sidebar-collapse-button mb-4"
      @click="sidebarCollapsed(true)"
    >
      <div
        v-if="this.$store.state.themeConfig.sidebarCollapseButton"
        class="hp-cursor-pointer"
      >
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.91102 1.73796L0.868979 4.78L0 3.91102L3.91102 0L7.82204 3.91102L6.95306 4.78L3.91102 1.73796Z"
            fill="#B2BEC3"
          ></path>
          <path
            d="M3.91125 12.0433L6.95329 9.00125L7.82227 9.87023L3.91125 13.7812L0.000224113 9.87023L0.869203 9.00125L3.91125 12.0433Z"
            fill="#B2BEC3"
          ></path>
        </svg>
      </div>
    </div>
  </b-row>
</template>

<script>
import { BRow, BCol, BButton, BLink } from "bootstrap-vue";
import Logo from "../../logo";

export default {
  props: ["collapsed"],
  components: {
    BRow,
    BCol,
    BButton,
    BLink,
    Logo,
  },
  methods: {
    sidebarCollapsed(check) {
      this.$emit("sidebarCollapsedProps", check);
    },
  },
};
</script>
