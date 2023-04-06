<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 17:23:05
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-06 18:20:20
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="table-body">
    <div class="table-pillar">
  <el-table :data="getCurrentPageData()" style="width: 100%;"  class="responsive-table" row-class-name="animate__fadeInUp" :row-style="rowStyleFunction" >
      <!-- <el-table-column type="index" width="0" /> -->
      <el-table-column prop="fileName" label="文件名称"  >
        <template #default="scope">
          <span class="file-title" >
            <svg t="1680363211576"
              class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1289"
              xmlns:xlink="http://www.w3.org/1999/xlink" width="20" >
              <path
                d="M160 0h512l256 256v704c0 35.3472-28.6528 64-64 64H160c-35.3472 0-64-28.6528-64-64V64c0-35.3472 28.6528-64 64-64z"
                fill="#FA4E4E" p-id="1290"></path>
              <path
                d="M678.304 689.632c-34.5536-2.5664-67.8208-15.3984-94.6944-38.496-52.4672 11.5456-102.3808 28.224-152.288 48.7616C391.6544 770.4704 354.5408 806.4 322.5472 806.4c-6.4 0-14.0736-1.28-19.1936-5.1328-14.08-6.4128-21.7536-20.5312-21.7536-34.6432 0-11.552 2.56-43.6288 124.128-96.2432 28.16-51.328 49.9072-103.936 67.8272-159.1104-15.36-30.7968-48.6272-106.5088-25.6-144.9984 7.68-14.1184 23.04-21.8176 39.68-20.5312 12.7936 0 25.5872 6.4128 33.2672 16.6784 16.64 23.0976 15.36 71.8592-6.4 143.7184a386.9056 386.9056 0 0 0 79.3408 102.656c26.88-5.1392 53.7472-8.9856 80.6208-8.9856 60.1472 1.28 69.1072 29.5104 67.8272 46.1952 0 43.6288-42.2336 43.6288-63.9872 43.6288z m-358.3104 79.552l3.84-1.28c17.9136-6.4128 31.9872-19.2448 42.2272-35.9296-19.2 7.6992-34.5536 20.5312-46.0672 37.216z m170.1952-384.9472h-3.84c-1.28 0-3.84 0-5.12 1.28-5.12 21.8112-1.28 44.9088 7.68 65.44 7.68-21.8112 7.68-44.9088 1.28-66.72z m8.96 186.0608l-1.28 2.56-1.28-1.28c-11.52 29.5168-24.32 59.0272-38.3936 87.2576l2.56-1.28v2.56a743.6992 743.6992 0 0 1 87.0208-25.664l-1.28-1.28h3.84c-19.2-19.2512-37.1136-41.0624-51.1872-62.8736z m174.0352 68.0064c-11.52 0-21.7536 0-33.2736 2.56 12.8 6.4192 25.6 8.9856 38.3936 10.272 8.96 1.28 17.92 0 25.5936-2.5664 0-3.8528-5.12-10.2656-30.7136-10.2656z"
                fill="#FFFFFF" p-id="1291"></path>
              <path d="M672 0l256 256h-192c-35.3472 0-64-28.6528-64-64V0z" fill="#FDB8B8" p-id="1292"></path>
            </svg>          
            {{ scope.row.fileName}}
          </span>
          <!-- <span class="file-title"></span> -->
        </template>
      </el-table-column>
      <!-- <el-table-column prop="fileName" label="文件名称"  /> -->
      <el-table-column prop="updateTime" label="上传时间" sortable />
      <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="键入以搜索上传文件" />
      </template>
      <template #default="scope">
        <el-button 
        size="small" 
        type="success"
        @click="handleDownloadClick(scope.row.fileName)"
          >下载</el-button
        >

        <el-button 
        size="small" 
        type="warning"
        @click="handlePreviewClick(scope.row.fileName)"
          >在线预览</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleRemoveClick(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
    
    </el-table>
    </div>

  <div class="page-index">
    <el-pagination
        background
        layout="prev, pager, next ,total"
        :total="state.total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
      />
  </div>

  </div>
</template>

<script setup>
import {reactive,ref,computed, onMounted,defineProps,toRefs,watchEffect} from 'vue'
import { FileAPI } from '../../../network/index'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const search = ref('')
const isAnimating = ref(false)
const baseUrl = import.meta.env.VITE_BASE_URL;
const tableData = ref([]);

const paginationState = reactive({
  currentPage: 1,
  pageSize: 10,
})






  // 获取当前页面数据
const getCurrentPageData = () => {
  const startIndex = (paginationState.currentPage - 1) * paginationState.pageSize
  return filteredData.value.slice(startIndex, startIndex + paginationState.pageSize)
}
const state = reactive({
  total: tableData.value.length,
})


// 搜索过滤后的数据
const filteredData = computed(() => {
  if (!search.value) {
    return tableData.value
  }
  const lowerCaseSearchText = search.value.toLowerCase()
  return tableData.value.filter((data) => data.fileName.toLowerCase().includes(lowerCaseSearchText))
})

const handleCurrentChange = (currentPage) => {
  paginationState.currentPage = currentPage
}

const handleSizeChange = (pageSize) => {
  paginationState.pageSize = pageSize
}



    const handleEdit = (index, row) => {
      console.log(index, row)
    }
    const handleDelete = (index, row) => {
      console.log(index, row)
    }

    const handlePreviewClick = (fileNames) => {
      router.push({ name: 'viewpdf', query: { fileName:fileNames,method:"online" }  });
    }
    const handleDownloadClick = (fileName) => {
      // FileAPI.downloadApi.download.fileDownload(fileName).then(res =>{
      //   console.log(res);
      // }).catch((err)=>{
      //   console.log(err);
      // })
      // 下载文件
        window.open(baseUrl+'/downfile/?filename=' + fileName, '_blank');
    }

    const handleRemoveClick = (index,row) =>{
        console.log(index);
    }

    const token = "12344"

    const getUserFileList = async () => {
      await FileAPI.uploadApi.upload.getFileList(token).then(res =>{
        console.log(res.data);
        // tableData = res.data
        tableData.value = res.data
        console.log(tableData);
        state.total = res.data.length
          // console.log(res.data);
        }).catch(err => {
          console.log('Error:', err);
          // 处理异常情况
        });
    }


    const rowStyleFunction = ({row, rowIndex}) =>{
      let styleRes = {
          "animation-delay": (rowIndex*0.05)+"s",
      }
      // console.log(rowIndex);
      return styleRes
    }



    // const getRowClassName = () => {
    //   if (isAnimating.value) {
    //     return 'animated fadeIn';
    //   }
    //   return '';
    // }

    // const startAnimation = () => {
    //   isAnimating.value = true;
    //   setTimeout(() => {
    //     isAnimating.value = false;
    //   }, 1000);
    // }


    onMounted(()=>{
      getUserFileList(token)
      console.log();
    })




</script>

<style lang="scss" scoped>


.table-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .table-pillar{
    height: 70vh;
  }
}

