/*
 * @Author: ND_LJQ
 * @Date: 2023-03-25 09:34:45
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 09:57:59
 * @Description: 
 * @Email: ndliujunqi@outlook.com
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
                prependData: `@import ./src/assets/styles/global.scss;`
            }
        }
    }
})