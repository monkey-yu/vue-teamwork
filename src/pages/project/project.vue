<template>
  <div class="project-wrapper">
    <div class="project-menu">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="任务" name="task"></el-tab-pane>
        <el-tab-pane label="分享" name="share"></el-tab-pane>
        <el-tab-pane label="文件" name="file"></el-tab-pane>
        <el-tab-pane label="日程" name="schedule"></el-tab-pane>
      </el-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts" src="./project.ts"></script>
<style lang="scss" src="./project.scss"></style>
