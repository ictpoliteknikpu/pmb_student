<template>
  <div>
    <span
      v-if="title"
      class="h3 d-block font-weight-semibold hp-text-color-black-bg hp-text-color-dark-0 mb-0"
    >
      {{ title }}
    </span>
    <span v-if="date" class="hp-p1-body d-block mt-4">{{ date }}</span>

    <b-row class="mt-24">
      <b-col
        cols="12"
        class="hp-cursor-pointer hp-transition hp-hover-bg-dark-100 hp-hover-bg-black-10 rounded py-8 mb-16"
        :key="index"
        v-for="(item, index) in list"
      >
        <b-row align-h="between" align-v="end">
          <b-col>
            <b-row align-v="center">
              <b-col class="hp-flex-none w-auto pr-0">
                <div
                  v-if="item.img"
                  class="mr-16 border hp-border-color-black-10 hp-bg-black-0 rounded-lg d-flex align-items-center justify-content-center"
                  style="min-width: 48px; height: 48px"
                >
                  <img
                    :src="require('@/assets/img/' + item.img + '')"
                    alt="Zendesk"
                  />
                </div>
              </b-col>

              <b-col class="hp-flex-none w-auto pl-0">
                <span
                  v-if="item.title"
                  class="d-block hp-p1-body font-weight-medium hp-text-color-black-bg hp-text-color-dark-0"
                >
                  {{ item.title }}
                </span>
                <span
                  v-if="item.date"
                  class="d-block hp-caption font-weight-normal hp-text-color-black-60"
                >
                  {{ item.date }}
                </span>
              </b-col>
            </b-row>
          </b-col>

          <b-col class="hp-flex-none w-auto">
            <span
              v-if="item.price"
              class="h5 hp-text-color-black-bg hp-text-color-dark-0"
            >
              {{ item.price }}
            </span>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    list: {
      type: Array,
      required: false,
    },
  },
  components: {
    BRow,
    BCol,
  },
};
</script>
