import axios from 'axios'
import { MockUrl } from './mock-url'
import { SERVERINFO } from '../../constants/app-info-detail'
export class HttpRequestService {
  constructor () {
    this._redirected = false
  }
  static get (params) {
    if (!SERVERINFO.serverIP) {
      console.log('params', params)
      MockUrl.mockData(params)
      return this.apiAxios('GET', params.url, params)
    }
    return this.apiAxios('GET', params.url, params)
  };
  static post (params) {
    if (!SERVERINFO.serverIP) {
      MockUrl.mockData(params)
      return this.apiAxios('GET', params.url, params)
    }
    return this.apiAxios('POST', params.url, params)
  };
  static put (params) {
    if (!SERVERINFO.serverIP) {
      MockUrl.mockData(params)
      return this.apiAxios('GET', params.url, params)
    }
    return this.apiAxios('PUT', params.url, params)
  };
  static delete (params) {
    if (!SERVERINFO.serverIP) {
      MockUrl.mockData(params)
      return this.apiAxios('GET', params.url, params)
    }
    return this.apiAxios('DELETE', params.url, params)
  };

  static apiAxios (method, url, params) {
    let headers = {}
    if (params.headers) {
      params.headers.forEach(element => {
        headers[element.name] = element.value
      })
    }
    const promise = new Promise(function (resolve, reject) {
      if (params) {
        params = filterNull(params)
      }
      axios({
        method: method,
        baseURL: SERVERINFO.serverIP,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params.body : null,
        params: method === 'GET' || method === 'DELETE' ? params.params : null,
        withCredentials: false,
        headers: params.headers
      }).then((res) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          resolveError(res)
          reject(res.data)
        }
      }).catch((err) => {
        resolveError(err)
        reject((err.response && err.response.data) ? err.response.data : err.response)
      })
    })
    return promise

    function resolveError (err) {
      console.log('err as follows:' + err)
    }
    function filterNull (o) {
      for (const key in o) {
        if (o[key] === null) {
          delete o[key]
        }
        if (toType(o[key]) === 'string') {
          o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
          o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
          o[key] = filterNull(o[key])
        }
      }
      return o
    }
    function toType (obj) {
      return {}.toString
        .call(obj)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase()
    }
  }
}
