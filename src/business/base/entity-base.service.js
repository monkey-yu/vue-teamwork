import { HttpOptions } from '../../models/base/http.model'
import { HttpRequestService } from './http-request.service'
export class EntityBaseService {
  constructor (_restapibase) {
    this.restapibase = _restapibase
  }
  getList () {
    const options = new HttpOptions()
    options.url = this.restapibase + 'list'
    return HttpRequestService.get(options)
  }
}
