<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="secondary">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown text="Menu">
        <b-dropdown-item href="#">Blog</b-dropdown-item>
        <b-dropdown-item href="#">FAQ</b-dropdown-item>
        <b-dropdown-item href="#">Photos</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

    <b-navbar-brand><router-link :to="{ path: '/' }">Home</router-link></b-navbar-brand>
    <b-navbar-brand><router-link :to="{ path: '/about' }">About</router-link></b-navbar-brand>
    <b-navbar-brand><router-link :to="{ path: '/blog' }">Blog</router-link></b-navbar-brand>
    <b-navbar-brand href="#">FAQ</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" disabled>Travel Itineraries</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</div>

</template>
