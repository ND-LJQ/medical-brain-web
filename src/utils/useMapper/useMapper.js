/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-02 07:17:32
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 20:53:01
 * @Description: 对Vuex中mapper封装
 * @Email: Rv_Jiang@outlook.com
 */

import { computed } from 'vue';
import store from '../../store/index';

export default function useMapper(mapperFn, namespace, mapper) {
  let storeFns;
  if (namespace) {
    storeFns = mapperFn(namespace, mapper);
  } else {
    storeFns = mapperFn(mapper);
  }

  const storeState = {};
  Object.keys(storeFns).forEach(key => {
    const fn = storeFns[key].bind({ $store: store });
    storeState[key] = computed(fn);
  });

  return storeState;
}