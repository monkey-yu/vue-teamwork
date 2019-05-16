<template>
  <el-container class="project-task-wrapper">
    <el-aside class="project-task-aside">
      <el-select
        class="project-task-select"
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <h3 class="project-task-title">任务分组</h3>
      <div class="progess-box">
        <span>任务·2/7</span>
        <el-progress :percentage="20"></el-progress>
      </div>
      <h3 class="project-task-title">视图</h3>
      <div class="menu-box">
         <el-menu
          default-active="1"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">所有任务</span>
          </el-menu-item>
            <el-menu-item index="2">
            <i class="el-icon-date"></i>
            <span slot="title">今天的任务</span>
          </el-menu-item>
            <el-menu-item index="3">
            <i class="el-icon-warning"></i>
            <span slot="title">未完成的任务</span>
          </el-menu-item>
            <el-menu-item index="4">
            <i class="el-icon-question"></i>
            <span slot="title">待认领的任务</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-s-custom"></i>
            <span slot="title">我执行的任务</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>
    <el-container class="project-task-container">
      <task-item></task-item>
    </el-container>
  </el-container>
</template>
<script lang="ts" src="./project-task.ts"></script>
<style lang="scss" src="./project-task.scss"></style>
