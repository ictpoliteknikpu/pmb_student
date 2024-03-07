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
            title: 'Data Entry',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            Inputs with type <code>range</code> render using Bootstrap v4's
            <code>.custom-range</code> class. The track (the background) and
            thumb (the value) are both styled to appear the same across
            browsers. <br /><br />
            Range inputs have implicit values for <code>min</code> and
            <code>max</code> of <code>0</code> and
            <code>100</code> respectively. You may specify new values for those
            using the <code>min</code> and
            <code>max</code>
            props.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <step />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Step from "./Step.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Step,
  },
};
</script>
