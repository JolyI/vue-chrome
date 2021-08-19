import installReload from './hmr.js'
// import installRequest from './request'

// 安装热刷新功能
installReload()
// installRequest()

window.callContent = callContent
function callContent () {
  console.log('xxxxxxxxxxxx')
  sendMessageToContentScript({ cmd: 'test', value: '你好，我是popup！' }, function (response) {
    console.log('来自content的回复：' + response)
  })
}

function sendMessageToContentScript (message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response)
    })
  })
}
