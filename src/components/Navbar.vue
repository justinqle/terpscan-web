<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <div id="brand">
          <div id="logo">
            <img src="@/assets/icon.png" alt="TerpScan icon" />
          </div>
          <div>
            <h1 class="title">terpscan</h1>
          </div>
        </div>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="#" active>Home</b-navbar-item>
      <b-navbar-item href="#">About</b-navbar-item>
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-button
            v-if="loggedIn === false"
            tag="a"
            href="http://localhost:3000/login"
            type="is-primary"
            >Log in</b-button
          >
          <b-button
            v-if="loggedIn === true"
            tag="a"
            href="http://localhost:3000/logout"
            type="is-primary"
            outlined
            >Log out</b-button
          >
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  props: {
    loggedIn: Boolean,
  },
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

#brand {
  display: flex;
  justify-content: center;
}

#logo {
  margin-right: 0.5rem;
}

router-link {
  cursor: pointer;
}

@include desktop {
  .navbar {
    padding-left: 10%;
    padding-right: 10%;
  }
}

@include touch {
  .navbar {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
