<template>
  <div>
    <el-col :span="20">
      <div class="content-container">
        <h3 class="title">
          <span v-if="show === 'star'"> 星标项目</span>
          <span v-else-if="show === 'ungrouped'"> 未分组项目</span>
          <span v-else-if="show === 'archive'"> 已归档项目</span>
          <span v-else-if="show === 'myself'"> 我参与的 · {{receiveProjects.length}}</span>
          <span v-else> 全部项目 · {{receiveProjects.length}}</span>
      </h3>
        <el-row>
          <el-col :span="6" v-for="(item,index) in receiveProjects" style="margin:15px">
          <el-card class="project-item">
            <div class="project-item-setting">
              <el-button type="text" class="button"><i class="el-icon-setting" @click="setting(item)"></i></el-button>
              <el-button type="text" class="button"><i :class="[item.isStar ? 'el-icon-star-on' :'el-icon-star-off']" @click="item.isStar = !item.isStar"></i></el-button>
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
          <el-option v-for="item in groupOptions" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目公开性" :label-width="formLabelWidth" class="project-form-input">
        <el-select v-model="item.isPublic" placeholder="请选择项目公开性">
          <el-option v-for="item in publicOptions" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">保存</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script lang="ts" src="./project-item.ts"></script>
<style lang="scss" src="./project-item.scss"></style>
