<template>
  <v-form-item>
    <slot />
    <label>
      <select class="selector">
        <option v-for="index in variables" :key="index"  :value="index">
          {{ index }}
        </option>
      </select>
    </label>
  </v-form-item>
</template>

<script>
import VFormItem from "./v-form-item";
export default {
  name: "v-selector",
  components: { VFormItem },
  props: {
    variables: {
      type: Array,
      default: () => ["Иванов", "Захаров", "Чернышева"]
    }
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
