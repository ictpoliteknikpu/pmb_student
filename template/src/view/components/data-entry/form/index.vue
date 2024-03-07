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
            BootstrapVue form component and helper components that optionally
            support inline form styles and validation states. Pair them up with
            other BootstrapVue form control components for an easy customized,
            and responsive, layout with a consistent look and feel.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <introduction />
    </b-col>

    <b-col cols="12" class="mb-32">
      <inline />
    </b-col>

    <b-col cols="12" class="mb-32">
      <form-text />
    </b-col>

    <b-col cols="12" class="mb-32">
      <feedback />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Introduction from "./Introduction.vue";
import Inline from "./Inline.vue";
import FormText from "./FormText.vue";
import Feedback from "./Feedback.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Introduction,
    Inline,
    FormText,
    Feedback,
  },
};
</script>
