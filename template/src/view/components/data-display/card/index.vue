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
            A card is a flexible and extensible content container. It includes
            options for headers and footers, a wide variety of content,
            contextual background colors, and powerful display options.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <titles-text-and-links />
    </b-col>

    <b-col cols="12" class="mb-32">
      <images />
    </b-col>

    <b-col cols="12" class="mb-32">
      <overlay />
    </b-col>

    <b-col cols="12" class="mb-32">
      <header-and-footer />
    </b-col>

    <b-col cols="12" class="mb-32">
      <kitchen />
    </b-col>

    <b-col cols="12" class="mb-32">
      <horizontal />
    </b-col>

    <b-col cols="12" class="mb-32">
      <background-variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <border-variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <nav-integration />
    </b-col>

    <b-col cols="12" class="mb-32">
      <card-groups />
    </b-col>

    <b-col cols="12" class="mb-32">
      <card-deck-groups />
    </b-col>

    <b-col cols="12" class="mb-32">
      <card-column-groups />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import TitlesTextAndLinks from "./TitlesTextAndLinks.vue";
import Images from "./Images.vue";
import Overlay from "./Overlay.vue";
import HeaderAndFooter from "./HeaderAndFooter.vue";
import Kitchen from "./Kitchen.vue";
import Horizontal from "./Horizontal.vue";
import BackgroundVariants from "./BackgroundVariants.vue";
import BorderVariants from "./BorderVariants.vue";
import NavIntegration from "./NavIntegration.vue";
import CardGroups from "./CardGroups.vue";
import CardDeckGroups from "./CardDeckGroups.vue";
import CardColumnGroups from "./CardColumnGroups.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    TitlesTextAndLinks,
    Images,
    Overlay,
    HeaderAndFooter,
    Kitchen,
    Horizontal,
    BackgroundVariants,
    BorderVariants,
    NavIntegration,
    CardGroups,
    CardDeckGroups,
    CardColumnGroups,
  },
};
</script>
