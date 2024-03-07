<template>
  <b-card class="hp-card-1" body-class="p-16 d-flex align-items-center">
    <b-row align-v="center" class="flex-shrink-1 w-100 mx-0">
      <b-col style="width: 106px" class="px-0">
        <div
          class="h-100 hp-bg-success-4 hp-bg-color-dark-90 d-flex align-items-center justify-content-center"
          style="border-radius: 15px"
        >
          <apexchart
            type="bar"
            height="80"
            legend="legend"
            :options="options"
            :series="series"
          ></apexchart>
        </div>
      </b-col>

      <b-col class="pr-0">
        <h3 class="mb-0 font-weight-semibold">43,046</h3>
        <p class="hp-p1-body mb-0">New Subscribe</p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [
        {
          name: "Earning",
          data: [50, 70, 100, 60],
        },
      ],
      options: {
        chart: {
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 10,
            top: -10,
            bottom: -10,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "65%",
            borderRadius: 2,
            colors: {
              backgroundBarColors: [],
              backgroundBarRadius: 5,
            },
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#00F7BF"],
        xaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          max: 100,
        },
        tooltip: {
          x: {
            show: false,
          },
        },
      },
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
