import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HealthCheckGuard } from '../app/shared/guards/health-check.guard';
import {
  AvailableTasksComponent,
  MyTasksComponent,
  TaskAssignmentContainerComponent,
  TaskHomeComponent,
  TaskManagerComponent,
  WorkAllocationHomeComponent,
} from './containers';
import { WorkAllocationFeatureToggleGuard } from './guards';
import { TaskResolver } from './resolvers';

export const ROUTES: Routes = [
  {
    path: '',
    component: WorkAllocationHomeComponent,
    canActivate: [ HealthCheckGuard, WorkAllocationFeatureToggleGuard ],
    children: [
      {
        path: '',
        component: TaskHomeComponent,
        canActivate: [ HealthCheckGuard ],
        children: [
          {
            path: '',
            redirectTo: 'list'
          },
          {
            path: 'list',
            component: MyTasksComponent,
            data: { subTitle: 'My tasks' }
          },
          {
            path: 'available',
            component: AvailableTasksComponent,
            data: { subTitle: 'Available tasks' }
          }
        ]
      },
      {
        path: 'task-manager',
        component: TaskManagerComponent,
        canActivate: [ HealthCheckGuard, WorkAllocationFeatureToggleGuard ],
        data: {
          title: 'HMCTS Manage WorkAllocation | Task Manager'
        }
      },
      {
        path: 'reassign/:taskId',
        component: TaskAssignmentContainerComponent,
        canActivate: [ WorkAllocationFeatureToggleGuard ],
        resolve: {
          task: TaskResolver
        }
      }
    ]
  }
];

export const workAllocationRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);