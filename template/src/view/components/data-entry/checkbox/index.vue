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
            <code>&lt;b-form-checkbox-group&gt;</code> and
            <code>&lt;b-form-checkbox&gt;</code> use Bootstrap's custom checkbox
            input to replace the browser default checkbox input. It is built on
            top of semantic and accessible markup, so it is a solid replacement
            for the default checkbox input.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple />
    </b-col>

    <b-col cols="12" class="mb-32">
      <option-field-names />
    </b-col>

    <b-col cols="12" class="mb-32">
      <inline-and-stacked />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <checkbox-button />
    </b-col>

    <b-col cols="12" class="mb-32">
      <grouped-button />
    </b-col>

    <b-col cols="12" class="mb-32">
      <non-custom />
    </b-col>

    <b-col cols="12" class="mb-32">
      <validation />
    </b-col>

    <b-col cols="12" class="mb-32">
      <indeterminate />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Multiple from "./Multiple.vue";
import OptionFieldNames from "./OptionFieldNames.vue";
import InlineAndStacked from "./InlineAndStacked.vue";
import Sizing from "./Sizing.vue";
import CheckboxButton from "./CheckboxButton.vue";
import GroupedButton from "./GroupedButton.vue";
import NonCustom from "./NonCustom.vue";
import Validation from "./Validation.vue";
import Indeterminate from "./Indeterminate.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Multiple,
    OptionFieldNames,
    InlineAndStacked,
    Sizing,
    CheckboxButton,
    GroupedButton,
    NonCustom,
    Validation,
    Indeterminate,
  },
};
</script>
