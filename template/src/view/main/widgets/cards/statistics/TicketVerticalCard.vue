<template>
  <b-card class="hp-card-2 text-center" body-class="p-16">
    <div
      class="bg-secondary-4 hp-bg-color-dark-90 d-flex align-items-center justify-content-center mb-18"
      style="border-radius: 15px;"
    >
      <apexchart
        type="radialBar"
        height="92"
        legend="legend"
        :options="options"
        :series="series"
      ></apexchart>
    </div>

    <h3 class="mb-0 font-weight-semibold">2,345</h3>
    <p class="hp-p1-body mb-0 text-black-80 hp-text-color-dark-50">
      Ticket Closed
    </p>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [76],
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
            left: -24,
            right: -24,
            top: -12,
            bottom: -16,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
              size: "45%",
            },
            track: {
              show: true,
              background: "#ffffff",
              strokeWidth: "100%",
              opacity: 1,
              margin: 0,
            },
            dataLabels: {
              show: true,
              value: {
                fontSize: "12px",
                color: "#FF455E",
                fontWeight: 500,
                offsetY: -11,
              },
              total: {
                show: true,
                fontSize: "12px",
                label: "",
                formatter: function (w) {
                  return "%" + 76;
                },
              },
            },
          },
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#FF455E"],
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
