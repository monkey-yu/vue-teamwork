<template>
  <div class="header-container">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">TeamWork</el-menu-item>
    <el-menu-item index="2">
       <el-input
    placeholder="搜索">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </el-menu-item>
    <el-menu-item index="3">我的</el-menu-item>
    <el-menu-item index="4">日历</el-menu-item>
    <el-menu-item index="5">通知</el-menu-item>
    <el-submenu index="6" tabPosition="right">
      <template slot="title">用户名</template>
      <el-menu-item index="6-1">账号设置</el-menu-item>
      <el-menu-item index="6-2" @click="logout">退出登录</el-menu-item>
    </el-submenu>
  </el-menu>
  </div>
</template>

<script src="./home.ts" lang="ts"></script>
<style lang="scss" src="./home.scss"></style>
