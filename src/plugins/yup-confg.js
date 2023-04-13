import { defineCustomElement } from "vue";
import { setLocale } from "yup";

export default defineCustomElement(() => {
  setLocale({
    mixed: {
      required: "Заполните это поле, чтобы продолжить",
    },
    string: {
      email: "Электронная почта не верна",
      min: "Слишком короткое значение",
      max: "Значение слишком длинное",
    },
    number: {
      min: "Недопустимое значение (должно быть больше или равно ${min})",
      max: "Недопустимое значение (должно быть меньше или равно ${max})",
    },
  });
});