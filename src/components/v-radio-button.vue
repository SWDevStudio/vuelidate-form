<template>
  <div class="radio-button">
    <input
      type="radio"
      :name="name"
      :id="randomId"
      class="radio-button__input"
    />
    <label :for="randomId" class="radio-button__label">
      <slot />
    </label>
  </div>
</template>

<script>
export default {
  name: "v-radio-button",
  data() {
    return {
      randomId: ""
    };
  },
  props: {
    name: {
      type: String,
      default: () => ""
    }
  },
  created() {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let rs = "";
    while (rs.length < 6) {
      rs += abc[Math.floor(Math.random() * abc.length)];
    }
    this.randomId = rs;
  }
};
</script>

<style lang="sass">
.radio-button
  position: relative
  +font($size__font_little)
  &__input
    appearance: none
    position: absolute
    &:checked + .radio-button__label:before
      background: $color__border
  &__label
    padding-right: 25px
    &:before
      +pseudocheck(15px, 0px, 0px)
      border: 1px solid $color__border
      border-radius: 100%
</style>
