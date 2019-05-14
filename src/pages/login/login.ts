import Vue from 'vue';
import Component from 'vue-class-component';
import { UserInfoBusiness } from '../../business/user-info.service';
import { BaseInfoService } from '../../business/base-info.service';
import { DialogsService } from '../../utils';
@Component({})
export default class Login extends Vue {
  loading: boolean = false;
  userName: string = '';
  password: string = '';
  submitted: boolean = false;
  login() {
    this.submitted = true;
    this.loading = true;
    UserInfoBusiness.login(this.userName,this.password).then(data =>{
      BaseInfoService.setUser(data);
      this.loading = false;
      if(!this.$route.params.url) {
        this.$router.push({name: 'organization'});
      }else{
        window.location.href = decodeURIComponent(this.$route.params.url);
      }
    }).catch(err =>{
      this.loading =false;
      DialogsService.notify(err,'warning')
    })
  }

  reset() {
    this.userName = '';
    this.password = '';
  }
}
