import Vue from 'vue';
import Component from 'vue-class-component';
import { ProjectBusiness } from '../../business'
@Component({
  filters: {
    formatterText:function(value){
      if(value){
        return '发布完成'
      }else{
        return '未发布'
      }
    }
  }
})
export default class TaskItem extends Vue {
  tasksData: Array<any> = [];
  tasksCount: number = 0;
  created() {
    this.getTasks()
  }
  getTasks () {
    ProjectBusiness.getList('task').then(res => {
      this.tasksCount = res.count;
      this.tasksData =res.data;
    })
  }
}
