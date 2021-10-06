<template>
  <div >
    <v-toolbar
      dark
      dense
      fixed
      :color = "colors.colorNav "
      class="black--text"
    >
    <div :style="colorText" v-if = "colors.mode == 'form' ">
      <a href="/"><img src="https://i.ibb.co/g9SXtyr/Logo.png" height="40"></a>
        Quickness
    </div>
    <div v-else>
      <a href="/"><img src="https://i.ibb.co/q19psmS/quickness.png" height="40"></a>
    </div>
      
      <v-spacer></v-spacer>
      <div  v-if = "colors.mode == 'home' ">
        <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>

      <v-btn href="/Register" outlined rounded color="white" dark >
        Hazte cliente
      </v-btn>

      <v-btn href="/login" rounded color="white" light >
        Banca en Línea
      </v-btn>
      </div>


    </v-toolbar>
    
  </div>
</template>

<script>
  export default {
    props: [
      'colors'
    ],
    data () {
      return{
        'colorText' : {color:'',}
      }
    },
    created() {
      this.colorText.color = this.colors.colorText;
    }

  }
</script>