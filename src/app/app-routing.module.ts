import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login2',
    pathMatch: 'full'
  },
  { path: 'login2',
  loadChildren: () => import('./login2/login2.module').then(m => m.Login2PageModule)

  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'confirmacionemail',
    loadChildren: () => import('./confirmacionemail/confirmacionemail.module').then( m => m.ConfirmacionemailPageModule)
  },
  {
    path: 'caja1',
    loadChildren: () => import('./caja1/caja1.module').then( m => m.Caja1PageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
