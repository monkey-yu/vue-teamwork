export class LocalDataService {
  // cookie存储
  static cookieSet (name, value, expire = 60) {
    var exp = new Date()
    exp.setTime(exp.getTime() + expire * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ';expire=' + exp.toGMTString()
  }
  // 移除cookie
  static cookieRemove (name) {
    this.cookieSet(name, '', -1)
  }
  // 获取cookie
  static cookieGet (name) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document.cookie.match(reg)
    if (arr && arr.length > 1) {
      return unescape(arr[2])
    } else {
      return null
    }
  }
}
