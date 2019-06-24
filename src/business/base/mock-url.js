export class MockUrl {
  static mockData (params) {
    if (params.url.indexOf('api/user/login') > -1) {
      params.url = composeUrl('token2.json')
      return
    }
    if (params.url.indexOf('api/project/list') > -1) {
      params.url = composeUrl('project-list.json')
    }
    if (params.url.indexOf('api/project/task') > -1) {
      console.log('1111')
      params.url = composeUrl('project-task.json')
    }
    function composeUrl (url) {
      const pre = 'static/mock-data/'
      const noCache = '?date=' + new Date().getTime()
      return pre + url + noCache
    }
  }
}
