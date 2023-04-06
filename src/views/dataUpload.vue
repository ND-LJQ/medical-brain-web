<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 16:11:24
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-06 17:49:11
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
    :action="baseUrl"
    :headers="{ Authorization: token }"
    :on-change="handleChange"
    accept=".pdf"
    :on-success="handleSuccess"
    multiple
    :before-upload="beforeUpload"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      拖拽文件或者 <em>点击</em>以上传
    </div>
    <template #tip>
      <div class="el-upload__tip">
        pdf files with a size less than 10Mb
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
        <MedicalTablePage :reloadFlag="false" ></MedicalTablePage>
      </div>
    </div>
    
  </div>

  </div>
</template>

<script setup>
import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
import MedicalTablePage from '../components/common/MedicalTablePage/MedicalTablePage.vue'
import { ElMessage } from 'element-plus';
import { ref,onMounted,watch,nextTick } from 'vue';
import { useGetters } from '../utils/useMapper/index';
import { RouterLink, useRouter } from 'vue-router'
const baseUrl = import.meta.env.VITE_BASE_URL + "/file/testfile/"
const uploadRef = ref(null); // 添加上传组件的引用
const fileList = ref([]);
const reloadFlag = ref(false)
const router = useRouter()


const userStore = useGetters('userStore', ['token']);
const token = userStore.token.value;
const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('您确定已经上传完毕了吗')
    .then(() => {
      if(reloadFlag.value){
        location.reload();
      }
      done()
    })
    .catch(() => {
      // catch error
    })
}


const handleSuccess = (response, file, fileList) => {
      if (response.status === 'success') {
        ElMessage.success('文件上传成功');
        reloadFlag.value = true

      } else {
        ElMessage.error('文件上传失败');
        reloadFlag.value = false
      }
    };

    const handleChange = (file, fileList) => {
      // 等待上传组件的引用准备好，然后再进行上传操作
      nextTick(() => {
        if (uploadRef.value) {
          uploadRef.value.uploadFiles();
        }
      });
    };

    const beforeUpload = (file) => {
      // 等待上传组件的引用准备好，然后再加上授权信息
      nextTick(() => {
        var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)				
				const extension = testmsg === 'pdf'

				const isLt2M = file.size / 1024 / 1024 < 10     //这里做文件大小限制
				if(!extension) {
          ElMessage.warning('上传文件只能是pdf格式!');
				}
				if(!isLt2M) {
          ElMessage.warning('上传文件大小不能超过 10MB!');
				}
				return extension && isLt2M
      });
    };

    // 监听上传组件的变化，获取上传组件的引用
    const onUploadComponentChanged = () => {
      uploadRef.value = document.querySelector('.el-upload')?.__vue__;
    };
    watch(uploadRef, (value) => {
      if (!value) {
        onUploadComponentChanged();
      }
    });


    onMounted(()=>{
      console.log( baseUrl);
    })
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