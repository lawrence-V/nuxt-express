<template>
  <div>
    <h1>{{post.title}}</h1>
    <h2 class="pt-5">
      {{post.body}}
    </h2>
    <nuxt-link to="/posts">back to post</nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      post: '',
    }
  },
  async asyncData({params}) {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return { post: data }
  },
  head() {
    return { 
    title:  this.post.title
    }
  },
}
</script>

<style></style>
