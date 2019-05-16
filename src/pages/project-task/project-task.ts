import Vue from 'vue';
import Component from 'vue-class-component';
import TaskItem from '../../components/task-item/task-item.vue'
@Component({
  components: { TaskItem }
})
export default class ProjectTask extends Vue {
  options = [];
  value = [];
  list = [];
  loading: boolean = false;
  remoteMethod(query) {
    if (query !== '') {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.options = this.list.filter(item => {
          return item.label.toLowerCase()
            .indexOf(query.toLowerCase()) > -1;
        });
      }, 200);
    } else {
      this.options = [];
    }
  }
}
