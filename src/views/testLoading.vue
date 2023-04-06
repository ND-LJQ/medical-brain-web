<!--
 * @Author: ND_LJQ
 * @Date: 2023-04-04 17:49:07
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-06 14:56:04
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="mobile-menu">
    <div class="menu-header">
      <span class="logo">医学大脑</span>
      <button class="menu-toggle" @click="toggleCollapse">
        <i :class="[isCollapse ? 'el-icon-arrow-down' : 'el-icon-arrow-up']"></i>
      </button>
    </div>
    <el-menu :collapse="isCollapse" :default-active="$route.path" class="mobile-menu-items">
      <!-- 菜单项 -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true, // 是否折叠
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  }
}
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 9999;
}

.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.menu-toggle {
  border: none;
  background-color: transparent;
  outline: none;
  font-size: 20px;
}

.mobile-menu-items {
  padding-top: 50px;
}
</style>