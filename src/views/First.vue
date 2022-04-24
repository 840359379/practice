<template>
    <el-row class="tac">
    <el-col :span="3">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>东北仓</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="/index">报表1</el-menu-item>
              <el-menu-item index="/about">报表2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="/index">报表3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>报表4</template>
              <el-menu-item index="1-4-1">报表4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>苏州仓</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>赤壁仓</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>成都仓</span>
          </el-menu-item>
        </el-menu>
        
      </el-col>
      <el-main>
        <router-view>
        </router-view>
      </el-main>
  </el-row>
</template>

