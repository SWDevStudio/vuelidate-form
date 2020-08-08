<template>
  <v-form-item>
    <span><slot /></span>
    <span class="form__radio-buttons radio-buttons">
      <span v-for="(index, key) in list" :key="key" class="radio-buttons__item">
        <v-radio-button :name="name">{{ index }}</v-radio-button>
      </span>
    </span>
  </v-form-item>
</template>

<script>
import VFormItem from "./v-form-item";
import VRadioButton from "./v-radio-button";
export default {
  name: "v-radio",
  components: { VRadioButton, VFormItem },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      randomId: ""
    };
  }
};
</script>
<style lang="sass">
.radio-buttons
  width: 180px
  display: flex
  &__item
    display: flex
    align-items: center
    margin-right: 20px
    position: relative
</style>
