<template>
      <VueSlickCarousel  class="center rounded-pill"  v-bind="settings">
    <div ><img  class="center" src="https://i.ibb.co/b17FRsD/technology-4256272-1920.jpg" ></div>
    <div ><img   class="center" src="https://i.ibb.co/v1J6N9n/pexels-sora-shimazaki-5668859.jpg"></div>
    </VueSlickCarousel>


</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data(){
      return {
        settings:  {
          "dots": true,
          "fade": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 1000,
        }
      
      }
    }
  }
</script> 

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
</style>