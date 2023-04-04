<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-26 23:01:06
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-04 09:12:17
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="page-body">
    <div class="header">
      <olp-header-menu></olp-header-menu>
    </div>
    <div class="search-body">
      <div class="search-content" v-if="inputPositionShowFlag">
        <div class="logo-box">
            <img src="../assets/images/braincoloful.svg" alt="">
        </div>
          <div class="search-box">
            <div class="search-box-left">
              <el-autocomplete
                v-model="inputValue"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入要搜索的内容"
                @select="handleSelect"
                style="width: auto;"
                :select-when-unmatched= true
                @change="searchBtnClick()"
              />
            </div>
            <div class="search-box-right">
              <button class="search-btn" @click="searchBtnClick">
                <el-icon><Search /></el-icon>
              </button>
            </div>
          </div>
          <div>

          </div>
      </div>


      <div class="search-head-content" v-if="!inputPositionShowFlag">
        <div class="logo-box">
            <img src="../assets/images/braincoloful.svg" alt="">
        </div>
          <div class="search-box">
            <div class="search-box-left" >
              <div style="width: 100%;height: 100%;">
                <el-autocomplete
                v-model="inputValue"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入要搜索的内容"
                @select="handleSelect"
                :autofocus="!inputPositionShowFlag"
                style="height: 100%;"
                :select-when-unmatched=true
                @keydown.enter="searchBtnClick"
              />
              </div>
            </div>
            <div class="search-box-right">
              <button class="search-btn" @click="searchBtnClick">
                <el-icon><Search /></el-icon>
              </button>
            </div>
          </div>
      </div>




      <div class="search-result-box" v-if="!inputPositionShowFlag">
        <div class="search-result-left">
              <transition-group name="search-result" tag="div" class="result-list">
                <div class="result-item" v-for="(item,index) in resultList.hits" @click="toSearchResult(item)">

                  <div class="item-content">

                    <div class="result-title">
                      <span>{{ item._source.filename }}</span>
                    </div>
                    
                    <div class="item-type" style="color:rgb(96, 100, 105);">
                      <el-tag class="ml-2" type="info">{{item._source.c_type}}资源</el-tag>  第{{ item._source.page }}页 第{{ item._source.amount }}段
                    </div>

                    <div class="result-content">
                        <div class="img-box">
                              <!-- <img src="../assets/images/brain.svg" alt=""> -->
                        </div>
                        <div class="content-text" v-html="item.highlight.text[0]">
                        </div>
                    </div>

                    <div class="item-matching-rate">
                        <div style="display: flex;justify-content: center;align-items: center;">
                          <el-tag>匹配度:{{ numberFomat(item._score) }}%</el-tag>
                          <el-tag style="margin-left: 5px;">
                            <el-icon><Pointer /></el-icon>:{{ item._source.good }}
                          </el-tag>
                          <el-tag style="margin-left: 5px;">
                            <el-icon><View /></el-icon>:{{ item._source.scan }}
                          </el-tag>
                        </div>
                    </div>
                  
                  </div>
                </div>
              </transition-group>       
        </div>
        <!-- <div class="search-result-right">
          之后可以添加搜索热门榜单
        </div> -->
      </div>

    
      


    </div>
  </div>

  <el-backtop :bottom="40" />
</template>

<script setup>
import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
import { onMounted, ref,reactive,computed,watch   } from 'vue'
import { SearchAPI } from '../network/index'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const inputValue = ref('')





const inputPositionShowFlag = ref(true)

watch(inputValue,(newValue,oldValue)=>{
  inputPositionShowFlag.value = false
})

const links = reactive([])



const resultList = reactive({})
  

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}


const searchResultList = reactive([{}])


let timeout = null
const querySearchAsync = (queryString, cb) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item) => {
  console.log(item)
}

const numberFomat = (num) =>{
  let realVal = parseFloat(num).toFixed(2)
  return realVal
}

//搜索按钮点击
const searchBtnClick = async () =>{
    //请求接口
   await SearchAPI.getResultList(inputValue.value).then(res=>{
       resultList.total = res.total
       resultList.max_score = res.total
       resultList.hits = res.hits
    }).catch((err)=>{
      console.log(err);
    })
}

//前往搜索的内容
const toSearchResult =  (item) => {
  router.push({ name: 'viewpdf', query: { fileName:item._source.filename,pageIndex:item._source.page,method:"search" }  });
};


onMounted(() => {
  links.value = loadAll()
  const inputBox = document.querySelector(".el-autocomplete")
  console.log(inputBox);
  
})



</script>

<style lang="scss" scoped>


.page-body{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top:0;
  bottom: 0;
  width: 100%;
}


