import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props:{
    showProjects:Array,

  }
})
export default class ProjectItem extends Vue{
  allProjects : Array<any> = []
  created() {
    this.$watch('showProjects',(newValue,oldValue) => {
      this.allProjects = newValue
    })
  }
}
