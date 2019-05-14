import { ENUSCONTROLS } from '../constants/texts/en-us/controls'
import { ENUSMESSAGES } from '../constants/texts/en-us/messages'
import { LocalDataService } from './'
import { ZHCNCONTROLS } from '../constants/texts/zh-cn/controls'
import { ZHCNMESSAGES } from '../constants/texts/zh-cn/messages'

export class TextService {
  static getLanguage () {
    let lang = LocalDataService.cookieGet('lang')
    if (!lang) {
      lang = window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage || window.navigator.systemLanguage
      lang = lang.substr(0, 2).toLowerCase()
      lang = (lang === 'en' ? 'en-us' : 'zh-cn')
      return lang
    }
    try {
      lang = JSON.parse(lang)
    } catch (ex) {
      console.log(ex)
    }
    return (lang && lang.name) ? lang.name : 'zh-cn'
  }

  /**
   * set system language
   * @param lang : language name
   * @param text : language display text
   */
  static setLanguage (lang, text) {
    LocalDataService.cookieSet('lang', JSON.stringify({ name: lang, text: text }))
  }
}

TextService.lang = TextService.getLanguage()
switch (TextService.lang) {
  case 'zh-cn':
    TextService.controls = ZHCNCONTROLS
    TextService.messages = ZHCNMESSAGES
    break
  case 'en-us':
    TextService.controls = ENUSCONTROLS
    TextService.messages = ENUSMESSAGES
    break
  default:
    TextService.controls = ZHCNCONTROLS
    TextService.messages = ZHCNMESSAGES
    break
}
