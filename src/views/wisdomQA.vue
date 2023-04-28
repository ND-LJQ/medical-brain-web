<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-30 19:37:28
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-28 07:28:06
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
        <div class="introduceBox" v-show="introduceShowFlag">
          <div class="introduce-content">
              <div class="introduce-logo">
                <span class="banner_title">学术大脑</span>
              </div>
              <div class="introduce-function">
                <div class="function-item" v-for="item in functionList">
                    <div class="item-logo">
                        <div class="function-item-logo">
                          <el-icon size="30">
                              <component :is="item.icon" />
                          </el-icon>
                        </div>
                        <div  class="function-item-title">
                          <span>
                            {{ item.title }}
                          </span>
                        </div>
                    </div>
                    <div class="item-introduce">
                      <div class="introduce-item" v-for="introduces in item.introduceList">
                        <div class="introduce-item-content">
                            <span>{{ introduces.text }}</span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <chatModule @dropDownValueChange="userInput" ></chatModule>
      </div>
    </div>
  </div>
</template>

<script setup>
import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
import Typed from 'typed.js'
import {onMounted,reactive,ref} from 'vue'
import chatModule from '../components/common/chatModule/index.vue'
const introduceShowFlag = ref(true)

const userInput = (flag) =>{
  introduceShowFlag.value = !flag
}

const functionList = reactive([
  {
    icon:"Sunny",
    title:"解析高性能",
    introduceList:[
      {
        text:"采用知识图谱的技术，让回答更加符合用户的预期"
      },
      // {
      //   text:"Got any creative ideas for a 10 year old’s birthday?"
      // },{
      //   text:"How do I make an HTTP request in Javascript?"
      // }
    ]
  },
  {
    icon:"Trophy",
    title:"匹配更精准",
    introduceList:[
      {
        text:"高性能搜索引擎，让答案匹配更加精准。"
      },
      // {
      //   text:"Got any creative ideas for a 10 year old’s birthday?"
      // },{
      //   text:"How do I make an HTTP request in Javascript?"
      // }
    ]
  },
  {
    icon:"Lock",
    title:"回答更专业",
    introduceList:[
      {
        text:"严格按照用户上传的论文进行分析，匹配符合度最高回答。"
      },
      // {
      //   text:"Got any creative ideas for a 10 year old’s birthday?"
      // },{
      //   text:"How do I make an HTTP request in Javascript?"
      // }
    ]
  }
])



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

.header{
  z-index: 1;
}

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
  // background: blue;
}

.question-content{
  width: 65%;
  height: 100%;
  margin-top: 10px;
  // background-color: pink;
}

.introduceBox{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  // background-color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  // z-index: -1;
}

.introduce-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60%;
  // background-color: #fff;
}


.introduce-logo{
  width: 100%;
  height: 20%;
  // background-color: pink;
  .banner_title{
    background-image: linear-gradient(to right, rgb(7, 135, 199), rgb(0, 162, 233));
    -webkit-background-clip: text;
    color: transparent;
    font-size:2.5vw;
    font-weight: 600;
  }
  
}

.introduce-function{
  display: flex;
  justify-content: space-around;
  height: 80%;
  width: 100%;
  // background-color: skyblue;
}

.function-item{
  width: 32%;
  display: flex;
  flex-direction: column;
}

.item-introduce{
  flex-grow:1 ;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.introduce-item{
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  font-weight:600 ;
  height: 30%;
  background-color: #fff;
  border-radius:5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: rgb(247, 247, 247);
  transition: all .5s;
  cursor: pointer;
}

.introduce-item:hover{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

.introduce-item-content{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  span{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  
}

.function-item-logo{
  :deep(.el-icon){
    font-weight: 600;
  }
}

.function-item-title{
  margin:1% 0 1% 0;
  font-weight: 600;
}

@media (max-width: 768px) {
  .introduce-function{
    flex-direction: column;
    align-items: center;
  }

  .function-item{
    flex-grow: 1;
    width: 100%;
    margin-top:10px ;
  }

  .introduce-logo{
      height: 10%;
      .banner_title{
        font-size: 7.5vw;
      }
  }

}

</style>