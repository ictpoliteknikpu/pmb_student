<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <page-content
        :breadcrumbTitle="true"
        :breadcrumb="[
          {
            title: 'Components',
            link: '/components/components-page',
          },
          {
            title: 'General',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            We used Iconly Icon for Yoda Admin Template
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <b-row>
        <b-col class="hp-flex-none w-auto mb-32">
          <tab-menu :propsTabIndex="{ index }" @tabMenuChange="tabMenu" />
        </b-col>

        <b-col class="hp-icon-search-col mb-32">
          <search @searchChange="search" />
        </b-col>
      </b-row>

      <tab-content :propsSearch="{ searchVal }" :propsTabIndex="{ index }" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import TabContent from "./TabContent.vue";
import TabMenu from "./TabMenu.vue";
import Search from "./Search.vue";

export default {
  data() {
    return {
      searchVal: "",
      index: 0,
    };
  },
  components: {
    BRow,
    BCol,
    PageContent,
    TabMenu,
    Search,
    TabContent,
  },
  methods: {
    tabMenu(val) {
      this.index = val;
    },
    search(val) {
      this.searchVal = val;
    },
  },
};
</script>
