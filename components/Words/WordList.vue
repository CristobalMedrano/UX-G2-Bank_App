<template>
  <div>
    <ul>
      <li v-for="word in words" :key="word.id">{{ word }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
