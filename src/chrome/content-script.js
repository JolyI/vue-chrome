console.log('xxxxxxxxxxxxx')
var html = document.querySelectorAll('IMG')
console.log(html)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
  if (request.cmd == 'test') { console.log('接收到消息') }
  var html = document.querySelectorAll('IMG')
  sendResponse(html)
  sendIndex()
})

function sendIndex () {
  var nodeList = document.querySelectorAll('IMG')
  var arr = []
  nodeList.forEach(item => {
    arr.push(item.src)
  })
  chrome.runtime.sendMessage({ greeting: '你好，我是content-script呀，我主动发消息给后台！', arr }, function (response) {
    console.log('收到来自后台的回复：' + response)
  })
}
