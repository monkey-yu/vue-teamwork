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
      <div class="content-container">
        <h3 class="title">
          <span v-if="showFlag === 'star'"> 星标项目</span>
          <span v-else-if="showFlag === 'ungrouped'"> 未分组项目</span>
          <span v-else-if="showFlag === 'archive'"> 已归档项目</span>
          <span v-else-if="showFlag === 'myself'"> 我参与的 · {{showProjects.length}}</span>
          <span v-else> 全部项目 · {{showProjects.length}}</span>
        </h3>
        <el-row>
          <el-col :span="6" v-for="(item,index) in showProjects" :key="index" style="margin:15px">
          <el-card class="project-item" >
            <div class="project-item-setting">
              <el-button type="text" class="button"><i class="el-icon-setting" @click="setting(item)"></i></el-button>
              <el-button type="text" class="button"><i :class="[item.isStar ? 'el-icon-star-on' :'el-icon-star-off']" @click="item.isStar = !item.isStar"></i></el-button>
            </div>
            <div class="project-item-title" @click="toProject(item.projectId)">
              {{item.projectName}} <br>
              <span class="project-item-group"> {{item.projectGroup}} </span>
            </div>
          </el-card>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-dialog
      title="项目设置"
      :visible.sync="dialogVisible"
      width="60%"
      center>
      <el-form :model="item" label-position="top" :inline="true" >
        <el-form-item label="项目名称" :label-width="formLabelWidth" class="project-form-input">
          <el-input v-model="item.projectName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目归属" :label-width="formLabelWidth" class="project-form-input">
          <el-input v-model="item.projectAuthor" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目分组" :label-width="formLabelWidth" class="project-form-input">
          <el-select v-model="item.projectGroup" placeholder="请选择">
            <el-option v-for="item in groupOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目公开性" :label-width="formLabelWidth" class="project-form-input">
          <el-select v-model="item.isPublic" placeholder="请选择项目公开性">
            <el-option v-for="item in publicOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./organization.ts"></script>
<style lang="scss" src="./organization.scss"></style>
