<template>
  <form action="" class="form">
    <div class="form__group">
      <v-input>*Фамилия</v-input>
      <v-input>*Имя</v-input>
      <v-input>*Дата рождения</v-input>
      <v-input>*Номер телефона</v-input>
      <v-radio name="gender" :list="['муж', 'жен']">
        *Пол
      </v-radio>
      <v-selector
        :list="['VIP', 'Проблемные', 'ОМС']"
        :multiple="true"
        :size="3"
        name-selector="clientGroup[]"
      >
        *Группа клиентов
      </v-selector>
      <v-selector name="doctor">Лечащий врач</v-selector>
      <v-checkbox>Не отправлять СМС</v-checkbox>
    </div>
  </form>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import VInput from "./components/v-input";
import VRadio from "./components/v-radio";
import VSelector from "./components/v-selector";
import VCheckbox from "./components/v-checkbox";

export default {
  name: "App",
  components: { VCheckbox, VSelector, VRadio, VInput },
  data() {
    return {
      name: "",
      age: 0
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    }
  }
};
</script>

<style lang="sass">
.form
  width: 400px
  margin: 0 auto
  background: $color__background
  padding: 5px
  &__group
    border: 1px solid $color__border
    border-radius: 5px
    padding: 10px 15px 10px 7px
</style>
