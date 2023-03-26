<!--
 * @Author: ND_LJQ
 * @Date: 2022-04-30 18:36:59
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-26 10:29:45
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
          <svg t="1679718265769" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5073" width="64" height="64"><path d="M939.358266 559.445367c-0.599941-0.999902-1.299873-1.899814-2.099795-2.799727-20.797969-23.497705-35.696514-51.394981-48.295284-80.69212-18.298213-42.59584-15.298506-82.091983-15.898447-125.887706-0.499951-34.996582-10.798945-78.592325-22.797774-111.089152-20.198028-54.794649-55.994532-99.290304-99.790255-133.686944C679.483644 40.296065 581.093253 0 472.403867 0 255.625037 0 80.042183 159.884386 80.042183 357.165121c0 13.198711 1.899814 39.396153 1.899815 39.396152 1.399863 85.491651 28.897178 187.281711 106.28962 301.57055 0 0 0 0.09999 0.09999 0.09999 1.199883 2.399766 31.896885 48.995215 14.198614 132.587052-2.199785 10.398984-12.298799 26.997364-25.797481 42.095889-19.498096 21.697881-14.498584 55.794551 10.298994 71.193048 74.492725 46.395469 161.48423 74.992676 254.67513 79.792208l53.594766 0.09999c16.89835-0.799922 33.596719-2.399766 49.995117-4.699541 7.599258-1.099893 13.898643-6.199395 16.498389-13.498682 13.098721-36.996387 49.495166-117.088566 119.888292-117.088565h104.489796c14.298604 0 29.097158-4.799531 33.99668-6.499366 1.299873-0.499951 2.499756-0.999902 3.699639-1.699834 17.09833-10.498975 17.698272-38.29626 14.898545-60.894053-2.199785-17.498291 3.999609-34.796602 16.198418-47.495362 5.499463-5.699443 8.59916-11.598867 8.59916-16.698369v-2.199785c0-10.698955-13.598672-19.898057-33.796699-24.797579-1.299873-0.299971-1.099893-2.299775 0.299971-2.299775 9.999024 0 19.198125-2.699736 25.79748-7.099307 6.599356-4.39957 10.798945-10.498975 10.798946-17.29831V699.931647c0-0.799922-0.09999-1.599844-0.199981-2.399765-1.199883-8.59916-1.399863-17.398301 0.499951-25.997462 5.699443-26.297432 14.798555-67.79338 17.198321-67.99336 75.292647-2.799727 60.094131-35.996485 55.19461-44.095693zM808.771018 365.164339c-3.699639 15.898447-10.598965 30.297041-20.398008 42.695831-16.89835 21.29792-42.29587 36.596426-75.492627 45.295577-22.297822 5.899424-47.995313 8.899131-76.49253 8.89913-9.099111 0-17.398301-0.299971-24.397618-0.699931-12.998731 26.597403-34.296651 46.995411-62.593887 59.794161-28.897178 12.998731-60.094131 15.798457-81.092081 15.798457-3.099697 0-5.999414-0.09999-8.69915-0.099991-4.0996 11.298897-10.598965 34.09667-18.098233 78.292355-6.799336 39.896104-10.898936 76.59252-10.898936 76.992481l-1.299873 11.398887-7.699248 7.999219c-13.498682 13.898643-27.597305 20.997949-41.895908 20.997949-20.997949 0-35.296553-14.898545-41.095987-27.697295l-4.799531-10.598965 2.699736-11.498877 7.599258-31.796895c-6.099404-1.499854-14.398594-2.599746-21.39791-2.799727-46.79543-0.09999-79.292257-14.398594-96.390587-42.395859-8.49917-13.798652-11.598867-28.297237-12.098819-41.295968-14.398594-3.199688-26.197442-9.299092-35.896494-18.398203-20.597988-51.09501-31.396934-101.390099-32.296846-150.485304v-1.799824l-0.099991-1.799825c-0.699932-9.199102-1.799824-26.697393-1.799824-34.696611 0-38.796211 8.39918-76.49253 24.897569-112.089054 16.198418-34.796602 39.396153-66.093546 69.093252-93.190899 30.097061-27.397324 65.293624-48.995215 104.589787-64.093741C383.612538 71.992969 427.308271 63.993751 472.403867 63.993751c45.195586 0 88.991309 8.099209 130.087296 23.997656 38.796211 14.998535 73.592813 36.296455 103.489894 63.393809l1.699834 1.699834 3.399668 2.599746c37.696319 29.497119 64.293721 64.993653 79.192266 105.389708 10.898936 29.6971 18.498194 65.793575 18.798164 89.891222 0 4.0996 0.09999 8.199199 0.09999 12.298799-0.19998 0.599941-0.299971 1.199883-0.399961 1.899814z" p-id="5074" fill="#0a2fc6"></path><path d="M635.487941 197.480715c0 35.596524-28.797188 64.493702-64.493702 64.493702-25.797481 0-47.795332-15.198516-58.194317-36.996388l-133.186994 58.794259c2.799727 5.699443 4.999512 11.698858 6.599356 17.898252l32.096865-0.899912c3.799629-15.198516 17.598281-26.497412 33.996681-26.497412 19.298115 0 34.996582 15.698467 34.996582 34.996582s-15.698467 34.996582-34.996582 34.996582c-16.79836 0-30.796992-11.798848-34.196661-27.497314l-29.097158 0.799921c0.19998 2.499756 0.299971 5.099502 0.29997 7.699249 0 19.898057-6.099404 38.39625-16.298408 53.794746l90.391173 52.194903c5.899424-5.799434 13.798652-9.399082 22.597793-9.399082 17.798262 0 32.196856 14.398594 32.196856 32.196856 0 17.798262-14.398594 32.196856-32.196856 32.196855-17.798262 0-32.096866-14.398594-32.096866-32.196855 0-3.199688 0.899912-5.899424 1.799825-8.899131l-92.990919-53.694757c-17.698272 18.498194-42.29587 30.297041-70.093155 30.297042-53.394786 0-96.690558-43.295772-96.690558-96.690558 0-53.394786 43.295772-96.690558 96.690558-96.690558 32.796797 0 61.493995 16.298408 78.992286 41.195977l136.08671-60.494092c-0.699932-3.899619-1.299873-7.699248-1.299873-11.698857 0-35.596524 28.797188-64.493702 64.493702-64.493702 35.696514 0.09999 64.593692 28.897178 64.593692 64.593692z" p-id="5075" fill="#0a2fc6"></path></svg>
        </div>
        <div class="content-right">
          <span class="text-gradient">医疗大脑</span>
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
      background-image: linear-gradient(to right, rgb(10, 47, 198), rgb(26, 120, 255));
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
