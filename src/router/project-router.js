import Project from '@/pages/project/project.vue'
import ProjectTask from '@/pages/project-task/project-task.vue'
export default [
  {
    path: 'project/:projectId',
    name: 'project',
    component: Project,
    children: [
      {
        path: 'task',
        name: 'task',
        component: ProjectTask
      }
    ]
  }
]
