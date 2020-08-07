<template>
  <v-form-item>
    <span><slot /></span>
    <span class="form__radio-group">
      <span v-for="(index, key) in list" :key="key">
        <label>
          {{ index }}
          <input type="radio" :value="key" :name="name" class="radio" />
        </label>
      </span>
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
.form__radio-group
  width: 180px
  display: flex
</style>
