<template>
  <div class="component-close">
    <div class="basic">
      <div class="title">自动检查页面内媒体资源</div>
      <div class="desc">可支持多种格式的图片、音频、视频</div>
      <div class="img-group">
        <el-image class="img"
          :src="require('../../assets/icon-image.png')"
          alt=""
          fit="contain">
        </el-image>
        <el-image class="img"
          :src="require('../../assets/icon-voice.png')"
          alt=""
          fit="contain" />
        <el-image class="img"
          :src="require('../../assets/icon-video.png')"
          alt=""
          fit="contain" />
      </div>
    </div>
    <div class="basic">
      <div class="title">支持大量网站</div>
      <div class="webs">
        <el-image class="webs-icon"
          v-for="(item,index) in webList"
          :key="index"
          :src="item.url"></el-image>
        <el-image class="webs-icon"
          key="1000"
          :src="require('../../assets/icon-more.png')" />
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
          url: 'https://img.zcool.cn/community/019ba860fe817311013eaf709a3dfe.jpg@1280w_1l_2o_100sh.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.component-close {
  .basic {
    margin: 0 20px 20px 20px;
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
    .desc {
      margin: 0 20px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 16px;
      color: #999999;
      margin-top: 6px;
    }
    .img-group {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      // margin-top: 20px;
      .img {
        width: 50px;
        height: 60px;
        margin: 20px 0 0 0;
        &:nth-child(2) {
          margin: 20px 26px 0 26px;
        }
        /deep/.el-image__error {
          font-size: 12px;
        }
      }
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
