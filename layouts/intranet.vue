<template>
  <v-app dark>
    <AppTheNavBar user-name="Isabel Villanueva Perez" @onLogout="logout" />
    <v-main>
      <v-container fluid class="fill-height">
        <AppSnackbar />
        <v-container class="fill-height">
          <v-row class="fill-height d-flex align-center">
            <v-col cols="4" lg="3" align-self="start">
              <IntranetHomeSideCardList :menu="items" />
            </v-col>
            <v-col cols="8" lg="9" class="fill-height">
              <v-card class="fill-height" rounded="lg"><Nuxt /></v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
    <AppTheFooter />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: {
      accounts: {
        text: "Mis cuentas",
        icon: "mdi-piggy-bank-outline",
        url: "/intranet/mis-cuentas",
      },
      transactions: {
        text: "Transacciones",
        icon: "mdi-history",
        url: "/intranet/transacciones",
      },
      contacts: {
        text: "Contactos",
        icon: "mdi-account-multiple",
        url: "/intranet/contactos",
      },
      pay: {
        text: "Pagar",
        icon: "mdi-currency-usd",
        url: "/intranet/pagar",
      },
    },
  }),
  methods: {
    logout() {
      console.log("Saliendo..");
    },
  },
};
</script>
