import Vue from "vue"

const NUMBER_REG = /\D/g;

Vue.directive("enterNumber", {
  update: function (el,binding) {
    let val = "" + el.value,size=binding.value;
    if (val === "0") {
      val = 1;
    }
    el.value = val.replace(/\D/g, "").substr(0, size);
    el.dispatchEvent(new Event('input'));
  }
});
