<template>
  <v-container>
    <div>
      <Logo />
      <h1 class="title">USERS</h1>
      <ul class="users">
        <li v-for="(user, index) in allUsers" :key="index" class="user">
          <nuxt-link :to="{ name: 'users-id', params: { id: index } }">
            {{ user.name }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link class="button" to="/"> Homepage </nuxt-link>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      allUsers: '',
    }
  },
  async asyncData() {
    const data = await axios.get('/api/users')
    return { allUsers: data }
  },
  head() {
    return {
      title: 'Users',
    }
  },
}
</script>

<style></style>
