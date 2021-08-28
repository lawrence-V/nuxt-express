<template>
  <v-container>
    <h1>vselect pluigns</h1>
    <!-- use the no-ssr for the plugins -->
    <!-- <no-ssr> -->
    <v-select
      v-model="selected"
      placeholder="Select Category"
      :options="['Canada', 'United States']"
    ></v-select>
    <!-- </no-ssr> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
    }
  },
}
</script>

<style></style>
