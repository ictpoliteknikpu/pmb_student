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
            The Popover feature, which provides a tooltip-like behavior, can be
            easily applied to any interactive element via the
            <code>&lt;b-popover&gt;</code> component or
            <a
              href="https://bootstrap-vue.org/docs/directives/popover"
              target="_blank"
              >v-b-popover</a
            >
            directive.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title />

      <p class="hp-p1-body mb-0"></p>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <positioning />
    </b-col>

    <b-col cols="12" class="mb-32">
      <popover-variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <show-and-hide />
    </b-col>

    <b-col cols="12" class="mb-32">
      <open-and-close />
    </b-col>

    <b-col cols="12" class="mb-32">
      <start-open />
    </b-col>

    <b-col cols="12" class="mb-32">
      <disabling />
    </b-col>

    <b-col cols="12" class="mb-32">
      <advanced />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Positioning from "./Positioning.vue";
import PopoverVariants from "./PopoverVariants.vue";
import ShowAndHide from "./ShowAndHide.vue";
import OpenAndClose from "./OpenAndClose.vue";
import StartOpen from "./StartOpen.vue";
import Disabling from "./Disabling.vue";
import Advanced from "./Advanced.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Positioning,
    PopoverVariants,
    ShowAndHide,
    OpenAndClose,
    StartOpen,
    Disabling,
    Advanced,
  },
};
</script>
