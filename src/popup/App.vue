<template>
  <div class="page-popup">
    <el-button type="primary" @click="hanleClick">{{msg}}</el-button>
  </div>
</template>
<script>
export default {
  name: 'Popup',
  data () {
    return {
      msg: 'this is popup page'
    }
  },
  methods: {
    hanleClick () {
      // const bg = chrome.extension.getBackgroundPage()
      // bg.callContent()
      this.sendMessageToContentScript({ cmd: 'test', value: '你好，我是popup！' }, function (response) {
        console.log('来自content的回复：' + response)
      })
    },
    sendMessageToContentScript (message, callback) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
          if (callback) callback(response)
        })
      })
    }

  }
}
</script>
<style lang="scss" scoped>
  .page-popup {
    padding: 20px;
  }
</style>
