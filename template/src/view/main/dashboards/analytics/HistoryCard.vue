<template>
  <div>
    <b-row align-v="center" align-h="between">
      <b-col cols="12" sm="6">
        <span
          class="h3 font-weight-semibold hp-text-color-black-bg hp-text-color-dark-0 d-block mb-0"
        >
          History
        </span>

        <p class="hp-p1-body mt-4 mb-0">Transection of last 6 months</p>
      </b-col>

      <b-col> </b-col>
    </b-row>

    <b-row class="mt-24 mx-0">
      <b-col
        cols="12"
        class="hp-bg-black-0 hp-bg-dark-100 border hp-border-color-black-10 hp-border-color-dark-80 p-12 mb-16"
        style="border-radius: 24px"
        v-for="(item, index) in list"
        :key="index"
      >
        <b-row align-h="between" align-v="center">
          <b-col cols="12" sm="6" class="mb-16 mb-sm-0">
            <b-row :wrap="false" align-v="center">
              <b-col class="hp-flex-none w-auto pr-0">
                <div
                  class="hp-cursor-pointer border hp-border-color-dark-80 mr-16"
                  style="border-radius: 15px"
                >
                  <div
                    :class="`overflow-hidden m-4 d-flex${item.avatarBg}`"
                    style="
                      min-width: 64px;
                      width: 64px;
                      height: 64px;
                      border-radius: 15px;
                    "
                  >
                    <img
                      :src="require('@/assets/img/' + item.avatar + '')"
                      alt="User"
                      height="100%"
                    />
                  </div>
                </div>
              </b-col>

              <b-col class="hp-flex-none w-auto pl-0">
                <span class="d-block h4 mb-0">{{ item.name }}</span>
                <span class="d-block hp-p1-body mt-4">{{ item.title }}</span>
              </b-col>
            </b-row>
          </b-col>

          <b-col
            cols="6"
            sm="3"
            class="text-sm-right text-left"
            style="min-height: 50px"
          >
            <span class="d-block h4 font-weight-normal mb-0">
              {{ item.price }}
            </span>
            <span class="d-block hp-p1-body mt-4">{{ item.number }}</span>
          </b-col>

          <b-col cols="6" sm="3" class="text-right" style="min-height: 50px">
            <span class="h4">{{ item.percent }}</span>
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
