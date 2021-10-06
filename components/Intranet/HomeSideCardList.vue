<template>
  <v-row class="d-flex fill-height">
    <v-col v-for="(item, index) in menu" :key="index" cols="12">
      <IntranetHomeSideCardButton
        :text="item.text"
        :icon="item.icon"
        :url="item.url"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
