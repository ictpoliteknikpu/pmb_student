<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
const LayoutVertical = () => import("@/layouts/VerticalLayout.vue");
const LayoutHorizontal = () => import("@/layouts/HorizontalLayout.vue");
const LayoutFull = () => import("@/layouts/FullLayout.vue");

export default {
  data() {
    return {
      theme: this.$store.state.themeConfig.theme,
      direction: this.$store.state.themeConfig.direction,
      contentWidth: this.$store.state.themeConfig.contentWidth,
      vertical:
        this.$store.state.themeConfig.layout == "vertical" ? true : false,
      verticalMini: this.$store.state.themeConfig.sidebarCollapsed,
      verticalCollapsed: this.$store.state.themeConfig.sidebarCollapseButton,
      horizontal:
        this.$store.state.themeConfig.layout == "horizontal" ? true : false,
      horizontalFull: this.$store.state.navigationFull,
      horizontalBg: this.$store.state.navigationBg,
    };
  },
  components: {
    LayoutVertical,
    LayoutHorizontal,
    LayoutFull,
  },
  computed: {
    layout() {
      if (this.$route.meta.layout === "horizontal") return "layout-horizontal";
      if (this.$route.meta.layout === "full") return "layout-full";
      return `layout-${this.contentLayoutType}`;
    },
    contentLayoutType() {
      return this.$store.state.themeConfig.layout;
    },
  },
  mounted() {
    // Horizontal Layout
    if (this.$route.meta.layout === "horizontal") {
      document.body.classList.add("horizontal-active");
    } else {
      document.body.classList.remove("horizontal-active");
    }

    // Theme
    if (this.$store.state.themeConfig.theme === "light") {
      this.themeLight();
    }

    if (this.$store.state.themeConfig.theme === "dark") {
      this.themeDark();
    }

    // Direction
    if (this.$store.state.themeConfig.direction === "ltr") {
      this.directionChange("ltr");
    }

    if (this.$store.state.themeConfig.direction === "rtl") {
      this.directionChange("rtl");
    }

    // Width
    if (this.$store.state.themeConfig.contentWidth === "full") {
      this.contentWidthChange("full");
    }

    if (this.$store.state.themeConfig.contentWidth === "boxed") {
      this.contentWidthChange("boxed");
    }

    // Layout
    if (this.$store.state.themeConfig.layout === "vertical") {
      this.layoutChange("vertical");

      if (this.$store.state.themeConfig.sidebarCollapsed) {
        this.layoutChange("vertical-mini");
      }
      if (!this.$store.state.themeConfig.sidebarCollapseButton) {
        this.layoutChange("vertical-collapsed");
      }
    }

    if (this.$store.state.themeConfig.layout === "horizontal") {
      this.layoutChange("horizontal");

      if (this.$store.state.themeConfig.navigationFull) {
        this.layoutChange("horizontal-full");
      }
      if (this.$store.state.themeConfig.navigationBg) {
        this.layoutChange("horizontal-bg");
      }
    }
  },
  methods: {
    // Theme
    themeLight() {
      this.$store.state.themeConfig.theme = "light";
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      localStorage.setItem("theme", "light");
    },
    themeDark() {
      this.$store.state.themeConfig.theme = "dark";
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
      localStorage.setItem("theme", "dark");
    },

    // Direction
    directionChange(direction) {
      if (direction == "ltr") {
        this.$store.state.themeConfig.direction = "ltr";
        document.documentElement.setAttribute("dir", "ltr");
      }

      if (direction == "rtl") {
        this.$store.state.themeConfig.direction = "rtl";
        document.documentElement.setAttribute("dir", "rtl");
      }
    },

    // Content Width
    contentWidthChange(width) {
      if (width == "full") {
        document.querySelector("body").classList.remove("content-width-boxed");
      }

      if (width == "boxed") {
        document.querySelector("body").classList.add("content-width-boxed");
      }
    },

    // Layout
    layoutChange(layout) {
      // Vertical
      if (layout == "vertical") {
        this.$store.state.themeConfig.layout = "vertical";

        document.body.classList.remove("collapsed-active");
        document.body.classList.remove("header-full");
        document.body.classList.remove("app-layout-bg");
      }

      if (layout == "vertical-mini") {
        document.body.classList.add("collapsed-active");
        this.$store.state.themeConfig.sidebarCollapsed = true;
        document.body.classList.remove("header-full");
        document.body.classList.remove("app-layout-bg");
      }

      if (layout == "vertical-collapsed") {
        this.$store.state.themeConfig.sidebarCollapseButton = false;
        document.body.classList.remove("header-full");
        document.body.classList.remove("app-layout-bg");
      }

      // Horizontal
      if (layout == "horizontal") {
        this.$store.state.themeConfig.layout = "horizontal";
        document.body.classList.remove("header-full");
        document.body.classList.remove("app-layout-bg");
        document.body.classList.remove("collapsed-active");
      }

      if (layout == "horizontal-full") {
        document.body.classList.add("header-full");
        document.body.classList.remove("app-layout-bg");
        document.body.classList.remove("collapsed-active");
      }

      if (layout == "horizontal-bg") {
        document.body.classList.add("header-full");
        document.body.classList.add("app-layout-bg");
        document.body.classList.remove("collapsed-active");
      }
    },
  },
};
</script>
