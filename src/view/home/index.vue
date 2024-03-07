<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <page-title />
    </b-col>

    <b-col cols="12" class="mb-32">
      <b-row>
        <b-col cols="12" class="mb-32">
          <b-card class="hp-border-color-dark-80">
            <h4>Let's get started 🚀</h4>

            <b-row>
              <b-col cols="12" md="6">
                <p class="hp-p1-body">
                  Are you ready? Please read our
                  <a
                    class="text-primary hp-text-color-dark-primary-2 hp-hover-text-color-primary-3 hp-hover-text-color-dark-0 hp-transition"
                    href="https://hypeople-studio.gitbook.io/yohp-admin-template/"
                    target="_blank"
                    >Documentation</a
                  >
                  to understand the technical details of the project to use the
                  template.
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>

        <b-col cols="12">
          <b-card class="hp-border-color-dark-80">
            <h4>Would you like to browse the components? 👀</h4>

            <b-row>
              <b-col cols="12" md="6">
                <p class="hp-p1-body">
                  Everything is in the details. So why wouldn't you want to take
                  a look at the
                  <a
                    class="text-primary hp-text-color-dark-primary-2 hp-hover-text-color-primary-3 hp-hover-text-color-dark-0 hp-transition"
                    href="https://yoda.hypeople.studio/yohp-admin-template/react/components/components-page"
                    target="_blank"
                    >components</a
                  >
                  from the preview page? Enjoy!
                </p>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    PageTitle,
  },
};
</script>
