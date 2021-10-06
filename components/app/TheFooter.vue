<template>
  <v-footer app padless absolute>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card-text class="d-flex justify-center" :class="[textColor]">
          &copy; {{ new Date().getFullYear() }} QUICKNESS — GRUPO 2 UX. &nbsp;
        </v-card-text>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
  computed: {
    textColor() {
      return this.$vuetify.theme.dark ? "white--text" : "black--text";
    },
  },
};
</script>
