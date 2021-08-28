<template>
  <v-container>
    <v-card color="#26c6da" dark height="320px">
      <v-card-title>
        <v-icon large left> Post </v-icon>
        <v-spacer></v-spacer>
        <span class="text-h6 font-weight-light"> {{ post.id }}</span>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
        <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{
          post.title
        }}</nuxt-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: { post: Object },
}
</script>

<style></style>
