<template>
  <form @submit.prevent="onSubmit">
    <v-text-field
      v-model="bill.code"
      outlined
      class="rounded-lg"
      label="Ingrese código de factura"
      :error-messages="codeErrors"
      :counter="30"
      prepend-inner-icon="mdi-file-document-outline"
      @input="$v.bill.code.$touch()"
      @blur="$v.bill.code.$touch()"
    ></v-text-field>
    <v-btn disabled block color="success" type="submit"
      >{{ edit ? "Editar" : "Buscar factura" }}
      <v-icon right>mdi-text-box-search</v-icon></v-btn
    >
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
    bill: {
      code: "",
      id: "",
    },
  }),
  validations() {
    return {
      bill: {
        code: {
          maxLength: maxLength(30),
        },
      },
    };
  },
  computed: {
    codeErrors() {
      const errors = [];
      if (!this.$v.bill.code.$dirty) return errors;
      !this.$v.bill.code.maxLength &&
        errors.push("El código no debe superar los 30 caracteres.");
      return errors;
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("submit", this.bill);
      }
    },
  },
};
</script>
