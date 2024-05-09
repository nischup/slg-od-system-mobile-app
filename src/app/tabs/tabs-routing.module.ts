import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
       path: 'od-home',
        loadChildren: () => import('../od-home/od-home.module').then( m => m.OdHomePageModule)
      },
      {
        path: 'hrm-home',
        loadChildren: () => import('../hrm-home/hrm-home.module').then( m => m.HrmHomePageModule)
      },
      {
        path: 'new-odrequest',
        loadChildren: () => import('../new-odrequest/new-odrequest.module').then( m => m.NewODRequestPageModule)
      },
      {
        path: 'odapproval',
        loadChildren: () => import('../odapproval/odapproval.module').then( m => m.ODApprovalPageModule)
      },
      {
        path: 'my-odrequest',
        loadChildren: () => import('../my-odrequest/my-odrequest.module').then( m => m.MyODRequestPageModule)
      },
      {
        path: 'new-leave-application',
        loadChildren: () => import('../new-leave-application/new-leave-application.module').then( m => m.NewLeaveApplicationPageModule)
      },
      {
        path: 'my-attendance',
        loadChildren: () => import('../my-attendance/my-attendance.module').then( m => m.MyAttendancePageModule)
      },
      {
        path: 'leave',
        loadChildren: () => import('../leave/leave.module').then( m => m.LeavePageModule)
      },
      {
      path: 'my-leave',
      loadChildren: () => import('../my-leave/my-leave.module').then( m => m.MyLeavePageModule)
      },
      {
        path: 'leave-dept-approval',
        loadChildren: () => import('../leave-dept-approval/leave-dept-approval.module').then( m => m.LeaveDeptApprovalPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
