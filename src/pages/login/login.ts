import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: ['url']
})

export default class Login extends Vue {
  loading = false;
  userName: string = '';
  password: string = '';
  url: string;
  submitted: boolean = false;

  created() {
  }

  login() {
    this.submitted = true;
    this.loading = true;

  }

  reset() {
    this.userName = '';
    this.password = '';
  }
}
