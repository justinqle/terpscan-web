<template>
  <div id="app">
    <Navbar :loggedIn="loggedIn" />
    <Landing v-if="loggedIn === false" />
    <section class="hero is-fullheight-with-navbar" v-if="loggedIn === true">
      <div class="hero-head">
        <div class="container has-text-centered">
          <h1 class="title">Hi Justin,</h1>
          <h2 class="subtitle">
            you have
            <strong class="has-text-primary">3</strong> packages ready for
            pickup.
          </h2>
        </div>
        <br />
        <div class="container">
          <Table />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Landing from "./components/Landing.vue";
import Table from "./components/Table.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Navbar,
    Landing,
    Table,
  },
  data() {
    return {
      loggedIn: null,
    };
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      axios
        .get("http://localhost:3000/")
        .then((response) => {
          if (response.data) {
            this.loggedIn = true;
          } else {
            this.loggedIn = false;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/layout/hero.sass";

/* CSS customization */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.hero-head {
  padding: 2rem 1.5rem 0rem 1.5rem;
}

@include desktop {
  section {
    margin-left: 8rem;
    margin-right: 8rem;
  }
}

/* SCSS customization */

$navbar-breakpoint: $tablet !default;
$navbar-height: 5rem !default;

// Set your colors
$primary: #e61b23;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
  ),
  "info": (
    $info,
    $info-invert,
  ),
  "success": (
    $success,
    $success-invert,
  ),
  "warning": (
    $warning,
    $warning-invert,
  ),
  "danger": (
    $danger,
    $danger-invert,
  ),
  "twitter": (
    $twitter,
    $twitter-invert,
  ),
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
