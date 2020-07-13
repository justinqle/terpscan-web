<template>
  <div>
    <b-table
      :data="data"
      :loading="isLoading"
      default-sort="date"
      default-sort-direction="desc"
      paginated
    >
      <template slot-scope="props">
        <b-table-column field="tracking_number" label="Tracking Number">
          {{ props.row.tracking_number }}
        </b-table-column>
        <b-table-column field="carrier" label="Carrier">
          {{ props.row.carrier }}
        </b-table-column>
        <b-table-column field="date" label="Date Received" sortable centered>
          {{ new Date(props.row.date).toLocaleString() }}
        </b-table-column>
      </template>
      <template slot="empty" v-if="!isLoading">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="sad-cry" size="is-large"> </b-icon>
            </p>
            <p>No packages available.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      isLoading: true,
    };
  },
  created() {
    this.getPackages();
  },
  methods: {
    getPackages() {
      axios
        .get("http://localhost:3000/packages")
        .then((response) => {
          if (response.data) {
            this.data = response.data;
          }
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>
