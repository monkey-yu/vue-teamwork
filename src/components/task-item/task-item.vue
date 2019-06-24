<template>
  <div class="task-item-wrapper">
    <h3 class="task-item-title">共5个任务</h3>
    <ul>
      <li class="task-item-list">
        <el-row :gutter="10" v-for="item in tasksData" class="task-item-row">
          <el-col :xs="4" :sm="6" :md="4" :lg="4">{{item.isArchived | formatterText}}</el-col>
          <el-col :xs="4" :sm="6" :md="16" :lg="12">{{item.content}}</el-col>
          <el-col :xs="8" :sm="6" :md="2" :lg="4">{{item.dueDate.slice(0,10)}}</el-col>
          <el-col :xs="8" :sm="6" :md="2" :lg="4">{{item.creator}}</el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" src="./task-item.ts"></script>
<style lang="scss" src="./task-item.scss"></style>
