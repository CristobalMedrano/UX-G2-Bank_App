<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col cols="12" class="d-flex justify-center align-center">
        <div class="headline">Hola, esta es tu terminal de pagos.</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "intranet",
  head() {
    return {
      title: "Intranet",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Intranet - Quickness",
        },
      ],
    };
  },
};
</script>
