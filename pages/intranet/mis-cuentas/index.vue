<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col
          v-for="(account, index) in loadedAccounts"
          :key="index"
          cols="12"
        >
          <v-card class="rounded-lg mt-2">
            <v-card-title
              ><v-icon left>mdi-bank</v-icon> {{ account.name }}</v-card-title
            >
            <v-card-subtitle>${{ account.balance }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--<v-container fluid>
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :search="search"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template #header>
          <v-toolbar dark color="blue darken-3" class="mb-1">
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Buscar"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <v-spacer></v-spacer>
            </template>
          </v-toolbar>
        </template>

        <template #default="props">
          <v-row>
            <v-col
              v-for="item in props.accounts"
              :key="item.number"
              cols="12"
              sm="6"
              md="4"
              lg="12"
            >
              <v-card>
                <v-card-title class="subheading font-weight-bold">
                  {{ item.number }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item>
                    <v-list-item-content>Banco:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.name }}
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-content>Saldo:</v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.balance }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>

        <template #footer>
          <v-row class="ma-4" align="center" justify="center">
            <span class="grey--text">Elementos por página</span>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <span class="mr-4 grey--text">
              Página {{ page }} de {{ numberOfPages }}
            </span>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="mr-1"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="blue darken-3"
              class="ml-1"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>-->
  </div>
</template>

<script>
export default {
  layout: "intranet",
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "number",
      keys: ["Number", "Name", "Balance"],
      items: [
        {
          number: "56546-54435-45664-445543",
          name: "Banco Estado",
          balance: "$2.000.000",
        },
        {
          number: "43546-54435-45664-445543",
          name: "Banco Santander",
          balance: "$5.000.000",
        },
        {
          number: "56546-54435-45664-445543",
          bank: "Banco Estado",
          balance: "$2.000.000",
        },
        {
          number: "43546-54435-45664-445543",
          bank: "Banco Santander",
          balance: "$5.000.000",
        },
        {
          number: "56546-54435-45664-445543",
          bank: "Banco Estado",
          balance: "$2.000.000",
        },
        {
          number: "43546-54435-45664-445543",
          bank: "Banco Santander",
          balance: "$5.000.000",
        },
      ],
      loadedAccounts: {},
    };
  },
  head() {
    return {
      title: "Mis Cuentas",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Intranet - Quickness",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Number");
    },
  },
  async created() {
    await this.getCuentas();
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    async getCuentas() {
      /* const collectionRef = this.$fire.firestore.collection(
        "/Clients/gSQIY0xNb8fs49dGiYf6/accounts"
      ); */

      const documentRef = this.$fire.firestore
        .collection("Clients")
        .doc("gSQIY0xNb8fs49dGiYf6");
      try {
        const loadedAccounts = [];
        const clientDocument = await documentRef.get();
        console.log(clientDocument.data().accounts);
        for (const account of clientDocument.data().accounts) {
          loadedAccounts.push(account);
        }
        this.loadedAccounts = loadedAccounts;

        /* for (const account of accountRef.docs) {
          console.log(account.data());
          console.log(account.id);
          // loadedAccounts.push({ ...account.data(), id: account.id });
          // this.accouts = loadedAccounts;
          // console.log(loadedAccounts);
        } */
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
