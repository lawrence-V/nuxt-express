<template>
  <v-container>
    <div>User</div>
    <h1>{{ user.name }}</h1>
    <nuxt-link to="/users">Users</nuxt-link>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: '',
    }
  },
  async asyncData({ params, error }) {
    const data = await axios.get(`/api/users/${params.id}`)
    return { user: data }
  },
  head() {
    return {
      title: `User: ${this.user.name}`,
    }
  },
}
</script>

<style></style>
