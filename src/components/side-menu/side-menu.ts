import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class SideMenu extends Vue{
  handleSelect(key,keyPath){
    let selectedMenu = '';
    switch (key){
      case 1:
        selectedMenu = 'isStar'
        break;
      case 2:
        selectedMenu = 'all'
        break;
      case 3:
        selectedMenu = 'isMyself'
        break;
      case 4-1:
        selectedMenu = 'ungrouped'
        break;
      case 4-2:
        selectedMenu = 'archive'
        break;
      default:
        selectedMenu = 'isStar'
        break;
    }
    this.$emit('toSelected',selectedMenu)
  }
}
