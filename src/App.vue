<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
	export default {
		name: "app",
		components: {},
		mounted() {
		}
	};
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    position: fixed;
    background: #f3f7ff;
    width: 100%;
    height: 100%;
  }
</style>
