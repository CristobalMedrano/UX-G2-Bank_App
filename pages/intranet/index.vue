<template>
  <v-container class="fill-height">
    <v-row class="fill-height d-flex align-center">
      <v-col cols="4" align-self="start">
        <v-row class="d-flex fill-height">
          <v-col cols="12">
            <IntranetHomeSideCardButton
              text="Mis cuentas"
              icon="mdi-piggy-bank-outline"
              @click="onClickAccounts"
            />
          </v-col>
          <v-col cols="12">
            <IntranetHomeSideCardButton
              text="Transacciones"
              icon="mdi-history"
              @click="onClickHistory"
            />
          </v-col>
          <v-col cols="12">
            <IntranetHomeSideCardButton
              text="Contactos"
              icon="mdi-account-multiple"
              @click="onClickContacts"
            />
          </v-col>
          <v-col cols="12">
            <IntranetHomeSideCardButton
              text="Pagar"
              icon="mdi-currency-usd"
              @click="onClickPay"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8" class="fill-height">
        <v-card class="fill-height" rounded="lg"
          ><v-card-text>Test</v-card-text></v-card
        >
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
  methods: {
    onClickAccounts() {
      console.log("Click en mis cuentas");
    },
    onClickHistory() {
      console.log("Click en historial");
    },
    onClickContacts() {
      console.log("Click en contactos");
    },
    onClickPay() {
      console.log("Click en pagar");
    },
  },
};
</script>