.page-index{
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 50px;
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}


.responsive-table td,
.responsive-table th {
  font-size: 1rem;
}


:deep(.el-table__body) tbody tr {
    opacity: 0;
    animation: table-show 300ms forwards ease-out;
    // animation-delay: calc($n * 50ms);
  }


// @for $n from 1 through 10 {
  // :deep(.el-table__body) tbody tr:nth-child(#{$n}) {
  //   opacity: 0;
  //   animation: table-show 300ms forwards ease-out;
  //   animation-delay: calc($n * 50ms);
  // }
// }

// @for $n from 1 through 99 {
//   .el-table__body tbody:nth-child(#{$n}) tr {
//     opacity: 0;
//     animation: table-show 300ms forwards ease-out;
//     animation-delay: (($n - 1) * 0.05s);
//   }
// }

.file-title{
  overflow: hidden;    
 	text-overflow: ellipsis;      //超出部分以省略号显示
 	white-space: nowrap;
}

@keyframes table-show {
  0% {
    transform: translateY(50px);
    opacity: .5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .responsive-table td,
  .responsive-table th {
    font-size: 0.8rem;
  }

  .table-body{
    .table-pillar{
    height: 80vh;
  }
  }
}


@media screen and (max-width: 576px) {
  .responsive-table td,
  .responsive-table th {
    font-size: 0.6rem;
  }
}
</style>