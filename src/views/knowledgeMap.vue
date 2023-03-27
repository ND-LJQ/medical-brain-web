<!--
 * @Author: ND_LJQ
 * @Date: 2023-03-25 20:09:52
 * @LastEditors: ND_LJQ
 * @LastEditTime: 2023-03-27 09:24:27
 * @Description: 
 * @Email: ndliujunqi@outlook.com
-->

<template>
  <div>
    <div class="header">
      <olp-header-menu></olp-header-menu>
    </div> 
    <div class="map-body">
      <div class="body-content">
        <div class="search-box">
          <div class="search-box-content">
            <el-input
              v-model="inputValue"
              placeholder="请输入要查询的实体或关系"
              class="input-with-select"
              style="width: 100%;height: 100%;"
            >
              <template #append>
                <el-button icon="Search" id="map-search"/>
              </template>
            </el-input>
          </div>
        </div>


        <div class="knowledge-map">
          <div id="main" style="width: 100%;height:100%;">

          </div>
        </div>

      </div>
    </div>

   
  </div>
</template>

<script setup>
import {onMounted,ref } from 'vue'
import OlpHeaderMenu from '../components/base/OlpHeaderMenu/OlpHeaderMenu.vue'
//Echarts5.0 更新了引入方式
import * as echarts from 'echarts'
import axios from 'axios'


const inputId = ref("mapInput")
const inputValue = ref('')


const handleSearch = () => {
      // 在这里执行搜索操作，并更新 inputValue 的值
      inputValue.value = '搜索结果';
    };


onMounted(() => {
  let chartDom = document.getElementById('main')
  let button = document.getElementById('map-search')
  let input = document.getElementById('mapInput')
  let myChart = echarts.init(chartDom)
  let option;

  myChart.showLoading()
  axios.get('../src/assets/test.json').then(response => {
    myChart.hideLoading()
    var graph = response.data
    graph.nodes.forEach(function(node) {
      node.label = { show: node.symbolSize > 30 }
    })
    option = {
      title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right',
      },
      tooltip: {},
      toolbox: {
    feature: {
      dataView: {
        title: '数据视图',
        readOnly: true,
        lang: ['数据视图', '关闭', '刷新']
      },
      restore: {
        title: '重置'
      },
      saveAsImage: {
        title: '下载图片'
      }
    }
  },
      legend: [
        {
          data: graph.categories.map(function(a) {
            return a.name
          }),
        },
      ],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          name: 'Les Miserables',
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          itemStyle:{
            opacity:1
          },
          categories: graph.categories,
          roam: true,
          label: {
            position: 'right',
            formatter: '{b}',
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3,
            opacity:1
          },
          emphasis: {
            focus: 'adjacency',
            lineStyle: {
              width: 10,
            },
          },
        },
      ],
    }
    myChart.setOption(option)
  }).catch(error => {
    console.error(error)
  })

  button.addEventListener('click', () => {
    let value = inputValue.value
    searchLineOrPoint(value)
  })



  // 实现搜索函数
  function searchLineOrPoint(keyword) {
  let options = myChart.getOption();
  let graph = options.series[0];
  let nodesOption = graph.data;
  let linksOption = graph.links;
  
  // 默认设置所有节点和连线的透明度为 0.1
  for (let m in nodesOption) {
    nodesOption[m].itemStyle.opacity = 0.1;
  }
  for (let k in linksOption) {
    if (linksOption[k].lineStyle) {
      linksOption[k].lineStyle.opacity = 0.1;
    } else {
      linksOption[k].lineStyle = {
        opacity: 0.1
      };
    }
  }
  
  // 查找所有符合条件的节点，并修改其样式
  for (let m in nodesOption) {
    if (nodesOption[m].name.indexOf(keyword) > -1) {
      nodesOption[m].itemStyle.opacity = 1;
      for (let k in linksOption) {
        if (linksOption[k].source === nodesOption[m].id || linksOption[k].target === nodesOption[m].id) {
          
          // 修改与该节点相关的另一节点的样式
          let otherNodeId = linksOption[k].source === nodesOption[m].id ? linksOption[k].target : linksOption[k].source;
          let otherNode = nodesOption.filter(node => node.id === otherNodeId)[0];
          otherNode.itemStyle.opacity = 1;

          // 修改该连线的透明度为 1
          if (linksOption[k].lineStyle) {
            linksOption[k].lineStyle.opacity = 1;
          } else {
            linksOption[k].lineStyle = {
              opacity: 1
            };
          }
        }
      }
    }
  }
  
  myChart.setOption(options);
}
 
})



</script>

<style lang="scss" scoped>


.map-body{
  width: 100%;  
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  margin-top: 5vh;
  .body-content{
    width: 80%;
    display: flex;
    flex-direction: column;

    .knowledge-map{
      // background-color: black;
      width: 100%;
      height: 60vh;
    }
  }
}
.knowledge-map{
  margin-top:60px;
}


.search-box{
  width: 100%;
  height: 5vh;
  .search-box-content{
    width: 100%;
    height: 100%;
  }
}
</style>
