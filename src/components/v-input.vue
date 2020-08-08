<template>
  <v-form-item>
    <label :for="idInput"><slot /></label>
    <v-error-icon
      class="form-row__error-icon"
      v-if="$v.value.$error"
      :error-messages="errorMessages"
    />
    <div class="form__input" :class="{ form__input_phone: phone }">
      <input
        :id="idInput"
        :type="type"
        class="input"
        :class="{ input_error: $v.value.$error }"
        v-model.lazy.trim="$v.value.$model"
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
    idInput: {
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
    },
    type: {
      type: String,
      default: () => "text"
    },
    onlyLetters: {
      type: Boolean,
      default: () => false
    },
    onlyNumbers: {
        type: Boolean,
        default: () => false
    }
  },
  data() {
    return {
      value: "",
      errorMessages: []
    };
  },

  watch: {
    value() {
      let answerValidator = [];
      const validator = this.$v.value;
      const errorMessages = {
        onlyNumbers: "Сюда можно вводить только числа",
        minLength: `Минимальная длинна строки ${this.minLength} символов`,
        maxLength: `Максимальная длинна строки ${this.maxLength} символов`,
        required: "Это поле не должно быть пустым!",
        onlyLetters: "К сожалению сюда только буквы :/ ??"
      };
      for (let message in errorMessages) {
        if (!validator[message]) answerValidator.push(errorMessages[message]);
      }
      this.errorMessages = answerValidator;
      console.log(answerValidator)
    }
  },
  validations() {
    return {
      value: {
        required: this.required ? required : "",
        minLength: this.minLength ? minLength(this.minLength) : "",
        maxLength: this.maxLength ? maxLength(this.maxLength) : "",
        onlyNumbers: this.phone || this.onlyNumbers ? str => /^\d+$/.test(str) || !str : "",
        onlyLetters: this.onlyLetters ? str => !/[0-9]/.test(str) || !str: ""
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
