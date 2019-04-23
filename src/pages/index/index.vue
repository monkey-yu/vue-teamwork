<template>
  <div class="index-container">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
           <el-menu-item index="1">
            <i class="el-icon-star-off"></i>
            <span slot="title">我的星标</span>
          </el-menu-item>
           <el-menu-item index="2">
            <i class="el-icon-picture-outline"></i>
            <span slot="title">历史查看</span>
          </el-menu-item>
           <el-menu-item index="3">
            <i class="el-icon-view"></i>
            <span slot="title">我参与的</span>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>更多</span>
            </template>
              <el-menu-item index="4-1">未分组项目</el-menu-item>
              <el-menu-item index="4-2">已归档项目</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      </el-row>
    </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
