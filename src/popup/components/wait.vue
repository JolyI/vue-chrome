<template>
  <div class="component-wait">
    <div class="loading">
      <img src="../../assets/icon-wait.png"
        alt="">
      <span>
        网页加载后，将自动获取
      </span>
    </div>
    <div class="basic">
      <span>若没有正常获取当前网页资源，请尝试</span>
      <span>1.刷新网页</span>
      <span>2.点击左上角<i class="icon-refresh"></i></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.component-wait {
  margin-top: 60px;
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      height: 74px;
    }
    span {
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 24px;
      color: #333333;
      opacity: 1;
      margin-top: 20px;
    }
  }
  .basic {
    margin: 20px;
    background-color: #f7f7f7;
    border-radius: 6px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    span {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      &:nth-child(2) {
        margin: 14px 0 6px 0;
      }
    }
    .icon-refresh {
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      vertical-align: baseline;
      display: inline-block;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-image: url("../../assets/icon-refresh.png");
      background-size: contain;
      background-repeat: no-repeat;
      width: 20px;
      height: 20px;
      margin: 0 0 -6px 5px;
    }
  }
}
</style>
