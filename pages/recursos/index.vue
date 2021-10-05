<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col align="left"
        ><v-btn nuxt to="/"
          ><v-icon left>mdi-arrow-left</v-icon>Volver</v-btn
        ></v-col
      >
    </v-row>
    <v-row justify="center" align="center">
      <v-col> Notificaciones </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <v-btn color="success" @click="showSuccessNotification">Success</v-btn>
        <v-btn color="error" @click="showErrorNotification">Error</v-btn>
        <v-btn color="warning" @click="showWarningNotification">Warning</v-btn>
        <v-btn color="info" @click="showInfoNotification">Info</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col> Loading </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="primary" @click="onLoading">Loading</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="primary" nuxt to="/recursos/crud">Firebase</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    showSuccessNotification() {
      this.$notifier.showMessage({
        content: "Notificacion success",
        color: "success",
      });
    },
    showErrorNotification() {
      this.$notifier.showMessage({
        content: "Notificacion error",
        color: "error",
      });
    },
    showWarningNotification() {
      this.$notifier.showMessage({
        content: "Notificacion warning",
        color: "warning",
      });
    },
    showInfoNotification() {
      this.$notifier.showMessage({
        content: "Notificacion info",
        color: "info",
      });
    },
    async onLoading() {
      this.$nuxt.$loading.start();
      await new Promise((resolve) => setTimeout(resolve, 3500));
      this.$nuxt.$loading.finish();
    },
  },
};
</script>
