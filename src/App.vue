<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes[theme].background }"
  >
    <SideBar ref="drawer" />
    <TopBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <v-content>
      <v-container fluid px-10>
        <v-row align="start" justify="center">
          <v-col>
            <h1>Packages</h1>
          </v-col>
        </v-row>
        <v-row align="start" justify="center">
          <v-col>
            <PackagesTable />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
import PackagesTable from "./components/PackagesTable.vue";
export default {
  name: "App",
  components: {
    SideBar,
    TopBar,
    PackagesTable,
  },
  computed: {
    theme() {
      return this.$vuetify.theme.light ? "light" : "dark";
    },
  },
  props: {
    source: String,
  },
  data: () => ({}),
};
</script>
