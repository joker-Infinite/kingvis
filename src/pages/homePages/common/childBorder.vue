<template>
  <div class="cbd">
    <div class="title" v-if="src">
      <img :src="require('../../../assets/nh_img/' + src)" />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "childBorder",
  props: {
    src: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.cbd {
  width: calc(100% - 40px);
  padding: 10px 20px;

  .title {
    width: 100%;
    height: 40px;
  }

  .content {
    width: 100%;
    height: calc(100% - 40px);
  }
}
</style>
