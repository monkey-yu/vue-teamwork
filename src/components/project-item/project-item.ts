import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props:{
    showProjects: Array,
    showFlag:String
  }
})
export default class ProjectItem extends Vue{
  receiveProjects : Array<any> = [];
  show: string = '';
  dialogVisible :boolean = false;
  item :Object = {};
  formLabelWidth: string = '80px'
  created() {
    this.$watch('showProjects',(newValue,oldValue) => {
      this.receiveProjects = newValue
    })
    this.$watch('showFlag',(newValue,oldValue) => {
      this.show = newValue
    })
  }
  setting(val){
    this.item = val;
    this.dialogVisible =true;

  }
}
