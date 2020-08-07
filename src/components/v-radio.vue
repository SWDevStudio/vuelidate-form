<template>
  <div class="form__item">
    <span><slot /></span>
    <span class="form__radio-group">
      <span v-for="(index, key) in list" :key="key">
        <label
          >{{ index }}
          <input type="radio" :value="key" :name="name" class="radio"
        /></label>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "v-radio",
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
