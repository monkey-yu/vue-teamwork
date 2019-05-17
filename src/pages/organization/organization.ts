import Vue from 'vue';
import Component from 'vue-class-component';
import ProjectItem from '../../components/project-item/project-item.vue';
import {ProjectBusiness} from '../../business/project-business.service'

@Component({
  components: { ProjectItem }
})
export default class Organization extends Vue{
  projects: Array<any> = [];
  showProjects: Array<any> = [];
  showFlag: string = 'all';
  loading: boolean = false;
  created() {
    this.getProjects()
  }
  getProjects(){
    this.loading = true;
    ProjectBusiness.getList({
      apiName: 'list'
    }).then(res => {
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
}
