<template>
  <div id="app">
    <Navbar />
    <section class="section">
      <div class="container">
        <h1 class="title">Hi Justin,</h1>
        <h2 class="subtitle">
          you have
          <strong>3</strong> packages ready for pickup.
        </h2>
      </div>
      <br />
      <div class="container">
        <Table />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Table from "./components/Table.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Table
  }
};

CloudKit.configure({
  containers: [
    {
      containerIdentifier: process.env.VUE_APP_CONTAINER_ID,
      apiTokenAuth: {
        apiToken: process.env.VUE_APP_API_TOKEN
      },
      environment: "development"
    }
  ]
});

var container = CloudKit.getDefaultContainer();
var publicDatabase = container.publicCloudDatabase;

var query = {
  recordType: "CD_Mailbox",
  filterBy: [
    {
      comparator: "EQUALS",
      fieldName: "CD_buildingCode",
      fieldValue: { value: "IRB" }
    }
  ]
};

publicDatabase
  .performQuery(query)
  .then(response => {
    if (response.hasErrors) {
      // Insert error handling
      throw response.errors[0];
    } else {
      // Insert successfully fetched record code
      response.records.forEach(record => {
        console.log(record);
        console.log(record.fields.CD_firstName.value);
        console.log(record.fields.CD_lastName.value);
      });
    }
  })
  .catch(err => {
    console.error(err);
  });
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/layout/hero.sass";

// Set your colors
$primary: #ff4757;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

$navbar-item-active-color: #ff4757 !default;
$navbar-breakpoint: $tablet !default;

// $section-padding: 3rem 12rem !default;
@include desktop {
  section {
    margin-left: 12rem;
    margin-right: 12rem;
  }
}

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