.search-body{
  display: flex;
  flex-direction: column ;
  // justify-content: center;
  // align-items: center;
  // background-color: black;
  width: 85%;
  flex-grow: 1; /* 在父元素高度是 auto 时撑满整个空间 */
  .search-content{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-35%);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;

    .logo-box{
      position: relative;
      width: 18%;
      margin-bottom: 1%; 
      transform-origin:center bottom;
      animation: logoChange 1s ease-in-out 0s ;
      img{
        width: 100%;
      }
    }

    .search-box{
      display: flex;
      justify-content: center;
      align-items: center;
      transform-origin: center;
      animation: searchChange 1s ease-in-out 0s;
      .search-box-left{
        height: 100%;
      }

      :deep(.el-autocomplete){
        height: 100%;
      }

      :deep(.el-input){
        width: 50vw;
          border-radius: 8px 0 0 8px;
          border-right-style: none;
          padding:0;
          height: 100%;
          box-sizing: border-box; /* 设置 box-sizing 为 border-box 避免 padding 影响元素的实际高度 */
          outline: none;
      }


      :deep(.is-focus)
      {
        box-shadow: 0 0 0 0 ;
      }

      :deep(.el-input__wrapper){
        border-radius: 8px 0 0 8px;
        border: 0 0 0 0;
      }

      :deep(.el-input:focus-within){
        border: 2px  solid rgb(78, 110, 242);
        border-right-style: none;
      }

      .search-box-right{
        position: relative;
        button{
          position: relative;
          border-radius: 0 8px 8px 0;
          border: 2px  solid rgb(78, 110, 242);
          outline: none;
          z-index: 5;
        }

        button:not(:focus),
        button:not(:hover) {
          background-color: transparent;
          border-color: rgb(78, 110, 242);
          transition: all 0.3s ease;
        }

        button:focus,
        button:hover{
          color: #fff;
          background-color: rgb(78, 110, 242);
          border: 2px  solid rgb(78, 110, 242);
          transition: all 0.3s ease;
        }
      }
    }
  }



  .search-head-content{
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 50%;
    .logo-box{
      width: 10%;
      margin: 0 10px 0 10px;
      img{
        width: 100%;
      }
    }
    .search-box{
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      width: 30%;
      flex-grow: 1;
      .search-box-left{
        flex-grow: 1;
      }

      .search-box-right{
        button{
          position: relative;
          border-radius: 0 8px 8px 0;
          border: 2px  solid rgb(78, 110, 242);
          outline: none;
          z-index: 5;
        }

        button:not(:focus),
        button:not(:hover) {
          background-color: transparent;
          border-color: rgb(78, 110, 242);
          transition: all 0.3s ease;
        }

        button:focus,
        button:hover{
          color: #fff;
          background-color: rgb(78, 110, 242);
          border: 2px  solid rgb(78, 110, 242);
          transition: all 0.3s ease;
        }
      }
    }

    :deep(.el-autocomplete){
      width: 100%;
    }

    :deep(.el-input){
      height: 100%;
      border-radius: 8px 0 0 8px;
      border-right-style: none;
      padding:0;
      box-sizing: border-box; /* 设置 box-sizing 为 border-box 避免 padding 影响元素的实际高度 */
      outline: none;
    }

    :deep(.is-focus)
      {
        box-shadow: 0 0 0 0 ;
      }

      :deep(.el-input__wrapper){
        border-radius: 8px 0 0 8px;
        border: 0 0 0 0;
      }

      :deep(.el-input:focus-within){
        border: 2px  solid rgb(78, 110, 242);
        border-right-style: none;
      }

  }


}


.search-result-box{
  display:flex ;
  flex-grow: 1;
  justify-content: flex-end;
  // background-color: black;
  margin-top:20px ;

  .search-result-left{
    width: 100%;
    // background-color: blue;
    .result-list{
      width: 100%;
      height: 100%;
      .result-item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center ;
        text-align: left;
        width: 100%;
        height: 220px;
        // background-color: pink;
        margin-bottom: 10px;
        border-bottom: 1px dashed rgb(222, 222, 222);
        cursor: pointer;
        .item-content{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 95%;
          width: 95%;
          

            .result-title{
              display: flex;
              align-items: center;
              font-size: 1.1vw;
              font-weight:600 ;
              height: 30%;
              overflow: hidden;
              white-space: nowrap; //（设置文字在一行显示，不能换行）
              text-overflow: ellipsis;//（规定当文本溢出时，显示省略符号来代表被修剪的文本）
              color: rgb(61, 123, 198);
            }

            .item-type{
              margin:10px 0 10px 0 ;
              height: 20%;
            }

            .result-content{
              height: 30%;
              .content-text{
                height: 100%;
                -webkit-line-clamp: 3;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: rgb(147, 146, 161);
              }
              .img-box{
              // height: 50px;
               img{
                  height: 100%;
              }
            }
          }

          .item-matching-rate{
            height:10%;
            display: flex;
            justify-content: flex-end;
            margin: 10px 0 10px 0;
          }


        }
      }
      
    }
  }
  // .search-result-right{
  //   width: 40%;
  //   background-color: skyblue;
  // }
}


.search-result-enter-active,
.search-result-leave-active {
  transition: all 0.3s;
}

.search-result-enter,
.search-result-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


@keyframes searchChange {
  0%{
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  }
}


@keyframes logoChange {
  0%{
    transform: scale(2);
    opacity: 0.1;
  }
  20%{
    opacity: 0.3;
  }
  40%{
    opacity: 0.5;
    transform: scale(0.8);
  }
  60%{
    opacity: 0.7;
  }
  80%{
    opacity: 0.9;
    transform: scale(1.3);
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }


}

</style>