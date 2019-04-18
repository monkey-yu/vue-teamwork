<template>
  <div class="login-view">
    <div class="login-content">
      <div class="logo-box">
        <span>欢迎来到 knowledgebase</span>
      </div>
      <div class="control-box">
        <span class="label-box">用户名：</span>
        <input ref="userName" id="tbUserName" @keyup.enter="login()" v-model="userName" placeholder="请输入用户名" :class="{'input-error': submitted && !userName}" class="text-control" type="text" value="" />
      </div>
      <div class="control-box">
        <span class="label-box">密码：</span>
        <input ref="password" id="tbPassword" @keyup.enter="login()" v-model="password" placeholder="请输入密码" :class="{'input-error': submitted && !password}" class="text-control" type="password" value="" />
      </div>
      <div class="bottom-box">
        <button @click="login()" type="button" class="btn login-button">登录</button>
        <button @click="reset()" type="reset" class="btn login-button">重置</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>
<style lang="scss" scoped="" type="text/css" src="./login.scss"></style>
