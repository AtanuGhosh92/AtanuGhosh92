<template>
  <div class="add-post container">
    <h4 class="p-5 ml-5 mr-5 text-left"> Add New Post</h4>
    <form @submit="onSubmit" class="pl-5 pr-5 ml-5 mr-5 text-left">
        <div class="form-group">
            <label for="postTitle">Title</label>
            <input v-model="post.title" type="text" class="form-control" id="postTitle" placeholder="Title" required>
        </div>
        <div class="form-group">
            <label for="description">Description: </label>
            <textarea v-model="post.body" class="form-control" id="description" rows="3" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPost',
  components: {
  },

  data() {
    return {

      post:{
          title:'',
          body:'',
          userId:'',
          id:'',
      }
    }
  },

  created(){
    this.post.userId = this.$route.params.id;
    // this.getUserDetails();
  },

  methods: {
    addPost(){
      this.axios.posts(`/post`, this.post).then((response) => {
        console.log(response.data);
        // this.posts = response.data;
      }); 
    },

    onSubmit(e) {
    //   alert(JSON.stringify(this.post, null ,2));
      e.preventDefault();
      this.axios.post(`/posts`, this.post).then((response) => {
        console.log(response.data);
        this.$router.push({
            name: 'UserDetals',
            params: { id: this.$route.params.id}
        });
      }); 
    }
  },
}
</script>
