import axios from 'axios';
import { MockUrl } from './mock-url';
import { SERVERINFO } from '../../constants/server-info';
export class HttpRequestService {
  constructor() {
    this._redirected =false;
  }
  static post (params){
    // 取mock数据
    MockUrl.mockData(params);
    // 依然发起http请求
    return this.apiAxios('GET',params.url,params);
  }

  static apiAxios (method,url,params){
    let headers ={};
    if(params.headers){
      params.headers.forEach(element =>{
        headers[element.name] = element.value;
      })
    }
    const promise = new Promise(function(resolve,reject){
      // if(params){
      //   params = filterNull(params);
      // }
      axios({
        method:method,
        baseURL:SERVERINFO.serverIP,
        url:url,
        data: method === 'POST' || method === 'PUT' ? params.body : null,
        params: method === 'GET' || method === 'DELETE' ? params.params : null,
        withCredentials:false,
        headers:headers
      }).then((res)=>{
        if(res.status === 200){
          resolve(res.data);
        }else{
          resolveError(res);
          reject(res.data);
        }
      }).catch((err)=>{
        resolveError(err);
        reject((err.response && err.response.data) ? err.response.data : err.response);
      })
    });
    return promise;
    
    //错误处理函数
    function resolveError(err){
      console.log('err as follows:' + err);
    }
  }
}