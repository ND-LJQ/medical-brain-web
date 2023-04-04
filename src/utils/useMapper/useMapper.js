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

	// add deleteItem method to storeState
	storeState.deleteItem = function (item) {
		if (Array.isArray(this.items)) {
			const index = this.items.indexOf(item);
			if (index > -1) {
				this.items.splice(index, 1);
			}
		} else if (typeof this.items === 'object') {
			delete this.items[item];
		}
	};

	storeState.useUpdate = function (item, newValue) {
		if (Array.isArray(this.items)) {
			const index = this.items.indexOf(item);
			if (index > -1) {
				this.items.splice(index, 1, newValue);
			}
		} else if (typeof this.items === 'object') {
			this.items[item] = newValue;
		}
	};

	Object.keys(storeFns).forEach((key) => {
		const fn = storeFns[key].bind({ $store: store });
		storeState[key] = computed(fn);
	});

	return storeState;
}
