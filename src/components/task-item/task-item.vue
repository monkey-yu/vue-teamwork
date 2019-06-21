<template>
  <div class="task-item-wrapper">
    <h3 class="task-item-title">共5个任务</h3>
    <ul>
      <li class="task-item-list">
        <el-row :gutter="10">
          <el-col :xs="4" :sm="6" :md="4" :lg="4">发布成功</el-col>
          <el-col :xs="4" :sm="6" :md="16" :lg="12">5. 将已经发布成功的需求移动到这个状态</el-col>
          <el-col :xs="8" :sm="6" :md="2" :lg="4">下周一截止</el-col>
          <el-col :xs="8" :sm="6" :md="2" :lg="4">zhaoyu</el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src="./task-item.ts"></script>
<style lang="scss" src="./task-item.scss"></style>
