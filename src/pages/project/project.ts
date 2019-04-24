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
  allprojectsArr:Array<any> = [];
  showProjectsArr: Array<any> = [];
  loading: boolean = false;
  created() {
    this.bindList()
  }
  bindList(){
    this.loading = true;
    ProjectBusiness.getList().then(res => {
      this.allprojectsArr = res.data;
      this.showProjectsArr = res.data;
      this.loading = false
    })
  }
  @Watch('param')
  watchCount(newVal, oldVal) {
    if (newVal === 'star'){
      this.showProjectsArr = [];
      this.allprojectsArr.forEach(item =>{
        if(item.isStar){
          this.showProjectsArr.push(item)
        }
      })
    }else if (newVal === 'myself'){
      this.showProjectsArr = [];
      this.allprojectsArr.forEach(item =>{
        if(item.projectAuthor === 'zhaoyu'){
          this.showProjectsArr.push(item)
        }
      })
    }else if (newVal === 'ungrouped'){
      this.showProjectsArr = [];
      this.allprojectsArr.forEach(item =>{
        if(item.ungrouped){
          this.showProjectsArr.push(item)
        }
      })
    }else if (newVal === 'archive'){
      this.showProjectsArr = [];
      this.allprojectsArr.forEach(item =>{
        if(item.archive){
          this.showProjectsArr.push(item)
        }
      })
    }else{
      this.showProjectsArr = this.allprojectsArr
      }
  }
}

