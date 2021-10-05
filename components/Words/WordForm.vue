<template>
  <form @submit.prevent="onSubmit">
    <v-text-field
      v-model="editedWord.title"
      label="Ingrese alguna palabra acá"
      :error-messages="titleErrors"
      :counter="30"
      @input="$v.editedWord.title.$touch()"
      @blur="$v.editedWord.title.$touch()"
    ></v-text-field>
    <v-btn block color="success" type="submit">{{
      edit ? "Editar" : "Crear"
    }}</v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  props: {
    edit: {
      type: Boolean,
    },
  },
  data: () => ({
    defaultWord: {
      title: "",
      id: "",
    },
    editedWord: {
      title: "",
      id: "",
    },
  }),
  validations() {
    return {
      editedWord: {
        title: {
          maxLength: maxLength(30),
        },
      },
    };
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.editedWord.title.$dirty) return errors;
      !this.$v.editedWord.title.maxLength &&
        errors.push("El texto no debe superar los 30 caracteres.");
      return errors;
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("submit", this.editedWord);
      }
    },
  },
};
</script>
