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
            Create various type inputs such as: <code>text</code>,
            <code>password</code>, <code>number</code>, <code>url</code>,
            <code>email</code>, <code>search</code>, <code>date</code> and more.
            You can use <code>&lt;input&gt;</code> tag.
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
      <control-sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <contextual />
    </b-col>

    <b-col cols="12" class="mb-32">
      <contextual-example />
    </b-col>

    <b-col cols="12" class="mb-32">
      <formatter />
    </b-col>

    <b-col cols="12" class="mb-32">
      <datalist-support />
    </b-col>

    <b-col cols="12" class="mb-32">
      <debounce-support />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Type from "./Type.vue";
import ControlSizing from "./ControlSizing.vue";
import Contextual from "./Contextual.vue";
import ContextualExample from "./ContextualExample.vue";
import Formatter from "./Formatter.vue";
import DatalistSupport from "./DatalistSupport.vue";
import DebounceSupport from "./DebounceSupport.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Type,
    ControlSizing,
    Contextual,
    ContextualExample,
    Formatter,
    DatalistSupport,
    DebounceSupport,
  },
};
</script>
