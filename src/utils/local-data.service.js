export class LocalDataService{
  // cookie存储
  static cookieSet(name,value,expire = 60){
    var exp = new Date();
    exp.setTime(exp.getTime() + expire*60*1000);
    document.cookie = name + '=' + escape(value) + ';expire=' + exp.toGMTString();
  }
}
