/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-02 07:14:54
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 20:53:33
 * @Description: mapState
 * @Email: Rv_Jiang@outlook.com
 */
import useMapper from './useMapper';
import { mapState } from 'vuex';

const useState = (namespace, mapper) => {
  return useMapper(mapState, namespace, mapper);
};

export default useState;
