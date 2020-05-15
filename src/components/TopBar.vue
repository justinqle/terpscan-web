<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.mdAndUp"
    app
    elevation="1"
    color="white"
    light
  >
    <v-app-bar-nav-icon
      @click.stop="$emit('toggle-drawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title style="width: 210px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down">TerpScan</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="mdi-magnify"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-inbox</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" item>
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
        ></v-img>
      </v-avatar>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-menu-down</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style></style>
