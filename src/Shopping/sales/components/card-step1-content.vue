<template>
  <pv-card class="border-none shadow-none bg-transparent">
    <template v-slot:title>
      <div class="text-center">Realiza tu pedido</div>
    </template>
    <template v-slot:content>
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="p-fluid">
          <div class="field m-2">
            <label for="product" class="font-bold">Descripcion</label>
            <pv-input-text id="product" v-model="description"></pv-input-text>
          </div>
          <div class="field m-2 ">
             <label for="quantity" class="font-bold">Cantidad</label>
             <pv-inputnumber id="quantity" v-model="quantity" :class="{}" mode="decimal" :min="1" :max="1000"></pv-inputnumber>
          </div>
          <div class="field m-2">
            <label for="date" class="font-bold">Fecha</label>
            <pv-calendar id="date" v-model="date"></pv-calendar>
          </div>
          <div class="field m-2">
            <label for="method" class="font-bold">Metodo de pago</label>
            <pv-input-text id="method" v-model="method"></pv-input-text>
          </div>
          <div class="field m-2">
                <pv-button class="p-button-info text-white bg-button w-full" label="Siguiente" type="submit"/>
          </div>
        </div>
      </form>
    </template>
  </pv-card>
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  name: "step-1",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
      description: "",
      quantity: 0,
      date: "",
      method: "",
    };
  },
  validations() {
    return {
      description: {
        required,
      },
      quantity: {
        required,
      },
      date: {
        required,
      },
      method: {
        required,
      },
    };
  },
  methods: {
    nextPage() {
      this.$emit("next-page", {
        formData: {
          description: this.description,
          quantity: this.quantity,
          date: this.date,
          method: this.method,
        },
        pageIndex: 0,
      });
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.nextPage();
      }
    },
  }
};
</script>

<style scoped>

</style>
