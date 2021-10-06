<template>
  <v-card
    rounded="lg"
    class="fill-height d-flex justify-center align-center"
    height="6em"
    hover
    ripple
    nuxt-link
    :to="url"
    exact
  >
    <v-col cols="2"
      ><v-icon large>{{ icon }}</v-icon></v-col
    >
    <v-col cols="8"
      ><v-card-title class="ma-0 pa-0 d-flex justify-center">{{
        text
      }}</v-card-title></v-col
    >
    <v-col cols="2"></v-col>
  </v-card>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Nombre",
    },
    icon: {
      type: String,
      default: "mdi-account",
    },
    url: {
      type: String,
      default: "/intranet",
    },
  },
};
</script>
