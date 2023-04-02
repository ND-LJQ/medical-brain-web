<!--
 * @Author: ND_LJQ
 * @Date: 2023-04-01 22:25:00
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-01 22:29:12
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="loading-mask" v-show="isLoading">
    <div class="loading-spinner"></div>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { ref } from 'vue';
const isLoading = ref(false);

</script>

<style lang="scss" scoped>
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>