<template>
  <b-row>
    <b-col cols="12" class="mb-48">
      <page-content
        :breadcrumb="[
          {
            title: 'Components',
            link: '/components/components-page',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            Yoda Components has all ant components helps you create beautiful
            apps.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col class="px-0 px-sm-48 px-md-80 mb-48" cols="12">
      <slick ref="slick" :options="slickOptions">
        <div
          :key="index"
          v-for="(item, index) in categorys"
          class="px-4"
          @click="changeTab(index)"
        >
          <div
            :class="`${
              tabIndex === index
                ? 'hp-bg-black-bg hp-text-color-black-0'
                : 'hp-bg-black-40 hp-bg-dark-70 hp-text-color-black-bg hp-hover-bg-black-bg hp-hover-text-color-black-0'
            } d-inline-block hp-cursor-pointer mx-6 px-16 py-8 text-center h5 font-weight-normal mb-0 rounded-pill hp-transition`"
          >
            {{ item.title }}
          </div>
        </div>
      </slick>
    </b-col>

    <b-col class="px-18 px-sm-48 px-md-96 mb-48" cols="12">
      <b-tabs v-model="tabIndex" nav-class="d-none">
        <b-tab :key="0">
          <b-row>
            <template v-for="component in components">
              <b-col
                cols="12"
                md="6"
                :key="index + '-all-' + component.title"
                v-for="(item, index) in component.list"
                class="px-12 mb-24"
              >
                <b-card
                  class="border-0 hp-components-item hp-bg-black-10 hp-bg-dark-100"
                  style="border-radius: 17px"
                >
                  <b-link :to="item.link">
                    <div
                      class="border hp-border-color-dark-70 hp-bg-black-10 hp-bg-dark-100 mb-12 d-flex align-items-center justify-content-center hp-components-item-img"
                      style="border-radius: 17px; min-height: 140px"
                    >
                      <img
                        :src="require(`@/assets/img/components/${item.img}`)"
                        :alt="item.title"
                      />
                    </div>

                    <h4
                      class="hp-components-item-title mb-8 hp-text-color-black-bg hp-text-color-dark-0"
                    >
                      {{ item.title }}
                    </h4>

                    <p
                      class="mb-0 hp-caption font-weight-normal hp-text-color-black-80 hp-text-color-dark-30"
                    >
                      {{ item.subTitle }}
                    </p>
                  </b-link>
                </b-card>
              </b-col>
            </template>
          </b-row>
        </b-tab>

        <b-tab :key="index + 1" v-for="(item, index) in components">
          <b-row>
            <b-col
              cols="12"
              md="6"
              :key="index"
              v-for="(item, index) in item.list"
              class="px-12 mb-24"
            >
              <b-card
                class="border-0 hp-components-item hp-bg-black-10 hp-bg-dark-100"
                style="border-radius: 17px"
              >
                <b-link :to="item.link">
                  <div
                    class="border hp-border-color-dark-70 hp-bg-black-10 hp-bg-dark-100 mb-12 d-flex align-items-center justify-content-center hp-components-item-img"
                    style="border-radius: 17px; min-height: 140px"
                  >
                    <img
                      :src="require(`@/assets/img/components/${item.img}`)"
                      :alt="item.title"
                    />
                  </div>

                  <h4
                    class="hp-components-item-title mb-8 hp-text-color-black-bg hp-text-color-dark-0"
                  >
                    {{ item.title }}
                  </h4>

                  <p
                    class="mb-0 hp-caption font-weight-normal hp-text-color-black-80 hp-text-color-dark-30"
                  >
                    {{ item.subTitle }}
                  </p>
                </b-link>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard, BLink } from "bootstrap-vue";

import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";

export default {
  data() {
    return {
      slickOptions: {
        speed: 800,
        variableWidth: true,
        infinite: false,
        arrows: false,
      },
      tabIndex: 0,
      categorys: [
        {
          category: "all",
          title: "All Components",
        },
        {
          category: "general",
          title: "General",
        },
        {
          category: "navigation",
          title: "Navigation",
        },
        {
          category: "data-entry",
          title: "Data Entry",
        },
        {
          category: "data-display",
          title: "Data Display",
        },
        {
          category: "feedback",
          title: "Feedback",
        },
      ],
      components: [
        {
          category: "general",
          list: [
            {
              img: "typography.svg",
              title: "Style Guide",
              subTitle: "Yoda UI Style with typography and colors",
              link: "/components/general/style-guide",
            },
            {
              img: "buttons.svg",
              title: "Buttons",
              subTitle: "To trigger an operation",
              link: "/components/general/buttons",
            },
            {
              img: "icon.svg",
              title: "Remix Icons",
              subTitle: "Remix Icon for Yoda Admin Template",
              link: "/components/general/remix-icons",
            },
            {
              img: "icon.svg",
              title: "Iconly Icons",
              subTitle: "Iconly Icon for Yoda Admin Template",
              link: "/components/general/iconly-icons",
            },
          ],
        },
        {
          category: "navigation",
          list: [
            {
              img: "breadcrumb.svg",
              title: "Breadcrumb",
              subTitle: "Examples of bootstrap breadcrumb",
              link: "/components/navigation/breadcrumb",
            },
            {
              img: "dropdown.svg",
              title: "Dropdown",
              subTitle: "Examples of bootstrap dropdown",
              link: "/components/navigation/dropdown",
            },
            {
              img: "menu.svg",
              title: "Menu",
              subTitle: "Examples of bootstrap menu",
              link: "/components/navigation/menu",
            },
            {
              img: "pagination.svg",
              title: "Pagination",
              subTitle: "Examples of bootstrap pagination",
              link: "/components/navigation/pagination",
            },
          ],
        },
        {
          category: "data-entry",
          list: [
            {
              img: "checkbox.svg",
              title: "Checkbox",
              subTitle: "Examples of bootstrap checkbox",
              link: "/components/data-entry/checkbox",
            },
            {
              img: "form.svg",
              title: "Form",
              subTitle: "Examples of bootstrap form",
              link: "/components/data-entry/form",
            },
            {
              img: "input.svg",
              title: "Input",
              subTitle: "Examples of bootstrap input",
              link: "/components/data-entry/input",
            },
            {
              img: "input-number.svg",
              title: "Input Number",
              subTitle: "Examples of bootstrap input number",
              link: "/components/data-entry/input-number",
            },
            {
              img: "input.svg",
              title: "Input Group",
              subTitle: "Examples of bootstrap input group",
              link: "/components/data-entry/input-group",
            },
            {
              img: "radio.svg",
              title: "Radio",
              subTitle: "Examples of bootstrap radio",
              link: "/components/data-entry/radio",
            },
            {
              img: "select.svg",
              title: "Select",
              subTitle: "Examples of bootstrap select",
              link: "/components/data-entry/select",
            },
            {
              img: "slider.svg",
              title: "Slider",
              subTitle: "Examples of bootstrap slider",
              link: "/components/data-entry/slider",
            },
            {
              img: "switch.svg",
              title: "Switch",
              subTitle: "Examples of bootstrap switch",
              link: "/components/data-entry/switch",
            },
          ],
        },
        {
          category: "data-display",
          list: [
            {
              img: "avatar.svg",
              title: "Avatar",
              subTitle: "Examples of bootstrap avatar",
              link: "/components/data-display/avatar",
            },
            {
              img: "badge.svg",
              title: "Badge",
              subTitle: "Examples of bootstrap badge",
              link: "/components/data-display/badge",
            },
            {
              img: "card.svg",
              title: "Card",
              subTitle: "Examples of bootstrap card",
              link: "/components/data-display/card",
            },
            {
              img: "carousel.svg",
              title: "Carousel",
              subTitle: "Examples of bootstrap carousel",
              link: "/components/data-display/carousel",
            },
            {
              img: "collapse.svg",
              title: "Accordion",
              subTitle: "Examples of bootstrap accordion",
              link: "/components/data-display/accordion",
            },
            {
              img: "collapse.svg",
              title: "Collapse",
              subTitle: "Examples of bootstrap collapse",
              link: "/components/data-display/collapse",
            },
            {
              img: "list.svg",
              title: "List",
              subTitle: "Examples of bootstrap list",
              link: "/components/data-display/list",
            },
            {
              img: "popover.svg",
              title: "Popover",
              subTitle: "Examples of bootstrap popover",
              link: "/components/data-display/popover",
            },
            {
              img: "table.svg",
              title: "Table",
              subTitle: "Examples of bootstrap table",
              link: "/components/data-display/table",
            },
            {
              img: "tabs.svg",
              title: "Tabs",
              subTitle: "Examples of bootstrap tabs",
              link: "/components/data-display/tabs",
            },
            {
              img: "tooltip.svg",
              title: "Tooltip",
              subTitle: "Examples of bootstrap tooltip",
              link: "/components/data-display/tooltip",
            },
          ],
        },
        {
          category: "feedback",
          list: [
            {
              img: "alert.svg",
              title: "Alert",
              subTitle: "Examples of bootstrap alert",
              link: "/components/feedback/alert",
            },
            {
              img: "drawer.svg",
              title: "Drawer",
              subTitle: "Examples of bootstrap drawer",
              link: "/components/feedback/drawer",
            },
            {
              img: "modal.svg",
              title: "Modal",
              subTitle: "Examples of bootstrap modal",
              link: "/components/feedback/modal",
            },
            {
              img: "notification.svg",
              title: "Notification",
              subTitle: "Examples of bootstrap notification",
              link: "/components/feedback/notification",
            },
            {
              img: "progress.svg",
              title: "Progress",
              subTitle: "Examples of bootstrap progress",
              link: "/components/feedback/progress",
            },
            {
              img: "spinner.svg",
              title: "Spinner",
              subTitle: "Examples of bootstrap spinner",
              link: "/components/feedback/spinner",
            },
          ],
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
    BLink,
    Slick,
    PageContent,
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    },
  },
};
</script>
