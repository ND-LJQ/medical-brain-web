<!--
 * @Author: ND_LJQ
 * @Date: 2022-05-01 19:52:22
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-04 09:05:48
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="header-button-group">
    <el-button-group class="ml-4 header-button">
      <el-button
        @click="loginHandler"
        type="primary"
        class="login-button"
        v-if="!loginType"
        style="
          margin-left: 1px;
          margin-right: 1px;
          border: 1px solid !important;
          border-radius: var(--el-border-radius-base);
          z-index: 0;
        ">登录</el-button>

      <!-- <el-switch
        v-model="theme"
        inline-prompt
        :active-icon="mySun"
        :inactive-icon="myMoon"
        style="--el-switch-on-color: #f2f2f2; --el-switch-off-color: #2c2c2c"
      /> -->

      <div class="user-avatar" v-if="loginType" style="margin-left: 10px">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div style="display: flex; justify-content: center; align-items: center">
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>我的空间</el-dropdown-item>
              <el-dropdown-item>我的提交</el-dropdown-item>
              <el-dropdown-item>我的设置</el-dropdown-item>
              <el-dropdown-item @click="logoutHandler">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-button-group>
  </div>

  <olp-login-and-regiseter :model-value="modelVisible" @handle-check="handleCheck" />
</template>

<script lang="ts" setup>
import {ref,onMounted,computed} from 'vue'
// import myMoon from './components/MyMoon.vue';
// import mySun from './components/MySun.vue';
import OlpLoginAndRegiseter from '../../../OlpLoginAndRegiseter/OlpLoginAndRegiseter.vue'
import { useDark, useToggle, useStorage } from '@vueuse/core';
import { watchEffect } from 'vue'
import { useGetters} from '../../../../../utils/useMapper';
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore('userStore');
const loginType = ref(false)
const userStore = useGetters('userStore', ['token']);
const modelVisible = ref(false);
const router = useRouter()
const isDark = ref(useDark());

// 如果需要更细粒度的指定样式，可以这样写
/* const isDark = ref(useDark({
    selector: 'body',
    attribute: 'color-scheme',
    valueDark: 'dark',
    valueLight: 'light',
}))*/

const toggleDark = useToggle(isDark);


// 切换按钮 localStorage 中的值，保证刷新不重置
const vueuseColorScheme = useStorage('vueuse-color-scheme', '');
const theme = vueuseColorScheme.value === 'dark' ? ref(false) : ref(true);

const token = ref(localStorage.getItem('token'));

console.log(token.value);

watchEffect(() => {
  token.value = localStorage.getItem('token');
  console.log(token.value);
  
  if (token.value !== null || token.value !== '' || token.value !==  undefined) {
    loginType.value = true;
  } else {
    loginType.value = false;
  }
});

const loginHandler = () => {
  modelVisible.value = true;
  // console.log(modelVisible.value);
};

const handleCheck = (param: any) => {
  modelVisible.value = param;
};


const logoutHandler = () =>{
  window.localStorage.removeItem("token");
  loginType.value = false;
  router.push('/')
}

onMounted(()=>{
  if (token.value !== null || token.value !== '' || token.value !==  undefined) {
    loginType.value = true;
  } else {
    loginType.value = false;
  }
})
</script>

<style lang="scss" scoped>
.header-button-group {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.header-button {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.el-button-group {
  margin-right: 10px;
}

.el-button--primary {
  color: var(--el-color-primary);
  background-color: #fff;
  font-weight: 700;
}

.login-button {
  transition: all 0.3s;
}

.login-button:hover {
  color: #fff;
  background-color: var(--el-color-primary);
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
