<template>
  <div class="form__item">
    <slot />
  </div>
</template>

<script>
export default {
  name: "v-form-item"
};
</script>

<style lang="sass">
.form__item
    display: flex
    justify-content: space-between
    width: 100%
    margin-bottom: 20px
    &:last-child
        margin-bottom: 0
    label
        +font()
</style>
