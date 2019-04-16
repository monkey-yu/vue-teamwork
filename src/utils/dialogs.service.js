import { Message } from 'element-ui'

export class DialogsService {
  static notify (msg, type = 'message') {
    Message({
      message: msg,
      type: type
    })
  }
}
