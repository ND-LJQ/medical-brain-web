<!--
 * @Author: ND_LJQ
 * @Date: 2022-04-30 18:36:59
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-30 15:08:32
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <el-row :gutter="10">
    <el-col :span="5">
      <div class="logo-box" style="margin: 0;">
        <!-- 选择logo位置是左?中?右? -->
        <div class="content-left">
        </div>
        <div class="content-center" style="height: 100%;">
          <img src="../../../assets/images/logo1-removebg-preview.svg" alt="" style="height: 100%;">
        </div>
        <div class="content-right">
          <span class="text-gradient">医学大脑</span>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="menu-content" ref="menuContent">
        <el-menu
          :default-active="$route.path"
          class="el-menu-header"
          mode="horizontal"
          @select="handleSelect"
          :collapse="isCollapse.value"
        >
          <div class="flex-grow" />
          <!-- 递归动态菜单 -->
          <olp-menu-item :item-arr="itemArr" />
        </el-menu>
      </div>
    </el-col>
    <el-col :span="3">
      <olp-menu-button />
    </el-col>
  </el-row>
</template>

<script  setup>
import {reactive,ref,watch,nextTick,onMounted,onUnmounted} from 'vue'
import { useRouter } from 'vue-router';
import OlpMenuItem from './components/OlpMenuItem/OlpMenuItem.vue';

const router = useRouter();

const itemArr = reactive([
  {
    // 注意！注意！有children的菜单项，path不会使用的，所以path为什么都无所谓；没children的，即children的length等于0的，才会使用path属性做路由跳转
    name: '首页',
    sort: '1',
    icon: 'house',

    path: '/home',
    children: [],
  },
  {
    name: '数据上传',
    sort: '2',
    icon: 'Files',
    path: '/dataup',
    children: [],
  },
  {
    name: '数据搜索',
    sort: '3',
    icon: 'Search',
    path:'/datasearch',
    children: [],
  },
  {
    name: '知识图谱',
    sort: '4',
    icon: 'Cpu',
    path: '/knowledgemap',
    children: [],
  },
  {
    name: '智能问答',
    sort: '5',
    icon: 'ChatDotSquare',
    children: [],
  },
  {
    name: '团队',
    sort: '8',
    icon: 'user',
    path: '/team',
    children: [],
  },
  {
    name: '关于',
    sort: '9',
    icon: 'warning',
    children: [
      {
        name: '简介',
        sort: '9-1',
        icon: '',
        children: [],
      },
      {
        name: '开发者',
        sort: '9-2',
        icon: '',
        children: [],
      },
    ],
  },
]);
const activeIndex = ref('');
// 动态检测当前路由修改导航栏激活项
watch(
  () => router.currentRoute.value,
  routerInstance => {
    let index = '';
    let routerPath = routerInstance.meta?.title;
    if (routerPath != null) {
      itemArr.forEach(item => {
        if (item.path?.substring(1) === routerPath) {
          index = '/' + routerPath;
        }
      });
    }

    activeIndex.value = index;
  },
  { immediate: true, deep: true }
);

const handleSelect = (key, keyPath) => {
  router.push({ path: key });
};

const isCollapse = ref(false);
const handleOpen = () => {
  isCollapse.value = false;
};
const handleClose = () => {
  isCollapse.value = true;
};

const menuContent = ref();

const findC = (arr1) => {
  if (
    itemArr.filter(() => {
      return arr1.forEach(item => {
        if (
          itemArr.find(function (items) {
            return items.icon === item.icon;
          }) != undefined
        ) {
          return true;
        } else {
          return false;
        }
      });
    }).length == arr1.length
  ) {
    return true;
  }

  return false;
};

const isHas = (newWidth, popItem, popArr, omit) => {
  if (
    itemArr.find(function (popArr) {
      return popArr.icon === 'MoreFilled';
    }) != undefined
  ) {
    if (newWidth == 1000) {
      console.log('我怕被触发了');
    }
  } else {
    popItem = itemArr.pop();
    omit.children.unshift(popItem);
    popArr.push(popItem);
    itemArr.push(omit);
  }
};

const getWidth = () => {
  nextTick(() => {
    if (menuContent.value) {
      //div容器获取tableBox.value.clientWidth
      let newWidth = menuContent.value.clientWidth;
      // width.value = (newWidth - 450) / 2;

      if (newWidth <= 1100) {
        const omit = {
          name: '',
          sort: '10',
          icon: 'MoreFilled',
          children: [],
        };

        let popItem = null;
        const popArr = [];
      }
    }
  });
};




    const  handleResize = () => {
      isCollapse.value = window.innerWidth < 768;
    }

onMounted(() => {
  getWidth();
  window.addEventListener('resize', getWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', getWidth);
});
</script>

<style lang="scss" scoped>
ul {
  border-bottom: 0;
}

// .el-menu{
  
// }

:deep(.el-menu),
:deep(.el-menu-item), 
:deep(.el-menu-item:focus),
:deep(.el-menu-item:hover)
{
    background-color: transparent;
}




.logo-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  .content-right{
    .text-gradient{
      background-image: linear-gradient(to right, rgb(7, 135, 199), rgb(0, 162, 233));
      -webkit-background-clip: text;
      color: transparent;
      font-size:2.5vw;
      font-weight: 600;
    }
  }


  .head-body{
    position: fixed;
    width: 100%;
    
  }
}


</style>
