<template>
  <div class="home-header-wrapper">
    <h1 class="home-header-logo">TeamWork</h1>
    <ul class="home-header-group">
      <li class="home-header-list">
        <el-input class="home-header-search" v-model="inputSearch" placeholder="search"></el-input>
      </li>
      <li class="home-header-list">我的</li>
      <li class="home-header-list">日历</li>
      <li class="home-header-list">
        <el-tooltip class="item" effect="dark" content="通知" placement="bottom">
          <i class="el-icon-bell"></i>
        </el-tooltip>
      </li>
      <li class="home-header-list">
        <el-tooltip class="item" effect="dark" content="私信" placement="bottom">
          <i class="el-icon-message"></i>
        </el-tooltip>
      </li>
      <li class="home-header-list">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{userName}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command="setting">账号设置</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
    <div class="clear"></div>
  </div>
</template>
<style lang="scss" src="./home-header.scss"></style>
<script lang="ts" src="./home-header.ts"></script>
