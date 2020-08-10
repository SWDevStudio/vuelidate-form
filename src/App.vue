<template>
  <form @submit.prevent="submit" class="form">
    <div class="form__group">
      <h2 class="form__title">Форма</h2>
      <v-input id-input="last_name" required only-letters ref="last_name">
        *Фамилия
      </v-input>
      <v-input id-input="first_name" required only-letters ref="first_name">
        *Имя
      </v-input>
      <v-input id-input="middle_name" only-letters ref="middle_name">
        Отчество
      </v-input>
      <v-input type="date" id-input="date">
        Дата рождения
      </v-input>
      <v-input
        :phone="true"
        required
        :min-length="10"
        :max-length="10"
        id-input="phone"
        ref="phone"
      >
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
        ref="clientGroup"
        id-selector="clientGroup"
      >
        *Группа клиентов
      </v-selector>
      <v-selector name="doctor" :selected="1">
        Лечащий врач
      </v-selector>
      <v-checkbox>
        Не отправлять СМС
      </v-checkbox>
    </div>
    <div class="form__group">
      <h2 class="form__title">
        Адрес
      </h2>
      <v-input only-numbers ref="index" id-input="index">
        Индекс
      </v-input>
      <v-input only-letters ref="country" id-input="country">
        Страна
      </v-input>
      <v-input only-letters ref="region" id-input="region">
        Область
      </v-input>
      <v-input required only-letters ref="city" id-input="city">
        *Город
      </v-input>
      <v-input id-input="street">
        Улица
      </v-input>
      <v-input id-input="home">
        Дом
      </v-input>
    </div>
    <div class="form__group">
      <h2 class="form__title">
        Документ
      </h2>
      <v-selector
        :list="['Паспорт', 'Свидетельство о рождении', 'Вод удостоверение']"
        name="document"
        ref="type-document"
        id-selector="type-document"
        required
      >
        *Тип документа
      </v-selector>
      <v-input
        only-numbers
        :min-length="4"
        :max-length="4"
        ref="series"
        id-input="series"
      >
        Серия
      </v-input>
      <v-input
        only-numbers
        :min-length="6"
        :max-length="6"
        ref="number"
        id-input="number"
      >
        Номер
      </v-input>
      <v-input>
        Кем выдан
      </v-input>
      <v-input required ref="date-issue" id-input="date-issue" type="date">
        *Дата выдачи
      </v-input>
    </div>
    <div class="form__message" v-if="buttonStatus === 'ERROR'">
      В вашей форме есть ошибки, пожалуйста исправьте их
    </div>
    <div class="form__message" v-if="buttonStatus === 'PENDING'">
      Отправили данные на сервер ожидаем ответа
    </div>
    <div class="form__message" v-if="buttonStatus === 'OK'">
      Мы получили ваши данные и добавили вас в базу
    </div>
    <div class="form__submit">
      <button type="submit" class="submit">Отправить данные</button>
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
  components: { VCheckbox, VSelector, VRadio, VInput },
  data() {
      return {
          buttonStatus: ''
      }
  },
  methods: {
    submit() {
      let invalid = false
      for (let item in this.$refs) {
        if (this.$refs[item].check()[0]) {
            invalid = true
        }
      }
      if (invalid) {
         this.buttonStatus = 'ERROR'
         return
      }
      this.buttonStatus = 'PENDING'
      setTimeout(() => this.buttonStatus = 'OK', 5000)
    }
  }
};
</script>

<style lang="sass">
.form
  max-width: 400px
  margin: 0 auto
  background: $color__background
  padding: 5px
  position: relative
  &__title
    font-family: 'Rubik', 'sans-serif'
    text-align: center
    margin-top: 0
  &__group
    border: 1px solid $color__border
    border-radius: 5px
    padding: 10px 15px
    margin-bottom: 25px
  &__message
    +font()
    text-align: center
    margin-bottom: 25px
  &__submit
    display: flex
    justify-content: center
.submit
  +font()
  border-radius: 5px
  border-color: $color__border
  background: $color__background


</style>
