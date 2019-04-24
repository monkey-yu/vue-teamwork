export class MockUrl {
  static mockData (params) {
    console.log(params)
    const pre = 'static/mock-data/'
    if (params.url.indexOf('api/user/login') > -1) {
      params.url = composeUrl('token2.json')
      return
    }
    if (params.url.indexOf('api/project/list') > -1) {
      params.url = composeUrl('project-list.json')
    }
    function composeUrl (url) {
      return pre + url + '?date=' + new Date().getTime()
    }
  }
}
