<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <page-content
        :breadcrumbTitle="true"
        :breadcrumb="[
          {
            title: 'Main',
          },
          {
            title: 'Widgets',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            We used Apex Charts and customized for Yoda
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <line-chart />
    </b-col>

    <b-col cols="12" class="mb-32">
      <column-chart />
    </b-col>

    <b-col cols="12" class="mb-32">
      <area-chart />
    </b-col>

    <b-col cols="12" class="mb-32">
      <scatter-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <bar-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <heatmap-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <radar-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <candlestick-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <donut-chart />
    </b-col>

    <b-col cols="12" xl="6" class="mb-32">
      <radialbar-chart />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import LineChart from "./LineChart.vue";
import ColumnChart from "./ColumnChart.vue";
import AreaChart from "./AreaChart.vue";
import ScatterChart from "./ScatterChart.vue";
import BarChart from "./BarChart.vue";
import HeatmapChart from "./HeatmapChart.vue";
import RadarChart from "./RadarChart.vue";
import CandlestickChart from "./CandlestickChart.vue";
import DonutChart from "./DonutChart.vue";
import RadialbarChart from "./RadialbarChart.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    LineChart,
    ColumnChart,
    AreaChart,
    ScatterChart,
    BarChart,
    HeatmapChart,
    RadarChart,
    CandlestickChart,
    DonutChart,
    RadialbarChart,
  },
};
</script>
