<template>
  <v-form-item>
    <span><slot /></span>
    <label>
      <select class="selector" :name="nameSelector" :size="size" :id="randomId">
        <option v-for="index in list" :key="index" :value="index">
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
  data() {
    return {
      randomId: ""
    };
  },
  props: {
    list: {
      type: Array,
      default: () => ["Иванов", "Захаров", "Чернышева"]
    },
    nameSelector: {
      type: String,
      default: () => ""
    },
    size: {
      type: Number,
      default: () => 1
    },
    multiple: {
      type: Boolean,
      default: () => false
    }
  },
  methods: {
    isMultiple() {
      if (this.multiple) {
        let obj = document.getElementById(this.randomId);
        obj.setAttribute('multiple', '')
      }
    }
  },
  created() {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let rs = "";
    while (rs.length < 6) {
      rs += abc[Math.floor(Math.random() * abc.length)];
    }
    this.randomId = rs;
  },
    mounted() {
      this.isMultiple();
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
