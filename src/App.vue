<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 09:34:45
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-27 12:55:59
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<script setup>
</script>

<template> 
  <router-view />
</template>

<style lang="scss" >
#app {

  width: 100vw;
  height: 100vh;
  padding: 0!important;
  margin: 0!important;

  // color: var(--el-text-color-primary);
  // background-color: $bg-color;

  /* 全局修改el-card样式 */
  // .el-card {
  //   box-shadow: $box-shadow-default;
  // }

  // icon与文本对齐
  .el-tag {
    .el-tag__content {
      display: flex;
      align-items: center;
    }
  }

  .el-empty {
    --el-empty-fill-color-1: var(--el-color-primary-light-9);
    --el-empty-fill-color-2: var(--el-color-primary-light-9);
    --el-empty-fill-color-5: var(--el-color-primary-light-8);
    --el-empty-fill-color-7: var(--el-color-primary-light-7);
    --el-empty-fill-color-8: var(--el-color-primary-light-7);
    --el-empty-fill-color-9: var(--el-color-primary-light-5);
  }
}

body {
    margin: 0;
    padding: 0;
    width: 100vw;
  overflow-x: hidden;
}

//修改滚动条样式
::-webkit-scrollbar {
  width: 10px;
  height: 1px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: none;
  background: rgb(217, 217, 217);
  -webkit-box-shadow: none;
  box-shadow: none;

  &:hover {
    background: rgb(168, 168, 168);
  }
}

img {
  user-select: none;
  // draggable: false;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 10px;
  // background: #06b0b9;
  -webkit-box-shadow: none;
}

.header{
  width: 100vw;
  // margin-top:20px;
}

body{
  margin: 0;
  padding: 0;
}
</style>
