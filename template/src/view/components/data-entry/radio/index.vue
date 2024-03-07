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
            For cross browser consistency,
            <code>&lt;b-form-radio-group&gt;</code> and
            <code>&lt;b-form-radio&gt;</code> uses Bootstrap's custom radio
            input to replace the browser default radio input. It is built on top
            of semantic and accessible markup, so it is a solid replacement for
            the default radio input.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <grouped />
    </b-col>

    <b-col cols="12" class="mb-32">
      <option-field-names />
    </b-col>

    <b-col cols="12" class="mb-32">
      <inline-stacked />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <button-radios />
    </b-col>

    <b-col cols="12" class="mb-32">
      <feedback />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Grouped from "./Grouped.vue";
import OptionFieldNames from "./OptionFieldNames.vue";
import InlineStacked from "./InlineStacked.vue";
import Sizing from "./Sizing.vue";
import ButtonRadios from "./ButtonRadios.vue";
import Feedback from "./Feedback.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Grouped,
    OptionFieldNames,
    InlineStacked,
    Sizing,
    ButtonRadios,
    Feedback,
  },
};
</script>
