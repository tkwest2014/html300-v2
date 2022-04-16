
<template>

  <div id="app">
    <h1>Traveling Tom</h1>

    <!-- Create NavBar For Site -->
    <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="Menu">
        <b-dropdown-item><router-link to="/" class="dropdown">Home</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/images" class="dropdown">Images</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/blog" class="dropdown">Blog</router-link></b-dropdown-item>
        <b-dropdown-item><router-link to="/faq" class="dropdown">FAQ</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

      <b-navbar-brand><router-link to="/" class="routerlink">Home</router-link></b-navbar-brand>
      <b-navbar-brand><router-link to="/images" class="routerlink">Images</router-link></b-navbar-brand>
      <b-navbar-brand><router-link to="/blog" class="routerlink">Blog</router-link></b-navbar-brand>
      <b-navbar-brand><router-link to="/faq" class="routerlink">FAQ</router-link></b-navbar-brand>


      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" disabled>Travel Itineraries</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

    </b-navbar>
    <router-view></router-view>
  </div>



</template>

<script>

//Default Code that came with Assignment
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/*Default Code that came with Assignment*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*Style NavBar*/
.routerlink{
  color: rgb(255, 255, 255)
}

.dropdown{
  color: rgb(0, 0, 0)
}

</style>
