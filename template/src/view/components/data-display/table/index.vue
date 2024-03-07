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
            title: 'Data Display',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            For displaying tabular data, <code>&lt;b-table&gt;</code> supports
            pagination, filtering, sorting, custom rendering, various style
            options, events, and asynchronous data. For simple display of
            tabular data without all the fancy features, BootstrapVue provides
            two lightweight alternative components
            <code
              ><a
                href="https://bootstrap-vue.org/docs/components/table#light-weight-tables"
                target="_blank"
                >&lt;b-table-lite&gt;</a
              ></code
            >
            and
            <code
              ><a
                href="https://bootstrap-vue.org/docs/components/table#simple-tables"
                target="_blank"
                >&lt;b-table-simple&gt;</a
              ></code
            >.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <styling />
    </b-col>

    <b-col cols="12" class="mb-32">
      <responsive />
    </b-col>

    <b-col cols="12" class="mb-32">
      <stacked />
    </b-col>

    <b-col cols="12" class="mb-32">
      <table-caption />
    </b-col>

    <b-col cols="12" class="mb-32">
      <busy />
    </b-col>

    <b-col cols="12" class="mb-32">
      <header-footer-custom />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sticky-headers />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sticky-columns />
    </b-col>

    <b-col cols="12" class="mb-32">
      <row-select />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sorting />
    </b-col>

    <b-col cols="12" class="mb-32">
      <complete />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Styling from "./Styling.vue";
import Responsive from "./Responsive.vue";
import Stacked from "./Stacked.vue";
import TableCaption from "./TableCaption.vue";
import Busy from "./Busy.vue";
import HeaderFooterCustom from "./HeaderFooterCustom.vue";
import StickyHeaders from "./StickyHeaders.vue";
import StickyColumns from "./StickyColumns.vue";
import RowSelect from "./RowSelect.vue";
import Sorting from "./Sorting.vue";
import Complete from "./Complete.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Styling,
    Responsive,
    Stacked,
    TableCaption,
    Busy,
    HeaderFooterCustom,
    StickyHeaders,
    StickyColumns,
    RowSelect,
    Sorting,
    Complete,
  },
};
</script>
