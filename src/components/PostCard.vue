<template>
<div class="p-2">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-left">
                <b>Title: </b>
                {{post.title}}
            </h5>
            <p class="card-text text-left">
                <b>Description: </b>
                {{post.body}}
            </p>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    name:'PostCard',
    props: {
      post:{
        type: Object,
      }
    },

    data() {
      return {
      }
    },

    created(){
      console.log('created', this.post);
    },
    methods: {
      
    },


  }
</script>

<style lang="scss">
.cursor-pointer{
  cursor: pointer;
}
</style>