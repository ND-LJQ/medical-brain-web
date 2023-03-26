/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-02 07:15:42
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 20:36:36
 * @Description: mapGetters
 * @Email: Rv_Jiang@outlook.com
 */
import useMapper from './useMapper';
import { mapGetters } from 'vuex';

function useGetters(namespace, mapper) {
  return useMapper(mapGetters, namespace, mapper);
}
export default useGetters;
