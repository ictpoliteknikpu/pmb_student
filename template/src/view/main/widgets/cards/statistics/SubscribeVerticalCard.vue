<template>
  <b-card class="hp-card-2 text-center" body-class="p-16">
    <div
      class="bg-success-4 hp-bg-color-dark-90 d-flex align-items-center justify-content-center mb-18"
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

    <h3 class="mb-0 font-weight-semibold">1,346</h3>
    <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-50">
      Active Subscribe
    </p>
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
            left: 8,
            right: 15,
            top: -10,
            bottom: -10,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "60%",
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
