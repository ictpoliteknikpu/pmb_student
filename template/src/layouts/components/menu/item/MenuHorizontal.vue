<template>
  <ul class="d-flex flex-wrap align-items-center">
    <li class="px-6" :key="index" v-for="(item, index) in menuItems">
      <b-link
        :class="`px-12 py-4${
          path.split('/')[1] == item.header.toLowerCase() ? ' active' : ''
        }${
          (path.split('/')[1] == 'components' && item.header.toLowerCase() == 'user interface') ? ' active' : ''
        }`"
      >
        <span>{{ item.header }}</span>
        <i class="ri-arrow-down-s-line"></i>
      </b-link>

      <ul class="dropdown-menu">
        <li :key="index" v-for="(item, index) in item.children">
          <b-link
            v-if="item.children"
            :class="`dropdown-item${
              path.split('/')[2] == item.id ? ' active' : ''
            }`"
          >
            <span>
              <i v-if="item.icon" :class="`iconly-${item.icon}`"></i>
              <div
                class="submenu-item-icon"
                v-if="item.iconSvg"
                v-html="item.iconSvg"
              ></div>

              <span>{{ item.title }}</span>
            </span>

            <i class="dropdown-menu-arrow"></i>
          </b-link>

          <b-link
            :class="`${path == item.navLink ? 'active' : ''}`"
            v-else
            :to="item.navLink"
            :style="item.tag ? 'pointer-events: none;' : ''"
          >
            <span v-if="item.tag" class="justify-content-between w-100">
              <div class="d-flex align-items-center">
                <i v-if="item.icon" :class="`iconly-${item.icon}`"></i>
                <div
                  class="submenu-item-icon"
                  v-if="item.iconSvg"
                  v-html="item.iconSvg"
                ></div>

                <span style="white-space: nowrap">{{ item.title }}</span>
              </div>

              <b-badge
                v-if="item.tag"
                variant="none"
                class="hp-text-color-black-100 hp-bg-success-3 rounded-pill px-8 border-0 ml-32"
              >
                {{ item.tag }}
              </b-badge>
            </span>

            <span v-else>
              <i v-if="item.icon" :class="`iconly-${item.icon}`"></i>
              <div
                class="submenu-item-icon"
                v-if="item.iconSvg"
                v-html="item.iconSvg"
              ></div>

              <span>{{ item.title }}</span>
            </span>
          </b-link>

          <ul v-if="item.children" class="dropdown-menu">
            <li
              class="dropend"
              :key="index"
              v-for="(item, index) in item.children"
            >
              <b-link
                v-if="item.children"
                :class="`dropdown-item${
                  path.split('/')[3] == item.id ? ' active' : ''
                }`"
              >
                <span>{{ item.title }}</span>

                <i class="dropdown-menu-arrow"></i>
              </b-link>

              <b-link
                v-else-if="item.target"
                :href="item.navLink"
                :class="`${path == item.navLink ? ' active' : ''}`"
                :target="item.target"
              >
                <span>{{ item.title }}</span>
              </b-link>

              <b-link
                v-else
                :to="item.navLink"
                :class="`${path == item.navLink ? ' active' : ''}`"
              >
                <span>{{ item.title }}</span>
              </b-link>

              <ul v-if="item.children" class="dropdown-menu">
                <li :key="index" v-for="(item, index) in item.children">
                  <b-link
                    :to="item.navLink"
                    :class="`${path == item.navLink ? ' active' : ''}`"
                  >
                    <span>{{ item.title }}</span>
                  </b-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { BRow, BCol, BLink, BBadge } from "bootstrap-vue";

import navigation from "../../../../navigation";

export default {
  data() {
    return {
      path: "",
      menuItems: navigation,
    };
  },
  components: {
    BRow,
    BCol,
    BLink,
    BBadge,
  },
  watch: {
    $route() {
      this.getRoute();
    },
  },
  methods: {
    getRoute() {
      this.path = this.$route.path;
    },
  },
  created() {
    this.getRoute();
  },
};
</script>
