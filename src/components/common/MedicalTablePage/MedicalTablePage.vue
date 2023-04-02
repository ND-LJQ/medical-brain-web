<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 17:23:05
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-02 16:20:08
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="table-body">
    <div class="table-pillar">
  <el-table :data="filterTableData" style="width: 100%;"  class="responsive-table">
      <!-- <el-table-column type="index" width="0" /> -->
      <el-table-column prop="projectName" label="项目名称"  >
        <template #default="scope">
          <span style="font-size:16px">
              <svg t="1680363168686" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3223" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"><path d="M0 128a51.2 51.2 0 0 1 51.2-51.2h350.24a51.2 51.2 0 0 1 47.0592 31.0336L473.6 166.4h499.2a51.2 51.2 0 0 1 51.2 51.2v537.6a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 1-51.2-51.2V128z" fill="#FFA000" p-id="3224"></path><path d="M89.6 249.6m51.2 0l742.4 0q51.2 0 51.2 51.2l0 460.8q0 51.2-51.2 51.2l-742.4 0q-51.2 0-51.2-51.2l0-460.8q0-51.2 51.2-51.2Z" fill="#FFFFFF" p-id="3225"></path><path d="M0 332.8m51.2 0l921.6 0q51.2 0 51.2 51.2l0 512q0 51.2-51.2 51.2l-921.6 0q-51.2 0-51.2-51.2l0-512q0-51.2 51.2-51.2Z" fill="#FFCA28" p-id="3226"></path></svg>
          </span>
          {{ scope.row.projectName}}
        </template>
      </el-table-column>
      <el-table-column prop="fileName" label="文件名称"  />
      <el-table-column prop="updateTime" label="更新时间" sortable />
      <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="small" placeholder="键入以搜索上传文件" />
      </template>
      <template #default="scope">
        <el-button 
        size="small" 
        type="success"
        @click="handleDownloadClick(scope.$index, scope.row)"
          >下载</el-button
        >

        <el-button 
        size="small" 
        type="warning"
        @click="handlePreviewClick()"
          >在线预览</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDownloadClick(scope.$index, scope.row)"
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
import {reactive,ref,computed, onMounted} from 'vue'
import { FileAPI } from '../../../network/index'
// const tableRowClassName = ({ row, rowIndex }) => {
//   if (rowIndex === 1) {
//     return 'warning-row'
//   } else if (rowIndex === 3) {
//     return 'success-row'
//   }
//   return ''
// }
const search = ref('')

const tableData = [
  {
    updateTime: '2016-05-03',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-02',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-04',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-01',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-03',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-02',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-04',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-01',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-03',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-02',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-04',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  },
  {
    updateTime: '2016-05-01',
    projectName: 'Tom',
    fileName: 'No. 189, Grove St, Los Angeles',
  }

];

  const state = reactive({
      page: 1,
      limit: 10,
      total: tableData.length,
    })

  
  //前端限制分页（tableData为当前展示页表格）
  const nowTableData = () => {
      return tableData.filter(
        (item, index) =>
          index < state.page * state.limit &&
          index >= state.limit * (state.page - 1)
      );
    };


  //改变页码
  const handleCurrentChange = (e) => {
      state.page = e;
    };
    //改变页数限制
    const handleSizeChange = (e) => {
      state.limit = e;
    };


    //最终的搜索列表
    const filterTableData = computed(() =>
      nowTableData().filter(
        (data) =>
          !search.value ||
          data.projectName.toLowerCase().includes(search.value.toLowerCase()) || data.fileName.toLowerCase().includes(search.value.toLowerCase())
    ))


    const handleEdit = (index, row) => {
      console.log(index, row)
    }
    const handleDelete = (index, row) => {
      console.log(index, row)
    }

    const handlePreviewClick = () => {
    // 发送请求获取文件预览
    axios.get('/your-download-api', { params: { fileId: fileId } })
      .then(response => {
        // 将文件Base64编码字符串作为URL打开
        window.open('data:' + response.data.mime + ';base64,' + response.data.content, '_blank');
      })
      .catch(error => {
        console.log(error);
      });
    }
    const handleDownloadClick = () => {
      // 下载文件
        window.open('/your-download-api?fileId=' + fileId, '_blank');
    }

    const token = "12344"

    const getUserFileList = async () => {
      await FileAPI.uploadApi.upload.getFileList(token).then(res =>{
          console.log(res);
        })
    }


    onMounted(()=>{
      getUserFileList(token)
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

@media screen and (max-width: 768px) {
  .responsive-table td,
  .responsive-table th {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 576px) {
  .responsive-table td,
  .responsive-table th {
    font-size: 0.6rem;
  }
}
</style>