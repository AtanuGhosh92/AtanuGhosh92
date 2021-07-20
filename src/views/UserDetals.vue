<template>
    <div class="container">
        <div class="row">
            <PostCard v-for="post in posts" :post="post" :key="post.id" class="col-md-6 col-sm-12 p-3"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'Home',
  components: {
    PostCard
  },

  data() {
    return {
      posts: []
    }
  },

  created(){
    this.userId = this.$route.params.id;
    this.getUserDetails();
  },

  methods: {
    getUserDetails(){
      this.axios.get(`/posts?userId=${this.userId}`).then((response) => {
        console.log(response.data);
        this.posts = response.data;
      }); 
    }
  },
}
</script>
