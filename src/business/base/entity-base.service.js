import { HttpOptions } from '../../models/base/http.model'
import { HttpRequestService } from './http-request.service'
export class EntityBaseService {
  constructor (_restapibase) {
    this.restapibase = _restapibase
  }
  getData (condition) {
    const options = new HttpOptions()
    options.url = this.restapibase + condition.apiName
    options.params = condition.params
    return HttpRequestService.get(options)
  }
}
