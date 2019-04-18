import { LocalDataService } from '../utils/local-data.service';
export class BaseInfoService {

  static setUser(userData){
    const userInfo = {
      fullName: userData.fullName,
      loginName: userData.loginName,
      token: userData.token,
      userId: userData.userId,
      expire:(new Date().valueOf() + 60*60*1000)
    };
    LocalDataService.cookieSet('userInfo',JSON.stringify(userInfo));
  }
}