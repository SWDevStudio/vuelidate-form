<template>
  <v-form-item>
    <span><slot /></span>
    <span class="form__radio-buttons radio-buttons">
      <label
        v-for="(index, key) in list"
        :key="key"
        class="radio-buttons__item"
      >
        {{ index }}
        <input type="radio" :value="key" :name="name" class="test" />
      </label>
    </span>
  </v-form-item>
</template>

<script>
import VFormItem from "./v-form-item";
export default {
  name: "v-radio",
  components: { VFormItem },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: () => ""
    }
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
    padding-right: 25px
    margin-right: 20px
    position: relative
    &.active
      &:after
        content: ''
        position: absolute
        width: 12px
        height: 12px
        right: 2px
        top: 3px
        background: $color__border
        border-radius: 100%

    &:before
      content: ''
      position: absolute
      width: 15px
      height: 15px
      right: 0
      border: 1px solid $color__border
      border-radius: 100%
    /*input:checked + .radio-buttons__item:after*/
    /*  background: aqua*/
</style>
