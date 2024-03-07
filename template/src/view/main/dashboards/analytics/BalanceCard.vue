<template>
  <b-row>
    <b-col cols="12" class="mb-18">
      <b-row align-v="center" align-h="between">
        <b-col class="hp-flex-none w-auto">
          <span class="d-block hp-p1-body">Balance</span>
          <span
            class="d-block mt-4 h3 font-weight-semibold hp-text-color-black-bg hp-text-color-dark-0"
          >
            $12.389
          </span>
        </b-col>

        <b-col class="hp-flex-none w-auto">
          <span class="hp-p1-body d-block">Past 30 Days</span>
        </b-col>
      </b-row>
    </b-col>

    <b-col cols="12" class="overflow-hidden">
      <apexchart
        type="bar"
        legend="legend"
        height="250"
        :options="options"
        :series="series"
      ></apexchart>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

export default {
  data() {
    return {
      series: [
        {
          name: "Balance",
          data: [
            28877, 29334, 33233, 36439, 32675, 32333, 33457, 38345, 36783,
            39457, 22459, 39840,
          ],
        },
      ],
      options: {
        chart: {
          fontFamily: "Manrope, sans-serif",
          type: "bar",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        labels: {
          style: {
            fontSize: "14px",
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#B2BEC3",
          opacity: 1,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 2,
            columnWidth: "60%",
            colors: {
              backgroundBarColors: ["#B2BEC3"],
              backgroundBarOpacity: 0.2,
            },
          },
        },
        fill: {
          opacity: 1,
          colors: [
            this.$store.state.themeConfig.theme === "light"
              ? "#2D3436"
              : "#ffffff",
          ],
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        xaxis: {
          axisTicks: {
            show: false,
            borderType: "solid",
            height: 6,
            offsetX: 0,
            offsetY: 0,
          },
          tickPlacement: "between",
          labels: {
            style: {
              colors: [
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
                "#B2BEC3",
              ],
              fontSize: "12px",
            },
          },
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        legend: {
          horizontalAlign: "right",
          offsetX: 40,
          position: "top",
          markers: {
            radius: 12,
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#636E72"],
              fontSize: "14px",
            },
            formatter: (value) => {
              return value == "0" ? value / 1000 : value / 1000 + "K";
            },
          },
          min: 0,
          max: 60000,
          tickAmount: 4,
        },
      },
    };
  },
  components: {
    BRow,
    BCol,
  },
};
</script>
