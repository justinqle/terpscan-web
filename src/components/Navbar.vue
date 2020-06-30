<template>
  <b-navbar shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <div id="brand">
          <div id="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2BkjifYFuSUOFkExtZB9Hw7IexmsOd957MQ&usqp=CAU"
              alt="TerpScan logo"
            />
          </div>
          <div>
            <h1 class="subtitle is-4">TerpScan</h1>
          </div>
        </div>
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
    padding: 0.5rem 5rem;
  }
}

@include touch {
  .navbar {
    padding: 0.25rem 0.5rem;
  }
}

.navbar-start {
  padding-left: 1.5rem;
}

a.navbar-item {
  border-radius: 10px;
  margin: 6px;
}
</style>