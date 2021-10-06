<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-btn nuxt to="/recursos">Recursos</v-btn>
      <v-btn nuxt to="/intranet">Intranet</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    async getData() {
      const collectionRef = this.$fire.firestore.collection("posts").limit(5);
      try {
        const loadedPosts = [];
        const postsRef = await collectionRef.get();

        for (const post of postsRef.docs) {
          loadedPosts.push({
            id: post.id,
            ...post.data(),
          });
        }
        console.log(loadedPosts);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
