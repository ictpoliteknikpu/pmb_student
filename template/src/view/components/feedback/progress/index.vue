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
            title: 'Feedback',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            Use our custom progress component for displaying simple or complex
            progress bars, featuring support for horizontally stacked bars,
            animated backgrounds, and text labels.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <labels />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom-label />
    </b-col>

    <b-col cols="12" class="mb-32">
      <width />
    </b-col>

    <b-col cols="12" class="mb-32">
      <height />
    </b-col>

    <b-col cols="12" class="mb-32">
      <solid-background-color />
    </b-col>

    <b-col cols="12" class="mb-32">
      <striped-backgrounds />
    </b-col>

    <b-col cols="12" class="mb-32">
      <animated-backgrounds />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple-bars />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Labels from "./Labels.vue";
import CustomLabel from "./CustomLabel.vue";
import Width from "./Width.vue";
import Height from "./Height.vue";
import SolidBackgroundColor from "./SolidBackgroundColor.vue";
import StripedBackgrounds from "./StripedBackgrounds.vue";
import AnimatedBackgrounds from "./AnimatedBackgrounds.vue";
import MultipleBars from "./MultipleBars.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Labels,
    CustomLabel,
    Width,
    Height,
    SolidBackgroundColor,
    StripedBackgrounds,
    AnimatedBackgrounds,
    MultipleBars,
  },
};
</script>
