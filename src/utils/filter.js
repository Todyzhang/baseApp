import Vue from "vue"

/**
 * 保留2位小数
 */
Vue.filter("keep2Decimal",function(value){
  return isNaN(parseFloat(value))?"":(+value).toFixed(2);
});
