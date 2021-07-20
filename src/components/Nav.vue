<template>
  <div class="top-nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Logo</a>
        <button @click="goHome()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <router-link :to="{name: 'Home'}" class="nav-item nav-link active">Home <span class="sr-only">(current)</span></router-link>
            <!-- <a class="nav-item nav-link" href="#">Add User</a> -->
            <!-- <a class="nav-item nav-link" href="#">Add Post</a> -->
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  },

  methods: {
    goHome(){
        this.$router.push({
          name: 'Home'
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
