<template>
  <div>
    <v-toolbar dark dense fixed :color="colors.colorNav" class="black--text">
      <div v-if="colors.mode == 'form'" :style="colorText">
        <NuxtLink to="/">
          <img src="/newlogo_single.png" height="40" />
        </NuxtLink>
        Quickness
      </div>
      <div v-else class="d-flex align-center">
        <NuxtLink to="/"
          ><img src="/newlogo_single_white.png" height="40"
        /></NuxtLink>
        <div class="ml-2 text-headline white--text font-weight-bold">
          Quickness
        </div>
      </div>

      <v-spacer></v-spacer>
      <div v-if="colors.mode == 'home'">
        <v-btn disabled to="/register" outlined rounded color="white" dark>
          Hazte cliente
        </v-btn>
        <v-btn to="/intranet" rounded color="white" light>
          Banca en Línea
        </v-btn>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      colorText: {
        color: "",
      },
    };
  },
  created() {
    this.colorText.color = this.colors.colorText;
  },
};
</script>
