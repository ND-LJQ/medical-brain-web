<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-30 19:37:28
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-31 10:22:09
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="question-page">
    <div class="header">
      <olp-header-menu></olp-header-menu>
    </div> 

    <div class="question-body">
      <div class="question-content">
        <chatModule></chatModule>
      </div>
    </div>
  </div>
</template>

<script setup>
import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
import Typed from 'typed.js'
import {onMounted} from 'vue'
import chatModule from '../components/common/chatModule/index.vue'





// const options = {
//   strings: [
//     'First test.',
//     'Second test, \nit will pause for three seconds. ^3000',
//     "Second test, \nthe last sentence will go back to 'Second test, ', \noh no, this is the third test. ^1000",
//     "It's going to start repeating.",
//   ],
//   typeSpeed: 50, // 打印速度
//   startDelay: 300, // 开始之前的延迟300毫秒
//   loop: true, // 是否循环
// };

// const typed = new Typed('#typed', options);

onMounted(()=>{
//   const testBody = document.querySelector(".question-body")
//   console.log(testBody);

  // const typed = new Typed('#typed', options);
})
</script>

<style lang="scss" scoped>

.question-page{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.question-body{
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  background: blue;
}

.question-content{
  width: 65%;
  height: 100%;
  background-color: pink;
}
</style>