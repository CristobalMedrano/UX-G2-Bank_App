<template>
  <v-overlay v-if="loading" :opacity="0.3" :value="overlay">
    <div class="lds-facebook">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </v-overlay>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    overlay: false,
  }),

  methods: {
    start() {
      this.loading = true;
      this.overlay = true;
    },
    finish() {
      this.loading = false;
      this.overlay = false;
    },
    fail(error) {
      console.log(error);
    },
    increase(num) {
      // console.log(num)
    },
  },
};
</script>

<style>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: rgb(255, 255, 255);
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
