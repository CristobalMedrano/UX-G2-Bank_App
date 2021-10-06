<template>
  <v-app dark>
    <AppTheNavBar user-name="Isabel Villanueva Perez" @onLogout="logout" />
    <v-main>
      <v-container fluid class="fill-height">
        <AppSnackbar />
        <Nuxt />
      </v-container>
    </v-main>
    <AppTheFooter />
  </v-app>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("Saliendo..");
    },
  },
};
</script>
