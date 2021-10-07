<template>
  <div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 center text-center">
        <v-carousel height="400" max-width="100" hide-delimiter-background show-arrows-on-hover cycle>
          <v-carousel-item class="center">
            <img class="center" src="https://i.ibb.co/b17FRsD/technology-4256272-1920.jpg"> </img>
          </v-carousel-item>
          <v-carousel-item>
            <img src="https://i.ibb.co/v1J6N9n/pexels-sora-shimazaki-5668859.jpg"> </img>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    /*
          v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    */
    data() {
      return {
        items: [{
            src: "https://i.ibb.co/b17FRsD/technology-4256272-1920.jpg",
          },
          {
            src: "https://i.ibb.co/v1J6N9n/pexels-sora-shimazaki-5668859.jpg"
          },
        ],
      }
    },
  }

</script>
