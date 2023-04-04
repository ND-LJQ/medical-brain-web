<template>
  
  <div >
    <div class="medical-loading" v-show="isLoading">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>

    <div class="imgLists">
        <div class="img-item" v-for="item in imgList.values">
            <div class="item-content">
              <div class="img-title">
                <el-tag
                  type="danger"
                  class="mx-1"
                  effect="dark"
                  round
                  style="margin-left: 5px;"
                >
                {{ filename}}
                </el-tag>
                <el-tag
                  type="danger"
                  class="mx-1"
                  effect="dark"
                  round
                  style="margin-left: 5px;"
                >
                第{{ pageNum }}页
                </el-tag>
              </div>
              <div>
                <img :src="item.file_base64" alt="">
            </div>
            </div>
        </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref,onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { SearchAPI,FileAPI } from '../network/index'
  const route = useRoute();
  const filename = route.query.fileName;
  const pageNum = route.query.pageIndex;
  const queryMethod = route.query.method;
  const imgSrc = ref('')
  const imgList = reactive([])
  const isLoading = ref(true)
  const renderSearchImg = async () =>{
    try{
      const res = await SearchAPI.resetToResult(filename, pageNum);
     
      const context = res.context
      // console.log(context);
      context.forEach(el => {
        el.file_base64 =  "data:image/png;base64," + el.file_base64
        // console.log(el.file_base64);
      });
      imgList.values = context
      isLoading.value = false
      console.log(imgList);
      // const imgSrcString = "data:image/png;base64," + res.file_base64
      // imgSrc.value = imgSrcString
    }catch(err){
      console.log(err);
    }
  }

  const renderOnlineImg = async () =>{
    try{

      const res = await FileAPI.previewApi.preview.onlinePreview(filename);
      const context = res.context
      // console.log(context);
      context.forEach(el => {
        el.file_base64 =  "data:image/png;base64," + el.file_base64
        // console.log(el.file_base64);
      });
      imgList.values = context
      isLoading.value = false
      console.log(imgList);
      // const imgSrcString = "data:image/png;base64," + res.file_base64
      // imgSrc.value = imgSrcString
    }catch(err){
      console.log(err);
    }
  }

  onMounted(()=>{
    if(queryMethod==="online"){
      renderOnlineImg()
    }else if(queryMethod==="search"){
      renderSearchImg()
    }
  })
  


</script>

<style lang="scss" scoped>
.imgLists{
  width: 100%;
  background-color: black;
}

.img-item{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .img-title{
    position: absolute;
    width: 52%;
    height: 5%;
    // background-color: blue;
  }

  
}



.medical-loading {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.circle {
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
  background-color: #0072c6;
}

.circle:nth-of-type(2) {
  animation-delay: 0.5s;
  background-color: #d61f1f;
}

.circle:nth-of-type(3) {
  animation-delay: 1s;
  background-color: #00a651;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>