// 兼容性写法，该函数也是网上别人写的，不过找不到出处了，蛮好的，所有我也没有必要修改了
// 判断鼠标滚轮滚动方向
// FF,火狐浏览器会识别该方法
if (window.addEventListener) {
  window.addEventListener('DOMMouseScroll', wheel, false)
}
window.onmousewheel = document.onmousewheel = wheel
// 统一处理滚轮滚动事件
function wheel (event) {
  var delta = 0
  if (!event) event = window.event
  // IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”, FF浏览器使用的是detail,其值为“正负3”
  if (event.wheelDelta) {
    delta = event.wheelDelta / 120
    // 因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
    if (window.opera) delta = -delta
  } else if (event.detail) {
    delta = -event.detail / 3
  }
  if (delta) handle(delta)
}
// 上下滚动时的具体处理函数
function handle (delta) {
  if (delta < 0) {
    alert(delta)
  } else {
    alert(delta)
  }
  broser()
}

function broser () {
  // 判断浏览器
  let mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'
  if (document.attachEvent) {
    // 火狐
    document.attachEvent('on' + mousewheelevt, (e) => {
      // Balalalalala
    })
  } else if (document.addEventListener) {
    document.addEventListener(mousewheelevt, (e) => {
      // Balalalalalal
    }, false)
  }
}
