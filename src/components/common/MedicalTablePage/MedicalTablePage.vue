<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 17:23:05
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-25 19:51:01
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->
<template>
  <div class="table-body">
    <div class="table-pillar">
  <el-table :data="nowTableData()" style="width: 100%">
      <!-- <el-table-column type="index" width="0" /> -->
      <el-table-column prop="projectName" label="项目名称"  >
        <template #default="scope">
        <el-icon><Folder /></el-icon>
        {{ scope.row.projectName}}
      </template>
      </el-table-column>
      <el-table-column prop="fileName" label="文件名称"  />
      <el-table-column prop="updateTime" label="更新时间" sortable />
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
import {reactive} from 'vue'

// const tableRowClassName = ({ row, rowIndex }) => {
//   if (rowIndex === 1) {
//     return 'warning-row'
//   } else if (rowIndex === 3) {
//     return 'success-row'
//   }
//   return ''
// }

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

</script>

<style lang="scss" scoped>


.table-body{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .table-pillar{
    height: 500px;
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
</style>