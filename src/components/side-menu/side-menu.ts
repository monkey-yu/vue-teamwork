import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class SideMenu extends Vue{
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  }
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}
