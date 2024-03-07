<template>
  <div
    class="hover-dropdown-fade w-auto px-0 ml-8 position-relative hp-cursor-pointer"
  >
    <div
      class="hp-cursor-pointer border hp-border-color-dark-80"
      style="border-radius: 15px"
    >
      <div class="rounded-lg overflow-hidden m-4 d-flex">
        <b-avatar
          variant="none"
          :src="require('@/assets/img/memoji/user-avatar-4.png')"
          size="32px"
          class="rounded-0 hp-bg-info-4"
        />
      </div>
    </div>

    <div
      class="hp-header-profile-menu dropdown-fade position-absolute pt-18"
      style="top: 100%; width: 260px"
    >
      <div class="rounded hp-bg-black-0 hp-bg-dark-100 py-24 px-18">
        <span
          class="d-block h5 font-weight-medium hp-text-color-black-100 hp-text-color-dark-0 mb-16"
        >
          Profile Settings
        </span>

        <b-link
          to="#"
          class="hp-p1-body font-weight-medium hp-hover-text-color-primary-2"
        >
          View Profile
        </b-link>

        <div class="divider mt-18 mb-16"></div>

        <b-row>
          <b-col cols="12">
            <b-link
              to="#"
              class="d-flex align-items-center font-weight-medium hp-p1-body my-4 py-8 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded"
              style="margin-left: -10px; margin-right: -10px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                class="mr-8"
              >
                <path
                  d="M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 0 1-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 11a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 11ZM16 16.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <span>Explore Creators</span>
            </b-link>
          </b-col>

          <b-col cols="12">
            <b-link
              to="#"
              class="d-flex align-items-center font-weight-medium hp-p1-body my-4 py-8 px-10 hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded"
              style="margin-left: -10px; margin-right: -10px"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                class="mr-8"
              >
                <path
                  d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.695 13.7h.009M15.695 16.7h.009M11.995 13.7h.01M11.995 16.7h.01M8.294 13.7h.01M8.294 16.7h.01"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <span>Help Desk</span>
            </b-link>
          </b-col>
        </b-row>

        <div class="divider mt-12 mb-18"></div>

        <b-row>
          <b-col cols="12">
            <b-link
              class="hp-p1-body d-inline-flex align-items-center font-weight-medium hp-text-color-primary-1 hp-text-color-dark-primary-2 hp-hover-text-color-primary-2 hp-hover-text-color-dark-primary-1"
              to="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.136 14h.012M11.995 14h.012M15.854 14h.012M8.136 17.5h.012M11.995 17.5h.012M15.854 17.5h.012"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <span class="ml-8" style="line-height: 1">Pricing List</span>
            </b-link>
          </b-col>
        </b-row>

        <div class="divider my-18"></div>

        <b-row>
          <b-col cols="12">
            <b-link
              class="hp-p1-body font-weight-medium hp-hover-text-color-primary-2"
              to="#"
            >
              Account Settings
            </b-link>
          </b-col>

          <b-col cols="12" class="mt-24">
            <b-link
              class="hp-p1-body font-weight-medium hp-hover-text-color-primary-2"
              to="/"
            >
              Logout
            </b-link>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BAvatar, BLink } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BLink,
  },
};
</script>
