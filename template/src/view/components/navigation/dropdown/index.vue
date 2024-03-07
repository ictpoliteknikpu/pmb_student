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
            title: 'Navigation',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            Dropdowns are toggleable, contextual overlays for displaying lists
            of links and actions in a dropdown menu format.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <button-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <menu-alignment />
    </b-col>

    <b-col cols="12" class="mb-32">
      <drop />
    </b-col>

    <b-col cols="12" class="mb-32">
      <offset />
    </b-col>

    <b-col cols="12" class="mb-32">
      <split />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <block />
    </b-col>

    <b-col cols="12" class="mb-32">
      <hidden />
    </b-col>

    <b-col cols="12" class="mb-32">
      <dropdown-form />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import ButtonContent from "./ButtonContent.vue";
import MenuAlignment from "./MenuAlignment.vue";
import Drop from "./Drop.vue";
import Offset from "./Offset.vue";
import Split from "./Split.vue";
import Sizing from "./Sizing.vue";
import Variants from "./Variants.vue";
import Block from "./Block.vue";
import Hidden from "./Hidden.vue";
import DropdownForm from "./DropdownForm.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    ButtonContent,
    MenuAlignment,
    Drop,
    Offset,
    Split,
    Sizing,
    Variants,
    Block,
    Hidden,
    DropdownForm,
  },
};
</script>
