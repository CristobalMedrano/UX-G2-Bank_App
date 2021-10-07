<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4"></v-col>
        <v-col cols="12" md="4">
          <v-text-field v-model="RUT" :rules="rutRules" :counter="12" label="RUT" required></v-text-field>
          <v-text-field type="password"  label="Clave" ></v-text-field>
          <v-btn href="/login" class="text-center" rounded color="#193866" block dark> Ingresar </v-btn>
        </v-col>
        <v-col cols="12" md="4"></v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      RUT : '' ,
      password : '',
      rutRules : [
        v => !!v || 'Rut es necesario',
        v => v.length <= 12 || 'Rut Incompleto',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
  }

</script>
