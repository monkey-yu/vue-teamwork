<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/css" src="./styles/vendor.scss"></style>
<style lang="scss" type="text/css" src="./styles/app.scss"></style>
<style>
#app {
  height: 100%;
}
.route-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}
</style>
