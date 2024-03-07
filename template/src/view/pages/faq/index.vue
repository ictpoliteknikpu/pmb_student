<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <page-content
        title="Hello! How can we help you?"
        :breadcrumbTitle="true"
        :breadcrumb="[
          {
            title: 'Pages',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            or choose a category to quickly find the help you need.
          </p>
        </template>
      </page-content>
    </b-col>

    <search />

    <tab-menu :propsTabIndex="{ index }" @tabMenuChange="tabMenu" />

    <tab-content :propsTabIndex="{ index }" />
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import TabMenu from "./TabMenu.vue";
import TabContent from "./TabContent.vue";
import Search from "./Search.vue";

export default {
  data() {
    return {
      index: 0,
    };
  },
  components: {
    BRow,
    BCol,
    PageContent,
    Search,
    TabMenu,
    TabContent,
  },
  methods: {
    tabMenu(val) {
      this.index = val;
    },
  },
};
</script>
