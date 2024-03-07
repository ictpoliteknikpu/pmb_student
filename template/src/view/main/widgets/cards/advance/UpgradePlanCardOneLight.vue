<template>
  <b-card class="hp-card-1 hp-upgradePlanCardOne hp-upgradePlanCardOne-bg">
    <div class="position-absolute h-100" style="top: 0; right: 0">
      <svg class="w-100 h-100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m394.94 86.299-177.9-100.66 34.328 92.136L131.659 8.35l109.303 155.528L78.423 73.626l47.648 95.459L4.478 118.751"
          stroke="url(#UpgradePlanCardOneLight)"
          stroke-width="20"
          stroke-linejoin="bevel"
        ></path>
        <defs>
          <linearGradient
            id="UpgradePlanCardOneLight"
            x1="187.747"
            y1="-11.283"
            x2="206.538"
            y2="167.497"
            gradientUnits="userSpaceOnUse"
          >
            <stop></stop>
            <stop offset="0.737" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <b-row align-v="center" class="mt-8">
      <b-col cols="12" class="mb-4">
        <b-row align-v="center" align-h="between">
          <b-col class="flex-shrink-1">
            <h4 class="mb-8 font-weight-bold">
              Get exclusive discounts for any payment method
            </h4>

            <p
              class="hp-p1-body mb-0 hp-text-color-black-100 hp-text-color-dark-0"
            >
              by upgrading your plan to premium
            </p>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <b-button
              class="float-right mt-16 mt-sm-0 border-0 hp-hover-bg-black-100 hp-bg-black-bg hp-text-color-black-0 hp-hover-bg-dark-10 hp-bg-dark-0 hp-text-color-dark-100"
            >
              <span>Upgrade Now</span>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BButton } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BButton,
  },
};
</script>
