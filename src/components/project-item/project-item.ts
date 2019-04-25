import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props:{
    showProjects: Array,

  }
})
export default class ProjectItem extends Vue{
  receiveProjects : Array<any> = []
  created() {
    this.$watch('showProjects',(newValue,oldValue) => {
      this.receiveProjects = newValue
    })
  }
}
