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
            Use Bootstrap's custom <code>b-button</code> component for actions
            in forms, dialogs, and more. Includes support for a handful of
            contextual variations, sizes, states, and more.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <type />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <solid-color />
    </b-col>

    <b-col cols="12" class="mb-32">
      <outline-color />
    </b-col>

    <b-col cols="12" class="mb-32">
      <dashed-color />
    </b-col>

    <b-col cols="12" class="mb-32">
      <ghost-buttons />
    </b-col>

    <b-col cols="12" class="mb-32">
      <text-buttons />
    </b-col>

    <b-col cols="12" class="mb-32">
      <link-buttons />
    </b-col>

    <b-col cols="12" class="mb-32">
      <pill />
    </b-col>

    <b-col cols="12" class="mb-32">
      <squared />
    </b-col>

    <b-col cols="12" class="mb-32">
      <disabled />
    </b-col>

    <b-col cols="12" class="mb-32">
      <pressed-toggling />
    </b-col>

    <b-col cols="12">
      <b-row>
        <b-col cols="12" lg="6" class="mb-32">
          <icon-buttons />
        </b-col>

        <b-col cols="12" lg="6" class="mb-32">
          <icon-only />
        </b-col>
      </b-row>
    </b-col>

    <b-col cols="12" class="mb-32">
      <gradient />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Type from "./Type.vue";
import Sizing from "./Sizing.vue";
import SolidColor from "./SolidColor.vue";
import OutlineColor from "./OutlineColor.vue";
import LinkButtons from "./LinkButtons.vue";
import Block from "./Block.vue";
import Pill from "./Pill.vue";
import Squared from "./Squared.vue";
import Disabled from "./Disabled.vue";
import PressedToggling from "./PressedToggling.vue";
import Gradient from "./Gradient.vue";
import IconButtons from "./IconButtons.vue";
import IconOnly from "./IconOnly.vue";
import DashedColor from "./DashedColor.vue";
import GhostButtons from "./GhostButtons.vue";
import TextButtons from "./TextButtons.vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    PageContent,
    Basic,
    Type,
    Sizing,
    SolidColor,
    OutlineColor,
    LinkButtons,
    Block,
    Pill,
    Squared,
    Disabled,
    PressedToggling,
    Gradient,
    IconButtons,
    IconOnly,
    DashedColor,
    GhostButtons,
    TextButtons,
  },
};
</script>
