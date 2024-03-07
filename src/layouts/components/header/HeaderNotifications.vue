<template>
  <div
    class="hover-dropdown-fade w-auto px-0 d-flex align-items-center position-relative"
  >
    <b-button
      variant="none"
      class="btn-icon-only bg-transparent border-0 hp-hover-bg-black-10 hp-hover-bg-dark-100 hp-transition"
    >
      <svg
        class="hp-text-color-black-80 hp-text-color-dark-30"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 6.44v3.33M12.02 2C8.34 2 5.36 4.98 5.36 8.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1C18.68 5 15.68 2 12.02 2Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
        ></path>
        <path
          d="M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-miterlimit="10"
        ></path>
      </svg>

      <span
        class="position-absolute translate-middle rounded-circle bg-primary hp-notification-circle"
        style="width: 6px; height: 6px; top: 9px"
      ></span>
    </b-button>

    <div
      class="hp-notification-menu dropdown-fade position-absolute pt-18"
      style="top: 100%"
    >
      <div class="pt-24 pb-18 px-24 rounded hp-bg-black-0 hp-bg-dark-100">
        <b-row :wrap="false" align-v="center" align-h="between" class="mb-16">
          <b-col
            class="hp-flex-none w-auto h5 hp-text-color-black-100 hp-text-color-dark-0 mr-64 mb-0"
          >
            Notifications
          </b-col>

          <b-col
            class="hp-flex-none w-auto hp-badge-text font-weight-medium hp-text-color-black-80"
          >
            4 New
          </b-col>
        </b-row>

        <div class="divider my-4"></div>

        <div
          class="hp-overflow-y-auto px-10"
          style="max-height: 400px; margin-right: -10px; margin-left: -10px"
        >
          <b-row
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-12">
              <b-avatar
                variant="none"
                size="48px"
                :src="require('@/assets/img/memoji/user-avatar-1.png')"
              />
            </div>

            <b-col class="w-auto px-0">
              <p
                class="d-block font-weight-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4"
              >
                Debi Cakar
                <span class="hp-text-color-black-60">commented on</span>
                Ecosystem and conservation
              </p>

              <span
                class="d-block hp-badge-text font-weight-medium hp-text-color-black-60 hp-text-color-dark-40"
              >
                1m ago
              </span>
            </b-col>
          </b-row>

          <b-row
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-12">
              <b-avatar
                variant="none"
                size="48px"
                :src="require('@/assets/img/memoji/user-avatar-2.png')"
              />
            </div>

            <b-col class="w-auto px-0">
              <p
                class="d-block font-weight-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4"
              >
                Edward Adams
                <span class="hp-text-color-black-60">invite you</span> to
                Prototyping
              </p>

              <span
                class="d-block hp-badge-text font-weight-medium hp-text-color-black-60 hp-text-color-dark-40"
              >
                9h ago
              </span>
            </b-col>
          </b-row>

          <b-row
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-12">
              <b-avatar
                variant="none"
                size="48px"
                :src="require('@/assets/img/memoji/user-avatar-3.png')"
              />
            </div>

            <b-col class="w-auto px-0">
              <p
                class="d-block font-weight-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4"
              >
                Richard Charles
                <span class="hp-text-color-black-60">mentioned you in</span> UX
                Basics Field
              </p>

              <span
                class="d-block hp-badge-text font-weight-medium hp-text-color-black-60 hp-text-color-dark-40"
              >
                13h ago
              </span>
            </b-col>
          </b-row>

          <b-row
            class="hp-cursor-pointer rounded hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-80 py-12 px-10"
            style="margin-left: -10px; margin-right: -10px"
          >
            <div class="w-auto px-0 mr-12">
              <b-avatar variant="success-4" size="48px" class="hp-bg-dark-success">
                <svg
                  class="hp-text-color-success-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.78 7.7-5.67 5.67a.75.75 0 0 1-1.06 0l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.76 0 1.06Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </b-avatar>
            </div>

            <b-col class="w-auto px-0">
              <p
                class="d-block font-weight-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-0 mb-4"
              >
                <span class="hp-text-color-black-60">You swapped exactly</span>
                0.230000 ETH
                <span class="hp-text-color-black-60">for</span> 28,031.99
              </p>

              <span
                class="d-block hp-badge-text font-weight-medium hp-text-color-black-60 hp-text-color-dark-40"
              >
                17h ago
              </span>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BAvatar, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BButton,
  },
};
</script>
