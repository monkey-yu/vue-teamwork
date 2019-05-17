import Vue from 'vue';
import Component from 'vue-class-component';
import { ProjectBusiness } from '../../business'
@Component({})
export default class TaskItem extends Vue {
  tasksData: Array<any> = [];
  tasksCount: number = 0;
  created() {
    this.getTasks()
  }
  getTasks () {
    ProjectBusiness.getTask({
      apiName: 'task'
    }).then( res => {
      console.log('res',res);
      this.tasksCount = res.count;
      this.tasksData =res.data;
    })
  }
}
