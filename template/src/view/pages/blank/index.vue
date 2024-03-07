<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <page-content
        :breadcrumbTitle="true"
        :breadcrumb="[
          {
            title: 'Pages',
          },
        ]"
      />
    </b-col>

    <b-col cols="12" class="mb-32"> </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
  },
};
</script>
