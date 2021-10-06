<template>
  <v-app-bar app flat height="100em">
    <v-container class="py-0 fill-height">
      <v-row no-gutters class="d-flex align-center">
        <v-col class="d-flex justify-start align-center" cols="3">
          <v-avatar tile size="50">
            <v-img contain src="/single.png"> </v-img>
          </v-avatar>
          <span class="font-weight-bold ml-2 body-1 noselect text-justify"
            ><span class="font-weight-medium subtitle-2 noselect text-justify"
              >Quickness</span
            >
            <br />
            Terminal Bancaria</span
          >
        </v-col>
        <v-col cols="9" class="d-flex justify-end align-center">
          <AppNavBarDesktopProfile
            :user-name="userName"
            :user-avatar="userAvatar"
            @onLogout="onLogout()"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "sin_nombre",
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
