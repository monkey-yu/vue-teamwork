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
  show : string = '';
  dialogVisible : boolean = false;
  item : Object = {};
  groupOptions : Array<any> = [
    {
      label:'技术',
      value:'技术',
    },
    {
      label:'生活',
      value:'生活',
    },
    {
      label:'其它',
      value:'其它',
    }
  ];
  publicOptions : Array<any> = [
    {
      label:'公开',
      value:true,
    },
    {
      label:'私有',
      value:false,
    }
  ];
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
