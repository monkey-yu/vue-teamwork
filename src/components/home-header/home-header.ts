import Vue from 'vue';
import Component from 'vue-class-component';
import { LocalDataService } from '../../utils/local-data.service';
import { DialogsService } from '../../utils/dialogs.service';
import { BaseInfoService } from '../../business/base-info.service';
@Component({})
export default class HomeHeader extends Vue{
  userName: string = '';
  inputSearch: string = '';
  mounted() {
    let user;
    user = BaseInfoService.getUser();
    this.userName = user.loginName;
  }
  handleSelect(key,path){
  }
  logout(){
    LocalDataService.cookieRemove('userInfo');
    this.$router.push('/');
    DialogsService.notify('退出成功','success')
  }
}
