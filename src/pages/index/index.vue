<template>
  <div class="index-container">
    <el-row class="tac">
    <side-menu></side-menu>
      <el-col :span="20">
          <div class="content-container">
            <h3 class="title">星标项目</h3>
            <el-row>
              <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 1 : 0">
                <project-item></project-item>
              </el-col>
            </el-row>
          </div>
      </el-col>
      </el-row>

    </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" src="./index.scss"></style>
