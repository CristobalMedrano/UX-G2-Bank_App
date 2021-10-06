<template>
  <div       style="prussian-blue"
      class="prussian-blue">
    <v-toolbar
      dark
      dense
      fixed
      color="#193866"
      style="prussian-blue"
      class="prussian-blue"
    >
    <a href="/">
      <img src="https://i.ibb.co/q19psmS/quickness.png" height="40">
    </a>

      <v-spacer></v-spacer>
      <div>
        <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>

      <v-btn href="/login" rounded color="primary" dark >
        Iniciar Sesión
      </v-btn>
      
      <v-btn href="/register" rounded color="primary" dark >
        Registrate
      </v-btn>
      </div>


    </v-toolbar>
    
  </div>
</template>

<style lang="scss">
  @import '~assets/variables.scss';
  .prussian-blue{
    background-color: #193866;
    color : #FEF9FF;
  }
  .blanco{
    background-color: #FEF9FF;
    color : #000000 ;
}
.blanco:hover{
    background-color: #B2D5E8;
    color : #FEF9FF ;
}
.button-blue{
    border: 3px solid #FEF9FF;
    background-color: #193866;
    color : #FEF9FF;
}
.button-blue:hover{
    border: 3px solid #193866;
    background-color: #FEF9FF;
    color : #193866;
}
</style>