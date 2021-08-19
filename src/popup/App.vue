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
  created () {
    this.init()
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
    },
    init () {
      // 监听来自content-script的消息
      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        console.log('收到来自content-script的消息：')
        console.log(request, sender, sendResponse)
        sendResponse('我是后台，我已收到你的消息：' + JSON.stringify(request))
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
