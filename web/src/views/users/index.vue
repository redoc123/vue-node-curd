<template>
  <div class="posts--list">
    <div
      v-for="user in users"
      v-bind="{user}"
      :key="user._id"
    >
    <router-link :to="{ name: 'showUser', params: { id: user._id }}">
      {{user.name}}
    </router-link>

    </div>
  </div>
</template>

<script>

import { RepositoryFactory } from '@/repositories/RepositoryFactory'
const UsersRepository = RepositoryFactory.get('users')


export default {
  name: 'user-list',
  data: function() {
return {
    users: []
  };
},
  created(){
      this.getUsers()
  },
  methods: {
      async getUsers(){
        this.isLoading = true
        const { data } = await UsersRepository.get()
        this.isLoading = false
        this.users = data;
      }
  }
}
</script>
