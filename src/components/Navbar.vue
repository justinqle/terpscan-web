<template>
  <b-navbar spaced shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2BkjifYFuSUOFkExtZB9Hw7IexmsOd957MQ&usqp=CAU"
          alt="TerpScan logo"
        />
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h1 class="subtitle is-4">TerpScan</h1>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#" active>Home</b-navbar-item>
      <b-navbar-item href="#">About</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Log in</strong>
          </a>
          <!-- <a class="button is-light">Log in</a> -->
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style>
</style>