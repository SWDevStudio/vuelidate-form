<template>
  <v-form-item>
    <div class="checkbox">
      <input id='test' type="checkbox" class="checkbox__input">
      <label for="test" class="checkbox__label"><slot /></label>
    </div>
  </v-form-item>
</template>

<script>
    import VFormItem from "./v-form-item";
    export default {
        name: "v-checkbox",
        components: {VFormItem}
    }
</script>

<style lang="sass">
.checkbox
  position: relative
  &__input
    appearance: none
    position: absolute
    &:checked + .checkbox__label:before
      background-color: $color__border
    &:checked + .checkbox__label:after
      opacity: 1
  &__label
    +font()
    padding-right: 25px
    &:before
      +pseudocheck(16px, 0px, 0px)
      border: 1px solid $color__border
      background: $color__background
      z-index: 1
    &:after
      +pseudocheck(8px, 5px, 5px)
      background: green
      position: absolute
      opacity: 0
      z-index: 2
</style>