<template>
  <div id="app">
    <b-container fluid class="p-0">
      <!-- shared main nav -->
      <MainNav/>
      <b-container fluid class="p-5 mt-5">
        <!-- show this layout if you are on any page that is not the home page -->
        <!-- I don't know if this is the best use of v-if, but it is what I could think of to try  -->
        <!-- show this layout if you are on the home page -->
        <div v-if="home">
          <router-view/>
          <b-row>
            <b-col md="4" class="pt-5">
              <!-- featured art -->
              <FeaturedArt/>
            </b-col>
            <b-col md="4">
              <!-- latest blog post -->
              <LatestBlog/>
            </b-col>
            <b-col md="4">
              <!-- Upcoming Event -->
              <Events/>
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <b-row class="d-flex justify-content-between">
            <!-- main content -->
            <b-col class="col-12 col-sm-10 col-md-8 col-lg-6">
              <router-view/>
            </b-col>
            <!-- shared sidebar -->
            <b-col class="col-12 col-md-4 mt-3 mt-md-0">
              <!-- featured art -->
              <FeaturedArt/>
              <!-- latest blog post -->
              <LatestBlog/>
              <!-- Upcoming Event -->
              <Events/>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import MainNav from "./components/MainNav";
import FeaturedArt from "./components/FeaturedArt";
import LatestBlog from "./components/LatestBlog";
import Events from "./components/Events";
export default {
  name: 'App',
  components: {MainNav, FeaturedArt, LatestBlog, Events},
  computed:{
    home(){
      return this.$route.path ==='/'
    }
  }
}
</script>

<style>
</style>
