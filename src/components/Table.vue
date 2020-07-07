<template>
  <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          field: "tracking_number",
          label: "Tracking Number"
        },
        {
          field: "carrier",
          label: "Carrier"
        },
        {
          field: "date",
          label: "Date",
          centered: true
        }
      ]
    };
  },
  created() {
    this.getPackages();
  },
  methods: {
    getPackages() {
      axios
        .get("http://localhost:3000/packages")
        .then(response => {
          if (response.data) {
            this.data = response.data;
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>