<template>
  <div class="container">
    <h3 class="text-left mt-4">User List</h3>
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Website</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" @click="goToUserDetails(user.id)" class="cursor-pointer">
          <th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>
            <i><a :href="'https://'+user.website" target="_blank">{{user.website}}</a></i>
          </td>

          <td>
            <button @click.stop="goToAddPost(user.id)" class="btn btn-primary"> Add Post</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name:'User',
    props: {
      users:{
        type: Array,
      }
    },

    data() {
      return {
      }
    },

    computed: {
      ...mapGetters({
        // users: 'users'
      }),

      ...mapActions({
        selectUser: 'selectUser'
      }),

    },

    created(){
      console.log('created', this.users);
    },
    methods: {
      goToUserDetails(userId){
        this.$router.push({
          name: 'UserDetals',
            params: { id: userId }
        });
      },
      goToAddPost(userId){
        this.$router.push({
          name: 'AddPost',
            params: { id: userId }
        });
      }
    },
  }
</script>

<style lang="scss">
.cursor-pointer{
  cursor: pointer;
}
</style>