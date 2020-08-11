<template lang="html">
  <b-navbar toggleable="md" type="dark" variant="danger" class="m-0">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="main-nav"></b-navbar-toggle>

    <b-collapse id="main-nav" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="Art">Art</b-nav-item>
        <b-nav-item to="Blog">Blog</b-nav-item>
        <b-nav-item to="Contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>

<style lang="css" scoped>
</style>
