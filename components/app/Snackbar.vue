<template>
  <v-snackbar
    v-model="show"
    bottom
    right
    outlined
    text
    rounded="lg"
    max-width="400px"
    transition="scroll-y-reverse-transition"
    content-class="d-flex align-center"
    :color="color"
  >
    <v-icon :color="color" left>{{ selectedIcon }}</v-icon>
    {{ message }}
    <template #action="{ attrs }">
      <v-btn icon text v-bind="attrs" @click="show = false">
        <v-icon :color="color">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
      color: "",
    };
  },
  computed: {
    selectedIcon() {
      switch (this.color) {
        case "success":
          return "mdi-check-circle";
        case "info":
          return "mdi-information";
        case "warning":
          return "mdi-alert";
        case "error":
          return "mdi-alert-octagon-outline";
        default:
          return "mdi-progress-alert";
      }
    },
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "snackbar/SHOW_MESSAGE") {
        this.message = state.snackbar.content;
        this.color = state.snackbar.color;
        this.show = true;
      }
    });
  },
};
</script>
