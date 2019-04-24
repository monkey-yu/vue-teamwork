import { EntityBaseService } from './base/entity-base.service'

const superClass = new EntityBaseService('api/project/')
export class ProjectBusiness extends EntityBaseService {
  constructor () {
    super('api/project/')
  }

  static getList () {
    return superClass.getList()
  }
}
