<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 16:11:24
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-27 10:56:41
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->

<template>
  <div>
    <div class="header">
      <olp-header-menu></olp-header-menu>
    </div> 
    
  <el-dialog
    v-model="dialogVisible"
    title="文件上传"
    width="50%"
    hight="50%"
    align-center
    :before-close="handleClose"
  >
  
  <el-upload
    class="upload-demo"
    drag
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
  
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">
          关闭
        </el-button>
      </span>
    </template>
  </el-dialog>

  <div class="file-list">
    <div class="list-content">
      <div class="file-tools">
        <span>分析项目</span>
        <el-button type="primary" plain  @click="dialogVisible = true">新建分析</el-button>
      </div>

      <div class="list-body">
        <MedicalTablePage></MedicalTablePage>
      </div>
    </div>
    
  </div>

  </div>
</template>

<script setup>
import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
import MedicalTablePage from '../components/common/MedicalTablePage/MedicalTablePage.vue'
import { ref } from 'vue';

const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('您确定已经上传完毕了吗')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

</script>

<style lang="scss" scoped>
.header{
  background-color: #fff;
}

.file-list{
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: center;
  .list-content{
    width: 90%;
    .file-tools{
    display: flex;
    justify-content: space-between;
  }
  }
  
}
</style>