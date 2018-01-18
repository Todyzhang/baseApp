import Vue from "vue"

const NUMBER_REG = /\D/g,
  FLOAT_REG = /[^0-9\.]|(^\.+)/g;
/**
 * v-enter-number限制用户只能输入数字，并且离开光标时输入框为空时会强制值为1。
 * 指令的值表示限制输入数字的位数，不传、传入数值小于0和传入非数字都表示不限制输入位数。
 * e.g <input v-enter-number="3" />
 * @type {DirectiveOptions}
 */
export const enterNumber = Vue.directive("enterNumber", {
  bind(el, binding) {
    let val = binding.value;
    if (val > 0) {
      el._limit = val
    }
    el._preValue = val;
    el._blurEvent = function () {
      let val = this.value;
      if (!val) {
        this.value = 1;
      }
      this._triggerInput();
    };
    el._triggerInput = function () {
      mui.trigger(this, "input");
    };
    el.addEventListener("blur", el._blurEvent);
  },
  update(el) {
    let val = "" + el.value;
    //去掉非数字及头部0
    val = val.replace(NUMBER_REG, "").replace(/^0+/, "");
    NUMBER_REG.lastIndex = 0;//全局匹配正则表达式lastIndex置0
    if (el._limit) {
      if (new RegExp("9{" + el._limit + "}").test(el._preValue) && val - el._preValue > 0) {
        val = el._preValue;
      } else if (val.length > el._limit) {
        val = val.substr(0, el._limit);
      }
    }
    el.value = el._preValue = val;
    el._triggerInput();
  },
  unbind(el) {
    el.removeEventListener("blur", el._blurEvent);
  }
});

export const enterFloat = Vue.directive("enterFloat", {
  bind(el, binding) {
    let val = binding.value;
    if (val > 0) {
      el._limit = val
    }
    el._blurEvent = function () {
      let val = this.value;
      if (!val) {
        this.value = 1;
      }
      this._triggerInput();
    };
    el._triggerInput = function () {
      this.dispatchEvent(new Event("input"));
    };
    el.addEventListener("blur", el._blurEvent);
  },
});
