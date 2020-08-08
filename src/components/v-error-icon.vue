<template>
  <font-awesome-icon
    icon="exclamation-circle"
    class="error-icon"
    :title="errorMessages.join('\n')"
  />
</template>

<script>
export default {
  name: "v-error-icon",
  props: {
    errorMessages: {
      type: Array,
      default: () => ["Ошибка", "уровня бог"]
    }
  }
};
</script>

<style lang="sass">
.error-icon
   color: $color__warning
   font-size: $size__font
</style>
