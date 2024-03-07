<template>
  <div
    class="overflow-hidden position-relative hp-bg-primary-1 pt-24 px-24 pb-18"
    style="min-height: 200px; border-radius: 24px"
  >
    <div
      class="position-absolute w-100"
      style="height: 90%; bottom: 0; left: 0"
    >
      <svg
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M370.717 85.179 180.539 10.257l46.817 86.462L99.151 44.63l129.884 138.803L55.517 116.68l60.47 87.899-127.415-32.922"
          stroke="url(#a)"
          stroke-width="20"
          stroke-linejoin="bevel"
        ></path>
        <defs>
          <linearGradient
            id="a"
            x1="151.96"
            y1="17.382"
            x2="195.449"
            y2="191.807"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff"></stop>
            <stop offset="0.737" stop-color="#fff" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <b-row>
      <b-col cols="12">
        <img :src="require('@/assets/img/logo/logo-blue.svg')" alt="Yoda" />
      </b-col>

      <b-col cols="12" class="mt-32">
        <span class="h4 d-block hp-text-color-black-0">
          4512 0000 0000 0000 0000
        </span>
      </b-col>

      <b-col cols="12" class="mt-4 mb-n16">
        <b-row align-v="center" align-h="between">
          <b-col>
            <span class="hp-caption font-weight-medium hp-text-color-black-0">
              Edward Adams
            </span>
          </b-col>

          <b-col class="d-flex hp-flex-none w-auto">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="hp-text-color-black-0"
              height="64"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M22.222 15.768l-.225-1.125h-2.514l-.4 1.117-2.015.004a4199.19 4199.19 0 0 1 2.884-6.918c.164-.391.455-.59.884-.588.328.003.863.003 1.606.001L24 15.765l-1.778.003zm-2.173-2.666h1.62l-.605-2.82-1.015 2.82zM7.06 8.257l2.026.002-3.132 7.51-2.051-.002a950.849 950.849 0 0 1-1.528-5.956c-.1-.396-.298-.673-.679-.804C1.357 8.89.792 8.71 0 8.465V8.26h3.237c.56 0 .887.271.992.827.106.557.372 1.975.8 4.254L7.06 8.257zm4.81.002l-1.602 7.508-1.928-.002L9.94 8.257l1.93.002zm3.91-.139c.577 0 1.304.18 1.722.345l-.338 1.557c-.378-.152-1-.357-1.523-.35-.76.013-1.23.332-1.23.638 0 .498.816.749 1.656 1.293.959.62 1.085 1.177 1.073 1.782-.013 1.256-1.073 2.495-3.309 2.495-1.02-.015-1.388-.101-2.22-.396l.352-1.625c.847.355 1.206.468 1.93.468.663 0 1.232-.268 1.237-.735.004-.332-.2-.497-.944-.907-.744-.411-1.788-.98-1.774-2.122.017-1.462 1.402-2.443 3.369-2.443z"
                ></path>
              </g>
            </svg>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
  },
};
</script>
