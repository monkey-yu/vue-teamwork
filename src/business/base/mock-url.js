export class MockUrl{
  static mockData(params){
    console.log(params);
    const pre = 'static/mock-data/';
    if(params.url.indexOf('api/user/login') > -1){
      params.url = composeUrl('token2.json');
      return;
    }

    function composeUrl(url){
      return pre + url + '?date=' + new Date().getTime();
    }
  }
}