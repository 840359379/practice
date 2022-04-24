<template >
  <el-form ref="formRef" :model="form" :inline="true" label-width="120px">
      <el-form-item label="日期：">
          <el-date-picker
            v-model="time"
            type="daterange"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :shortcuts="shortcuts"
          ></el-date-picker>
      </el-form-item>

      <el-form-item label="仓库">
        <el-input 
        v-model="name"
        size="medium"
        style="width:200px"
        ></el-input>
      </el-form-item>
  </el-form>

  <el-table :data="people.list" style="width: 100%">
    <el-table-column fixed prop="date" label="数据" width="150" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="state" label="状态" width="120" />
    <el-table-column prop="city" label="城市" width="120" />
    <el-table-column prop="address" label="住址" width="600" />
    <el-table-column prop="zip" label="能量" width="120" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button type="text" size="small" @click="handleClick">
          详情
          </el-button>
        <el-button type="text" size="small">操作</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="primary" @click="mounted">Primary</el-button>
</template>

<script setup>
import { ref } from 'vue'
import people from '../assets/people.js'
import { ElMessageBox, ElMessage } from 'element-plus'
import httpRequest from '../config/request'

const time = ref('')
const name = ref('')

// const kkk = () =>{
//   console.log(people.list)
// }

const handleClick = () =>{
  ElMessageBox.confirm(
    "你是傻逼吗",
    "连同指尖弹出的盛夏",
    {
      confirmButtonText:"Ok",
      cancelButtonText:"Cancel",
      type:"warning"
    }
  ).then(() => {
      ElMessage({
        type: 'success',
        message: '操作成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '操作失败',
      })
    })
}

        
const mounted = () =>{
  //页面加载事件0
  
  httpRequest({
    url:'test/index',
    method: 'get',
  }).then((res) => {
    console.log(res)
  })
}
    


</script>