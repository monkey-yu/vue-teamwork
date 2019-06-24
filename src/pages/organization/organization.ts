import Vue from 'vue';
import Component from 'vue-class-component';
import {ProjectBusiness} from '../../business/project-business.service'

@Component({

})
export default class Organization extends Vue{
  projects: Array<any> = [];
  showProjects: Array<any> = [];
  showFlag: string = 'all';
  loading: boolean = false;
  dialogVisible: boolean = false;
  item: Object = {};
  formLabelWidth: string = '80px'
  groupOptions: Array<any> = [
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
  publicOptions: Array<any> = [
    {
      label:'公开',
      value:true,
    },
    {
      label:'私有',
      value:false,
    }
  ];
  created() {
    this.getProjects()
  }
  getProjects(){
    this.loading = true;
    ProjectBusiness.getList('list').then(res => {
      this.projects = res.data;
      this.showProjects = res.data;
      this.loading = false
    })
  }
  handleSelect(val){
    this.showFlag = val;
    if (val === 'star'){
      this.showProjects = [];
      this.projects.forEach(item =>{
        if(item.isStar){
          this.showProjects.push(item)
        }
      })
    }else if (val === 'myself'){
      this.showProjects = [];
      this.projects.forEach(item =>{
        if(item.projectAuthor === 'zhaoyu'){
          this.showProjects.push(item)
        }
      })
    }else if (val === 'ungrouped'){
      this.showProjects = [];
      this.projects.forEach(item =>{
        if(item.ungrouped){
          this.showProjects.push(item)
        }
      })
    }else if (val === 'archive'){
      this.showProjects = [];
      this.projects.forEach(item =>{
        if(item.archive){
          this.showProjects.push(item)
        }
      })
    }else{
      this.showProjects = this.projects
    }
  }
  setting (val) {
    this.item = val;
    this.dialogVisible =true;
  }
  toProject (projectId) {
    this.$router.push({path:`project/task`});
  }
}
