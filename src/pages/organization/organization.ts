import Vue from 'vue'
import Component from 'vue-class-component'
@Component({})
export default class Organization extends Vue{
  queryParam: string = ''
  handleSelect(val){
    this.queryParam = val;
    this.$router.push({name:'project',query:{show:val}})
  }
}
