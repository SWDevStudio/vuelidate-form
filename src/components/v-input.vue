<template>
  <v-form-item>
    <label :for="name"><slot /></label>
    <v-error-icon class="form-row__error-icon" v-if="$v.value.$error" />
    <div class="form__input" :class="{ form__input_phone: phone }">
      <input
        :id="name"
        type="text"
        class="input "
        :class="{ input_error: $v.value.$error }"
        v-model.lazy="$v.value.$model"
      />
    </div>
  </v-form-item>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
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
    },
    minLength: {
      type: Number,
      default: () => null
    },
    maxLength: {
      type: Number,
      default: () => null
    },
    required: {
      type: Boolean,
      default: () => false
    },
    phone: {
      type: Boolean,
      default: () => false
    }
  },

  data() {
    return {
      value: ""
    };
  },

  watch: {
    value() {
      console.log(this.$v.value.$error);
    }
  },
  validations() {
    return {
      value: {
        required: this.required ? required : "",
        minLength: this.minLength ? minLength(this.minLength) : "",
        maxLength: this.maxLength ? maxLength(this.maxLength) : "",
        onlyNumbers: this.phone ? str => /^\d+$/.test(str) : ""
      }
    };
  }
};
</script>
<style lang="sass">
.form__input
  &_phone
    position: relative
    &:before
      content: '+7'
      display: block
      +font($size__font_little)
      top: 2px
      left: 3px
      position: absolute
      z-index: 1
    input
      padding: 0 20px

.input
  +font($size__font_little)
  position: relative
  width: 180px
  background: $color__background
  box-sizing: border-box
  height: 20px
  border-radius: 5px
  border: 1px solid $color__border
  padding: 0 5px
  transition: .4s
  &:focus
    transition: .4s
    box-shadow: inset 0 0 3px 1px $color__border
  &_error
    border: 1px solid $color__warning
    box-shadow: inset 0 0 3px 1px $color__border
</style>
