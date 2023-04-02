/*
 * @Author: ND_LJQ
 * @Date: 2023-03-25 09:34:45
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 14:14:54
 * @Description:
 * @Email: ndliujunqi@outlook.com
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import ./src/assets/styles/global.scss;`,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			// 这里可以添加更多的别名配置
		},
	},
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				//生产环境时移除console.log()
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
});
