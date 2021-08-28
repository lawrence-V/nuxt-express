<template>
  <v-container>
    <div class="text-center">
      <h1>Making Api request - the vue way</h1>
    </div>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="post in posts" :key="post.id" cols="3">
          <Card :post="post" />
        </v-col>
      </v-row>
      <v-btn color="success" v-scroll-to="'body'">back to top</v-btn>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      allposts: '',
    }
  },
  computed: {
    ...mapGetters(['posts']),
    // allPosts() {
    //   return this.$store.getters.posts
    // },
  },
  // asyncdata will what ever will return will sync to data
  // if the not planning to sysnc the data in local data we can use fetch
  // fetch only work if the data is pass to Vuex and fetch really good if the data will get in remote api
  //  and asyncdata is able to return {allposts: data}

  // async asyncData({ store }) {
  //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //return { allposts: data }
  //   store.dispatch('setPosts', data)
  // },

  // async fetch({ store }) {
  //   const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
  //   //return { allposts: data }
  //   store.dispatch('setPosts', data)
  // },
  head: {
    title: ' List of Posts',
  },
}
</script>

<style></style>
