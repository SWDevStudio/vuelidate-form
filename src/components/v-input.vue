<template>
  <div class="form__item">
    <label :for="inputId"><slot /></label>
    <font-awesome-icon icon="exclamation-circle" class="form__icon-error" />
    <input :id="inputId" type="text" class="form__input" />
  </div>
</template>

<script>
export default {
  name: "v-input",
  data() {
    return {
      inputId: ""
    };
  },
  mounted() {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let rs = "";
    while (rs.length < 6) {
      rs += abc[Math.floor(Math.random() * abc.length)];
    }
    this.inputId = rs;
  }
};
</script>
