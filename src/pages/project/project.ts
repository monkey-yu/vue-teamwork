import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator'
import ProjectItem from '../../components/project-item/project-item.vue'
import {ProjectBusiness} from '../../business/project-business.service'
@Component({
  components:{ ProjectItem },
  props:{
    param:String
  }
})
export default class Project extends Vue {
  projects: Array<any> = [];
  showProjects: Array<any> = [];
  loading: boolean = false;
  created() {
    this.bindList()
  }
  bindList(){
    this.loading = true;
    ProjectBusiness.getList().then(res => {
      this.projects = res.data;
      this.showProjects = res.data;
      this.loading = false
    })
  }
  @Watch('param')
  watchCount(newVal, oldVal) {
    if (newVal === 'star'){
      this.showProjects = [];
      this.projects.forEach(item =>{
        if(item.isStar){
          this.showProjects.push(item)
        }
      })
    }else if (newVal === 'myself'){
      this.showProjects = [];
      this.projects.forEach(item =>{
        if(item.projectAuthor === 'zhaoyu'){
          this.showProjects.push(item)
        }
      })
    }else if (newVal === 'ungrouped'){
      this.showProjects = [];
      this.projects.forEach(item =>{
        if(item.ungrouped){
          this.showProjects.push(item)
        }
      })
    }else if (newVal === 'archive'){
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

