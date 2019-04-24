<template>
  <el-col :span="20">
    <div class="content-container">
      <h3 class="title">星标项目</h3>
      <el-row>
        <el-col :span="6" v-for="(item,index) in allProjects" :offset="index % 3 === 0 ? 0 : 1" style="margin:15px">
        <el-card :body-style="{ padding: '0px' }" class="project-item">
          <div class="project-item-setting">
            <el-button type="text" class="button"><i class="el-icon-setting"></i></el-button>
            <el-button type="text" class="button"><i :class="[item.isStar ? 'el-icon-star-on' :'el-icon-star-off']"></i></el-button>
          </div>
          <div class="project-item-title">
            {{item.projectName}} <br>
            <span class="project-item-group"> {{item.projectGroup}} </span>
          </div>
        </el-card>
        </el-col>
          </el-row>
      </div>
  </el-col>
</template>
<script lang="ts" src="./project-item.ts"></script>
<style lang="scss" src="./project-item.scss"></style>
