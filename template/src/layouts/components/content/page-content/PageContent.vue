<template>
  <div
    class="hp-bg-black-bg py-32 py-sm-64 px-24 px-sm-48 px-md-80 position-relative overflow-hidden hp-page-content"
    style="border-radius: 32px"
  >
    <svg
      width="358"
      height="336"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="position-absolute hp-rtl-scale-x-n1"
      style="bottom: 0; right: 0"
    >
      <path
        d="M730.404 135.471 369.675-6.641l88.802 164.001-243.179-98.8 246.364 263.281-329.128-126.619 114.698 166.726-241.68-62.446"
        stroke="url(#a)"
        stroke-width="40"
        stroke-linejoin="bevel"
      ></path>
      <defs>
        <linearGradient
          id="a"
          x1="315.467"
          y1="6.875"
          x2="397.957"
          y2="337.724"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff"></stop>
          <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>

    <b-row>
      <b-col cols="12" sm="6">
        <b-row>
          <b-col cols="12" v-if="title">
            <h1 class="mb-0 hp-text-color-black-0">
              {{ title }}
            </h1>
          </b-col>
          <b-col cols="12" v-else>
            <h1 class="mb-0 hp-text-color-black-0">
              {{ pageTitle }}
            </h1>
          </b-col>

          <b-col cols="12">
            <b-breadcrumb class="mt-24">
              <b-breadcrumb-item to="/" class="breadcrumb-link">
                Home
              </b-breadcrumb-item>

              <b-breadcrumb-item
                :key="index"
                v-for="(item, index) in breadcrumb"
                :to="item.link ? item.link : '#'"
                :class="item.link ? 'breadcrumb-link' : ''"
              >
                <span v-if="item.link">{{ item.title }}</span>
                <span v-else class="hp-text-color-black-0">
                  {{ item.title }}
                </span>
              </b-breadcrumb-item>

              <b-breadcrumb-item to="#" v-if="breadcrumbTitle">
                <span class="hp-text-color-black-0">
                  {{ pageTitle }}
                </span>
              </b-breadcrumb-item>
            </b-breadcrumb>
          </b-col>

          <b-col cols="12">
            <slot name="desc" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow, BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue";

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    breadcrumb: {
      type: String,
      required: false,
    },
    breadcrumbTitle: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      pageTitle: "",
    };
  },
  components: {
    BCol,
    BRow,
    BBreadcrumb,
    BBreadcrumbItem,
  },
  watch: {
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.pageTitle = this.$route.meta.title;
    },
  },
  created() {
    this.getRoute();
  },
};
</script>
