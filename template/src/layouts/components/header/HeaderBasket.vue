<template>
  <div class="hp-basket-dropdown-button w-auto px-0 position-relative">
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
          d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.99 20 22 16.5 22H7.51C4 22 3.24 19.99 3.54 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8M20.41 17.03H8"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </b-button>

    <div class="hp-basket-dropdown">
      <b-row align-v="center" align-h="between" class="px-8">
        <h5 class="mb-0 w-auto hp-text-color-dark-15 ml-8">My Cart</h5>

        <div class="w-auto px-0 mr-8">
          <span
            class="d-inline-block hp-caption font-weight-medium w-auto hp-text-color-black-80 hp-text-color-dark-30"
          >
            1 Item
          </span>
        </div>
      </b-row>

      <div class="divider mt-24 mb-4"></div>

      <div class="hp-basket-dropdown-list">
        <div
          class="d-block hp-transition hp-hover-bg-primary-4 hp-hover-bg-dark-primary hp-hover-bg-dark-80 rounded py-8 px-10 hp-overflow-x-auto"
          style="margin-left: -10px; margin-right: -10px"
        >
          <b-row align-v="center" align-h="between" class="flex-nowrap">
            <b-col class="mt-4 pr-0" style="flex: 0 0 32px">
              <b-link to="#">
                <b-avatar
                  class="hp-bg-black-0 hp-bg-dark-100"
                  :src="require('@/assets/img/product/watch-1.png')"
                  size="35px"
                />
              </b-link>
            </b-col>

            <b-col class="ml-10 px-0" style="flex: 0 0 120px">
              <b-link to="#">
                <h5
                  class="mb-0 font-weight-medium hp-p1-body hp-text-color-black-100 hp-text-color-dark-15"
                >
                  Smart Watches 3
                </h5>

                <p
                  class="mb-0 hp-caption hp-text-color-black-60"
                  style="margin-top: 1px"
                >
                  By <span class="hp-text-color-black-80">Sony</span>
                </p>
              </b-link>
            </b-col>

            <b-col
              class="hp-d-flex hp-d-flex-column ml-8 px-0"
              style="flex: 0 0 70px"
            >
              <input-number
                :min="1"
                :max="10"
                :value="1"
                size="sm"
                style="width: 65px"
              />

              <div
                class="hp-cursor-pointer mt-4 hp-input-description font-weight-medium text-black-60 hp-text-decoration-underline"
              >
                Remove Item
              </div>
            </b-col>

            <b-col class="pl-0 text-right">
              <p
                class="hp-basket-dropdown-list-item-price hp-p1-body mb-0 hp-text-color-black-80 hp-text-color-dark-30 font-weight-medium"
              >
                $59.00
              </p>
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="divider mt-4 mb-12"></div>

      <b-row class="mx-n6">
        <b-col cols="6" class="px-6">
          <b-button
            variant="text"
            block
            class="hp-bg-black-20 hp-text-color-black-100 hp-hover-text-color-primary-1 hp-hover-bg-primary-4"
          >
            View Cart
          </b-button>
        </b-col>

        <b-col cols="6" class="px-6">
          <b-button
            variant="text"
            block
            class="hp-text-color-black-0 hp-bg-black-100 hp-hover-bg-primary-1"
          >
            Checkout
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BAvatar, BButton, BLink } from "bootstrap-vue";

import InputNumber from "@/view/components/data-entry/input-number/InputNumber.vue";

export default {
  components: {
    BRow,
    BCol,
    BAvatar,
    BButton,
    BLink,
    InputNumber,
  },
};
</script>
