<template>
  <form action="" class="form">
    <div class="form__group">
      <h2 class="form__title">Личные данные</h2>
      <v-input id-input="last_name" required only-letters>
        *Фамилия
      </v-input>
      <v-input id-input="first_name" required only-letters>
        *Имя
      </v-input>
      <v-input id-input="middle_name" only-letters>
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
        multiple
        :size="3"
        name-selector="clientGroup[]"
        required
      >
        *Группа клиентов
      </v-selector>
      <v-selector name="doctor" :selected="1">Лечащий врач</v-selector>
      <v-checkbox>Не отправлять СМС</v-checkbox>
    </div>
    <div class="form__group">
      <h2 class="form__title">Адрес</h2>
      <v-input only-numbers>Индекс</v-input>
      <v-input only-letters>Страна</v-input>
      <v-input only-letters>Область</v-input>
      <v-input required>*Город</v-input>
      <v-input>Улица</v-input>
      <v-input>Дом</v-input>
    </div>
    <div class="form__group">
      <h2 class="form__title">Паспорт</h2>
      <v-selector
        :list="['Паспорт', 'Свидетельство о рождении', 'Вод удостоверение']"
        :selected="1"
        name="document"
      >
        *Тип документа
      </v-selector>
      <v-input only-numbers :min-length="4" :max-length="4">Серия</v-input>
      <v-input only-numbers :min-length="6" :max-length="6">Номер</v-input>
      <v-input>Кем выдан</v-input>
      <v-input required>*Дата выдачи</v-input>
    </div>
    <button>Parapam</button>
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
  &__title
    font-family: 'Rubik', 'sans-serif'
    text-align: center
    margin-top: 0
  &__group
    border: 1px solid $color__border
    border-radius: 5px
    padding: 10px 15px 10px 7px
    margin-bottom: 25px
</style>
