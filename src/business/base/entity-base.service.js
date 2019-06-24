import { HttpOptions } from '../../models/base/http.model'
import { HttpRequestService } from './http-request.service'
export class EntityBaseService {
  constructor (_restapibase) {
    this.restapibase = _restapibase
  }
  getData (apiName) {
    const options = new HttpOptions()
    options.url = this.restapibase + apiName
    return HttpRequestService.get(options)
  }
}
