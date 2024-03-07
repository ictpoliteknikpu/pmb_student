<template>
  <div
    class="overflow-hidden position-relative hp-bg-black-bg pt-24 px-24 pb-18"
    style="border-radius: 15px"
  >
    <div class="position-absolute" style="height: 90%; bottom: 0; right: -30px">
      <svg class="w-100 h-100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M384.797 85.179 194.619 10.257l46.816 86.462L113.23 44.63l129.884 138.803L69.597 116.68l60.469 87.899L2.651 171.657"
          stroke="url(#CreditCardNew)"
          stroke-width="20"
          stroke-linejoin="bevel"
        ></path>
        <defs>
          <linearGradient
            id="CreditCardNew"
            x1="166.04"
            y1="17.382"
            x2="209.529"
            y2="191.807"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="0.737" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <b-row style="min-height: 158px">
      <b-col cols="8" xl="7">
        <p class="h5 mb-0 hp-text-color-black-0">
          Check the Best Prices of New Models &amp; Boost Your Business
        </p>

        <b-button
          type="none"
          class="mt-24 border-0 hp-hover-bg-black-10 hp-bg-black-0 hp-text-color-black-100"
        >
          <span>Upgrade Now</span>
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BButton,
  },
};
</script>
