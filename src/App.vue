<template>
  <form action="" class="form">
    <div class="form__group">
      <v-input id-input="last_name" :required="true">
        *Фамилия
      </v-input>
      <v-input id-input="first_name" :required="true">
        *Имя
      </v-input>
      <v-input id-input="middle_name">
        Отчество
      </v-input>
      <v-input type="date" id-input="date">
        Дата рождения
      </v-input>
      <v-input :phone="true" :min-length="11" :max-length="11" id-input="phone">
        *Номер телефона
      </v-input>
      <v-radio name="gender" :list="['муж', 'жен']">
        Пол
      </v-radio>
      <v-selector
        :list="['VIP', 'Проблемные', 'ОМС']"
        :multiple="true"
        :size="3"
        name-selector="clientGroup[]"
        :required="true"
      >
        *Группа клиентов
      </v-selector>
      <v-selector name="doctor" :selected="1">Лечащий врач</v-selector>
      <v-checkbox>Не отправлять СМС</v-checkbox>
    </div>
  </form>
</template>

<script>
import VInput from "./components/v-input";
import VRadio from "./components/v-radio";
import VSelector from "./components/v-selector";
import VCheckbox from "./components/v-checkbox";

export default {
  name: "App",
  components: { VCheckbox, VSelector, VRadio, VInput }
};
</script>

<style lang="sass">
.form
  width: 400px
  margin: 0 auto
  background: $color__background
  padding: 5px
  &__group
    border: 1px solid $color__border
    border-radius: 5px
    padding: 10px 15px 10px 7px
</style>
