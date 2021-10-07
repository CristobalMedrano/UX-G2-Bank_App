<template>
  <v-container>
    <v-row class="d-flex justify-center mt-4">
      <v-col cols="6"> <IntranetPayForm /> </v-col>
    </v-row>
    <v-divider class="my-8 mx-4"></v-divider>
    <v-row class="d-flex justify-center mt-4">
      <v-col class="d-flex justify-center"> Factura </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "intranet",
  head() {
    return {
      title: "Pagar",
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
