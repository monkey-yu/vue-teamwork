import Vue from 'vue';
import Component from 'vue-class-component';
import { LocalDataService } from '../../utils/local-data.service';
import { DialogsService } from '../../utils/dialogs.service'
@Component({

})
export default class Home extends Vue{
  activeIndex:string = '1';

  handleSelect(key,path){
    console.log(key,path);
  }
  logout(){
    LocalDataService.cookieRemove('userInfo');
    this.$router.push('/');
    DialogsService.notify('退出成功','success')
  }
}
