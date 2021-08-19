<template>
  <div class="page-home">
    <!-- 头部 -->
    <div :class="{ header: true, open: isOpen }">
      <a v-if="isOpen"
        class="refresh">
        <i class="icon-refresh"></i>
      </a>
      <el-switch v-model="isOpen"
        :inactive-text="isOpen ? '已开启' : '未开启'"
        active-color="#13ce66"
        @change="openSearch">
      </el-switch>
    </div>
    <transition-group type="transition"
      name="fade-transform"
      mode="out-in">
      <!-- 未开启 -->
      <close v-if="pageStatus === -1"
        key="1" />
      <!-- 不支持 -->
      <refuse v-if="pageStatus === 0"
        key="2" />
      <!-- 未加载 -->
      <wait v-if="pageStatus === 1"
        key="3" />
      <!-- 获取资源 -->
      <div v-if="pageStatus === 2"
        key="4"></div>
    </transition-group>
  </div>
</template>
<script>
import options from './options'
import refuse from './components/refuse'
import wait from './components/wait'
import close from './components/close.vue'

export default {
  name: 'Home',
  components: {
    refuse,
    wait,
    close
  },
  data () {
    return {
      pageStatus: -1, // -1:未开启 0：不支持 1：未加载 2：获取中/已获取
      isOpen: false,
      options: options
    }
  },
  methods: {
    openSearch (val) {
      const bg = chrome.extension.getBackgroundPage()
      console.log(bg)
      // if (val) {
      //   this.pageStatus = 0
      // } else {
      //   this.pageStatus = -1
      // }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-home {
  min-width: 350px;
  .header {
    height: 34px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: all 0.5s;
    margin-bottom: 20px;
    &.open {
      justify-content: space-between;
      background: #f7f7f7;
      transition: all 0.5s;
    }
    .refresh {
      color: #707070;
      font-size: 20px;
      font-weight: bold;
      .icon-refresh {
        font-style: normal;
        font-weight: 400;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        vertical-align: baseline;
        display: inline-block;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image: url("../assets/icon-refresh.png");
        background-size: contain;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        cursor: pointer;
        &:active {
          background-color: rgba($color: #000000, $alpha: 0.05);
        }
      }
    }
    /deep/.el-switch__label,
    .el-switch__label.is-active {
      color: #707070;
    }
  }
}
</style>
