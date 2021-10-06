<template>
  <v-card outlined rounded="lg" width="20em" height="4em">
    <v-row no-gutters class="fill-height">
      <v-col cols="10" class="d-flex justify-start align-center">
        <v-avatar class="ml-4" color="primary" size="35">
          <v-img
            src="https://thumbs.dreamstime.com/b/frente-del-retrato-de-la-muchacha-5686848.jpg"
          />
        </v-avatar>
        <div class="ml-4 font-weight-bold subtitle-1 noselect">
          {{ userName }}
        </div>
      </v-col>
      <v-col cols="2" class="d-flex justify-end align-center">
        <v-card
          ripple
          flat
          class="
            ma-0
            pa-0
            pr-2
            fill-height
            d-flex
            justify-end
            align-center
            rounded-r-lg
          "
          @click="onLogout"
        >
          <v-divider vertical></v-divider>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    userLoggedIn: {
      type: Boolean,
    },
    userName: {
      type: String,
      default: "Nombre",
    },
    userAvatar: {
      type: String,
      default: "",
    },
  },
  methods: {
    onLogout() {
      this.$emit("onLogout");
    },
    onLogin() {
      this.$emit("onLogin");
    },
  },
};
</script>
