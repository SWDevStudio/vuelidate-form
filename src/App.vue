<template>
  <form action="" class="form">
    <div class="form__group">
      <v-input>*Фамилия</v-input>
      <v-input>*Имя</v-input>
      <v-input>*Дата рождения</v-input>
      <v-input>*Номер телефона</v-input>
      <v-radio name="gender" :list="['муж', 'жен']">*Пол</v-radio>
    </div>
  </form>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import VInput from "./components/v-input";
import VRadio from "./components/v-radio";

export default {
  name: "App",
  components: { VRadio, VInput },
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
/*@import "./assets/css/global.sass"*/
.form
  width: 400px
  margin: 0 auto
  background: $color__background
  padding: 5px
  &__radio
    span
      +font()
    &:checked
      position: absolute
      color: red
    margin-right: 20px
  &__input
    &_error
      border: 1px solid $color__warning
    +font($size__font_little)
    position: relative
    width: 180px
    box-sizing: border-box
    height: 20px
    border-radius: 5px
    border: 1px solid $color__border
    padding: 0 10px
    transition: .4s
    &:focus
      transition: .4s
      box-shadow: inset 0 0 3px 1px red
  &__icon-error
    margin-left: auto
    align-self: center
    margin-right: 5px
    color: $color__warning
  &__group
    border: 1px solid $color__border
    border-radius: 5px
    padding: 10px 15px 10px 7px
  &__item
    display: flex
    justify-content: space-between
    width: 100%
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0
    label
     +font()
  &__radio-group
    width: 180px
    display: flex
.radio:checked
  color: red
</style>
