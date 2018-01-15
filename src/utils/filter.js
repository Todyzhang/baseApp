import Vue from "vue"

/**
 * 保留2位小数
 */
Vue.filter("keep2Decimal", function (value) {
  return isNaN(parseFloat(value)) ? "" : (+value).toFixed(2);
});
/**
 * 返回小数位
 */
Vue.filter("twoDecimal", function (value) {
  return isNaN(parseFloat(value)) ? "00" : (+value).toFixed(2).split(".")[1];
});

/**
 * 数字千位分隔符
 * see:https://www.tuicool.com/articles/ArQZfui
 */
Vue.filter("miliFormat", function (num) {
  return num && num
    .toString()
    .replace(/^\d+/, (m) => m.replace(/(?=(?!^)(\d{3})+$)/g, ','));
});
