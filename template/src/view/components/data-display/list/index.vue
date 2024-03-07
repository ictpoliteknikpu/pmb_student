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
            List Groups are a flexible and powerful component for displaying a
            series of content. List Group items can be modified to support just
            about any content within. They can also be used as navigation via
            various props.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <active />
    </b-col>

    <b-col cols="12" class="mb-32">
      <disabled />
    </b-col>

    <b-col cols="12" class="mb-32">
      <actionable />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variant />
    </b-col>

    <b-col cols="12" class="mb-32">
      <badges />
    </b-col>

    <b-col cols="12" class="mb-32">
      <cards />
    </b-col>

    <b-col cols="12" class="mb-32">
      <horizontal />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Active from "./Active.vue";
import Disabled from "./Disabled.vue";
import Actionable from "./Actionable.vue";
import Variant from "./Variant.vue";
import Badges from "./Badges.vue";
import Cards from "./Cards.vue";
import Horizontal from "./Horizontal.vue";
import Custom from "./Custom.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Active,
    Disabled,
    Actionable,
    Variant,
    Badges,
    Cards,
    Horizontal,
    Custom,
  },
};
</script>
