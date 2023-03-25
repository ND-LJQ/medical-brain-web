<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 16:11:24
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 17:04:20
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->

<template>
  <div class="header">
    <olp-header-menu></olp-header-menu>
  </div>
  <div>

  <div class="file-list">
    <div class="file-tools"></div>

    <div class="list-body"></div>
  </div>

  </div>
</template>

<script setup>
import OlpHeaderMenu from '../components/common/OlpHeaderMenu/OlpHeaderMenu.vue'
</script>

<style lang="scss" scoped>
.header{
  background-color: #fff;
}
</style>