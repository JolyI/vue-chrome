<template>
  <div class="components-tip">
    <div class="tip">
      <i class="icon-tip"></i>
      该页面不支持资源爬虫
    </div>
    <div class="basic">
      <div class="title">支持大量网站</div>
      <div class="webs">
        <el-image class="webs-icon" v-for="(item,index) in webList" :key="index" :src="item.url"></el-image>
        <el-image class="webs-icon" key="1000" :src="require('../../assets/icon-more.png')" />
      </div>
      <div class="more">
        优质资源网站合集
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      webList: [
        {
          url: 'https://huaban.com/img/touch-icon-ipad-retina.png'
        },
        {
          url: 'https://www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg'
        },
        {
          url: 'https://www.bilibili.com/favicon.ico?v=1'
        },
        {
          url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico'
        },
        {
          url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico'
        },
        {
          url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico'
        },
        {
          url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.components-tip {
  margin-top: 22px;
  .tip {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 24px;
    color: #333333;
    .icon-tip {
      background-image: url("../../assets/icon-tip.png");
      background-size: contain;
      width: 24px;
      height: 24px;
      margin-right: 6px;
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
    }
  }
  .basic {
    margin: 20px;
    background-color: #f7f7f7;
    border-radius: 6px;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
      margin: 0 20px;
    }
    .webs {
      margin: 4px 20px;
      .webs-icon {
        width: 44px;
        height: 44px;
        margin: 16px 8px;
        border-radius: 6px;
      }
    }
    .more {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 16px;
      color: #999999;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 26px;
      align-self: flex-end;
      cursor: pointer;
      i {
        width: 13px;
        height: 13px;
        padding-top: 2px;
      }
      &:hover,
      &:active {
        color: #ab62f3;
      }
    }
  }
}
</style>
