<template>
  <v-form-item>
    <label :for="name"><slot /></label>
    <v-error-icon class="form-row__error-icon" />
    <input
      :id="name"
      type="text"
      class="form__input input"
      v-model.lazy="$v.value.$model"
    />
  </v-form-item>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import VFormItem from "./v-form-item";
import VErrorIcon from "./v-error-icon";
export default {
  name: "v-input",
  components: { VErrorIcon, VFormItem },
  props: {
    name: {
      type: String,
      default: () => {
        let abc = "abcdefghijklmnopqrstuvwxyz";
        let rs = "";
        while (rs.length < 6) {
          rs += abc[Math.floor(Math.random() * abc.length)];
        }
        return rs;
      }
    }
  },

  data() {
    return {
      value: "",
      nulled: true
    };
  },
    watch: {
      value () {
          console.log(this.$v.value.$error)
      }
    },
  validations() {
    return {
      value: {
        required: required,
        minLength: this.nulled ? minLength(4) : ""
      }
    };
  }
};
</script>
<style lang="sass">
.input
  +font($size__font_little)
  position: relative
  width: 180px
  background: $color__background
  box-sizing: border-box
  height: 20px
  border-radius: 5px
  border: 1px solid $color__border
  padding: 0 10px
  transition: .4s
  &:focus
    transition: .4s
    box-shadow: inset 0 0 3px 1px red
  &_error
    border: 1px solid $color__warning
</style>