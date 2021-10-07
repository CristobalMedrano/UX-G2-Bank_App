<template>
  <v-app dark>
    <v-main>
      <AppNavbar :colors="colors" />
      <v-container fluid>
        <AppSnackbar />
        <Nuxt />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      colors: {
        colorNav: "#193866",
        colorButton1: "",
        colorText: "",
        mode: "home",
      },
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
