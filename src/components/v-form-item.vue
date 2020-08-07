<template>
  <div class="form__item form-row">
    <slot />
  </div>
</template>

<script>
export default {
  name: "v-form-item"
};
</script>

<style lang="sass">
.form-row
  display: flex
  justify-content: space-between
  width: 100%
  &__error-icon
    margin-left: auto
    align-self: center
    margin-right: 5px
  label
    +font()
.form__item
    margin-bottom: 20px
    &:last-child
        margin-bottom: 0
</style>
