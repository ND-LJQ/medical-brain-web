/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-01 15:27:46
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 20:41:33
 * @Description: Storage工具封装类
 * @Email: Rv_Jiang@outlook.com
 */
const storage = window.localStorage;

export default {

  set(key, val) {
    storage.setItem(key, JSON.stringify(val));
  },

  /**
   * @description get value by localStorage
   * @param {string} key
   * @return {*}
   */
  get(key) {
    return JSON.parse(storage.getItem(key) || 'null');
  },

  /**
   * @description remove key from localStorage
   * @param {string} key
   * @return {*}
   */
  remove(key) {
    storage.removeItem(key);
  },

  /**
   * @description clear the localStorage
   * @param {*}
   * @return {*}
   */
  clearAll() {
    storage.clear();
  },
};
