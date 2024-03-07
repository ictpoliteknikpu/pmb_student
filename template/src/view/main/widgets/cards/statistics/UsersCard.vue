<template>
  <b-card class="hp-card-1" body-class="p-16 d-flex align-items-center">
    <b-row align-v="center" class="flex-shrink-1 w-100 mx-0">
      <b-col style="width: 106px" class="px-0">
        <div
          class="h-100 hp-bg-warning-4 hp-bg-color-dark-90 d-flex align-items-center justify-content-center"
          style="border-radius: 15px"
        >
          <apexchart
            type="radialBar"
            height="80"
            legend="legend"
            :options="options"
            :series="series"
          ></apexchart>
        </div>
      </b-col>

      <b-col class="pr-0">
        <h3 class="mb-0 font-weight-semibold">43,046</h3>
        <p class="hp-p1-body mb-0">Active Users</p>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [40],
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
            top: -16,
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
                color: "#FFC700",
                fontWeight: 500,
                offsetY: -11,
              },
              total: {
                show: true,
                fontSize: "12px",
                label: "",
                formatter: function (w) {
                  return "%" + 40;
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
        colors: ["#FFD252"],
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
