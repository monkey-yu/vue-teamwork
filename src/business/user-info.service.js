import { EntityBaseService } from './base/entity-base.service'
import { HttpOptions, HttpHeader } from '../models/base/http.model'
import { HttpRequestService } from './base/http-request.service'
import { TextService, EncryptionService } from '../utils'
const superClass = new EntityBaseService('api/user/')
export class UserInfoBusiness extends EntityBaseService {
  constructor () {
    super('api/user/')
  }

  static login (loginName, password) {
    // 如果一项为空则返回一个状态为reject的promise
    if (!loginName || !password) {
      return new Promise(function (resolve, reject) {
        reject(TextService.messages.validation.inputRequiredField)
      })
    }
    const options = new HttpOptions(
      superClass.restapibase + 'login', null, [new HttpHeader('loginName', loginName), new HttpHeader('password', EncryptionService.md5(password))])
    options.skipValidation = true
    // login发起post请求
    return HttpRequestService.post(options)
  }
}
