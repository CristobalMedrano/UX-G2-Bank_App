<template>
  <v-row>
    <v-col>
      <v-row justify="center" align="center">
        <v-col align="left"
          ><v-btn nuxt to="/recursos"
            ><v-icon left>mdi-arrow-left</v-icon>Volver</v-btn
          ></v-col
        >
      </v-row>
      <v-card rounded="lg" outlined>
        <v-card-title class="justify-center"
          >Lectura y Creación básica usando Cloud Firestore</v-card-title
        >
        <v-container>
          <v-row>
            <v-col cols="12" align="center">
              Listado de palabras (cargado desde Firebase):
              <WordsWordList :words="sortedWords" />
            </v-col>
            <v-col>
              <v-row>
                <v-col>Operaciones</v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  Crear
                  <WordsWordForm @submit="onCreate" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    text: "",
    words: [],
  }),

  computed: {
    sortedWords() {
      const sortedWords = [...this.words];
      return sortedWords.sort((a, b) => {
        const linkA = a.title.toUpperCase();
        const linkB = b.title.toUpperCase();
        return linkA > linkB ? 1 : linkB > linkA ? -1 : 0;
      });
    },
  },

  created() {
    this.$nextTick(async () => {
      if (this.$nuxt.$loading !== undefined) {
        this.$nuxt.$loading.start();
      }
      await this.loadWords();
      if (this.$nuxt.$loading !== undefined) {
        this.$nuxt.$loading.finish();
      }
    });
  },
  methods: {
    async loadWords() {
      const collectionRef = this.$fire.firestore.collection("words");
      try {
        const loadedWords = [];
        const wordRef = await collectionRef.get();
        for (const word of wordRef.docs) {
          const loadedWord = word.data();
          loadedWord.id = word.id;
          loadedWords.push(loadedWord);
        }
        this.words = loadedWords;
      } catch (error) {
        console.log(error);
      }
    },
    async onCreate(newWord) {
      this.$nuxt.$loading.start();
      try {
        const wordsRef = this.$fire.firestore.collection("words");
        const doc = await wordsRef.add(newWord);
        if (doc.id !== undefined) {
          this.words.push({ ...newWord, id: doc.id });
          this.$notifier.showMessage({
            content: "Palabra creada con éxito",
            color: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
      this.$nuxt.$loading.finish();
    },
    async onRead() {},
    async onUpdate() {},
    async onDelete() {},
  },
};
</script>
