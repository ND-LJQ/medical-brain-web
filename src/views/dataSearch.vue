<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-26 23:01:06
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-27 22:32:01
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="page-body">
    <div class="header">
      <olp-header-menu></olp-header-menu>
    </div>
    <div class="search-body">
      <div class="search-content">
        <div class="logo-box">
            <img src="../assets/images/headcolorful.png" alt="">
        </div>
          <div class="search-box">
            <div class="search-box-left">
              <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入要搜索的内容"
                @select="handleSelect"
                style="width: auto;"
                clearable="true"
              />
            </div>
            <div class="search-box-right">
              <button class="search-btn" >
                <el-icon><Search /></el-icon>
              </button>
            </div>
          </div>
          <div>

          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
import { onMounted, ref,reactive } from 'vue'

const state = ref('')



const links = reactive([])

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

onMounted(() => {
  links.value = loadAll()
})



</script>

<style lang="scss" scoped>


.page-body{
  position: absolute;
  display: flex;
  flex-direction: column;
  top:0;
  bottom: 0;
  width: 100%;
}


.search-body{
  display: flex;
  flex-direction: column ;
  justify-content: center;
  align-items: center;
  // background-color: black;
  width: 100%;
  flex-grow: 1; /* 在父元素高度是 auto 时撑满整个空间 */
  .search-content{

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;

    .logo-box{
      position: relative;
      width: 15%;
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