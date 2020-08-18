<template>
  <div>
    <b-row>
      <b-col class="col-12">
        <h1>{{ msg }}</h1>
        <p>A fun site to play with the art of The Met!</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Met Art!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
