<template>
  <v-form-item>
    <span><slot /></span>
    <v-error-icon
      class="form-row__error-icon"
      v-if="$v.value.$error"
      :error-messages="['Выберете пункты селектора!']"
    />
    <label>
      <select
        class="selector"
        :name="nameSelector"
        :size="size"
        :id="idSelector"
        v-model="$v.value.$model"
      >
        <option v-for="(index, key) in list" :key="key" :value="index">
          {{ index }}
        </option>
      </select>
    </label>
  </v-form-item>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import VFormItem from "./v-form-item";
import VErrorIcon from "./v-error-icon";
export default {
  name: "v-selector",
  components: { VErrorIcon, VFormItem },
  data() {
    return {
      value: []
    };
  },
  validations() {
    return {
      value: {
        required: this.required ? required : ""
      }
    };
  },
  props: {
    list: {
      type: Array,
      default: () => ["Иванов", "Захаров", "Чернышева"]
    },
    required: {
      type: Boolean,
      default: () => false
    },
    nameSelector: {
      type: String,
      default: () => ""
    },
    selected: {
      default: () => false
    },
    size: {
      type: Number,
      default: () => 1
    },
    multiple: {
      type: Boolean,
      default: () => false
    },
    idSelector: {
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
  methods: {
    isMultiple() {
      if (this.multiple) {
        let obj = document.getElementById(this.idSelector);
        obj.setAttribute("multiple", "");
      }
    },
    // TODO @Kotaro при попытке сделать selected 0 не отображает выбранный элемент на странице, с остальными элементами все ОК
    setSelected() {
      if (typeof this.selected === "number" && this.selected >= 0) {
        let obj = document.getElementById(this.idSelector)[this.selected];
        obj.setAttribute("selected", "selected");
      }
    }
  },
  mounted() {
    this.isMultiple();
    this.setSelected();
  }
};
</script>

<style lang="sass">
.selector
  position: relative
  width: 180px
  background: $color__background
  border:  1px solid $color__border
  border-radius: 5px
  appearance: none
  +font($size__font_little)
</style>
