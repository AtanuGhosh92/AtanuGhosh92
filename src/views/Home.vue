<template>
  <div class="home">
    <Users :users="users"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users.vue'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Users
  },

  data() {
    return {
      users: []
    }
  },

  created(){
    this.getAllUser();
  },

  computed: {
    ...mapActions({
      addUsers: 'addAllUser',
    }),
  },

  methods: {
    getAllUser(){
      this.axios.get('/users').then((response) => {
        console.log(response.data);
        this.users = response.data;
        // this.addUsers(this.users);
      }); 
    }
  },
}
</script>
