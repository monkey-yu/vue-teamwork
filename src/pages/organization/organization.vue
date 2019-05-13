<template>
  <div class="index-container">
    <el-col :span="4">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @select ="handleSelect">
          <el-menu-item index="star">
          <i class="el-icon-star-off"></i>
          <span slot="title">我的星标</span>
        </el-menu-item>
          <el-menu-item index="all">
          <i class="el-icon-picture-outline"></i>
          <span slot="title">全部项目</span>
        </el-menu-item >
          <el-menu-item index="myself">
          <i class="el-icon-view"></i>
          <span slot="title">我参与的</span>
        </el-menu-item>
        <el-submenu index="">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>更多</span>
          </template>
            <el-menu-item index="ungrouped">未分组项目</el-menu-item>
            <el-menu-item index="archive">已归档项目</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <project-item :showProjects="showProjects" :showFlag="showFlag"></project-item>
    </el-col>
  </div>
</template>
<script lang="ts" src="./organization.ts"></script>
<style lang="scss" src="./organization.scss"></style>
