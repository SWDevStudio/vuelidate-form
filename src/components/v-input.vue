<template>
  <label class="form__item">
    <span><slot /></span>
    <font-awesome-icon icon="exclamation-circle" class="form__icon-error" />
    <input type="text" class="form__input" />
  </label>
</template>

<script>
export default {
  name: "v-input"
};
</script>
