<template>
  <v-container>
    <v-card color="#26c6da" dark height="320px">
      <v-card-title>
        <v-icon large left> Post </v-icon>
      </v-card-title>

      <v-card-text class="text-h5 font-weight-bold">
        <nuxt-link :to="{ name: 'users-id', params: { id: index } }">{{
          user.title
        }}</nuxt-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: { user: Object },
}
</script>

<style></style>
