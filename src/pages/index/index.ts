import Vue from 'vue'
import Component from 'vue-class-component'
import SideMenu from '../../components/side-menu/side-menu.vue'
import ProjectItem from '../../components/project-item/project-item.vue'
@Component({
  components: { SideMenu,ProjectItem }
})
export default class Index extends Vue{

}
