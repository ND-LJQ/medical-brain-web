<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 10:13:34
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-04-06 17:40:07
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->

<template>
  <div class="bg_video">
  <video  muted autoplay="autoplay" loop="loop" src="../assets/video/home-bg.31c7659b.mp4"></video>
  </div>
  <div class="header">
    <olp-header-menu></olp-header-menu>
  </div>
  
  <div class="banner">
    <div class="banner-left">
      <div class="banner_content">
        <div class="banner_title">
          <span id="title_typed"></span>
        </div>
  
        <div class="banner_text">
          <span id="text_typed"></span>
        </div>
  
        <div class="btn_list">
          <el-button type="primary" >数据上传</el-button>
          <el-button type="primary">数据搜索</el-button>
        </div>
    </div>
    </div>
    <div class="banner_center"></div>
    <div class="banner_right"></div>
  </div>
  </template>
  
  <script setup>
  import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
  import { onMounted } from 'vue'
  import Typed from 'typed.js'







  onMounted(()=>{
    
    console.log(import.meta.env);
    
    let header = document.querySelector(".header")
  
    
  
    window.addEventListener("scroll",()=>{
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop!=0){
        header.classList.add("header-active")
      }else{
        header.classList.remove("header-active")
      }
      
    })

    const titleOptions = {
      strings:['医学大脑'],
      typeSpeed:150, //打印速度,number越大速度越慢
      // startDelay:300,
      loop:false
    }

    const textOptions = {
      strings:['让知识获取变得更简单'],
      typeSpeed:150,
      startDelay:750,
      loop:false
    }

    const titleTyped = new Typed('#title_typed',titleOptions)
    const textTyped = new Typed('#text_typed',textOptions)
  })


  
  
  </script>
  
  <style lang="scss" scoped>
  /* 开发期间解决自定义主题被覆盖问题，此处重复引入 */
  @use '../assets/styles/element/index.scss';
  
  
  .header{
    width: 100vw;
    // margin-top:20px;
  }
  
  .bg_video{
    position: absolute;
    z-index: -1;
    width: 100%;
    video{
      object-fit: contain;
      overflow-clip-margin: content-box;
      overflow: clip;
      object-fit: cover;
      outline: none!important;
      mix-blend-mode: darken;
      width:100vw;
      height: 99.81vh;
    }
  }
  
  // .header-active{
  //   position: fixed;
  //   background-color: #fff;
  //   z-index: 99;
  // }
  
  .banner{
    position: absolute;
    display: flex;
    top: 42%;
    width: 100%;
    justify-content: space-around;
    align-content: center;
    .banner-left{
      margin-right: 31%;
      .banner_content{
        display: flex;
        flex-direction: column;
        text-align: left;
        .banner_title{
          background-image: linear-gradient(to right, rgb(7, 135, 199), rgb(0, 162, 233));
          -webkit-background-clip: text;
          color: transparent;
          font-size:2.5vw;
          font-weight: 600;
        }
        .banner_text{
          margin:15px 0 15px 0 ;
          font-size:2.5vw;
          font-weight: 600;
        }
  
        .btn_list{
          margin:15px 0 15px 0 ;
          .el-button{
            height: 2.5vw;
            width: 7.5vw;
            font-size: 1vw;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {

    #title_typed,#text_typed{
      font-size: 5.5vw;
    }
    :deep(.el-button) {
      font-size: 3vw!important;
      height: 7.5vw!important;
       width: 16.5vw!important;
  }

}


  
  </style>