import { Component, NgModule } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { EmpRouComponent } from './emp-rou/emp-rou.component';
import { HomeComponent } from './home/home.component';
import { MytextComponent } from './mytext/mytext.component';
import { ObshttpCompComponent } from './obshttp-comp/obshttp-comp.component';
import { OperCompComponent } from './oper-comp/oper-comp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResolvingGuard } from './resolving.guard';
import { SearchComponent } from './search/search.component';
import { StudentsRouComponent } from './students-rou/students-rou.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ToolModModule } from './tool-mod/tool-mod.module';
import { UnSavedSearchComponent } from './un-saved-search/un-saved-search.component';
import { UnsavedGuard } from './unsaved.guard';
import { UserComponent } from './user/user.component';

const AppRoutes: Routes= [
  {path:'',component:AdminComponent,
                canActivate:[AuthGuard]},
  {path:'admin',component:AdminComponent,
                canActivate:[AuthGuard]},
  {path:'unsavedsearch',
  component:UnSavedSearchComponent,
  canDeactivate: [UnsavedGuard] },
                 
  {path:'emp-rou/:id/:namee',component:EmpRouComponent},
  {path:'students-rou',component:StudentsRouComponent},
  {path:'tool-mod',
    loadChildren: () => import('./tool-mod/tool-mod.module').then(m => m.ToolModModule)
  },
  {path:'textcomponent', component:TextcomponentComponent},
  {path:'mytext',component:MytextComponent,
                 resolve:{data:ResolvingGuard}},

  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},

  {path:'obshttp',component:ObshttpCompComponent},
  {path:'oper',component:OperCompComponent},
  { path: 'del', loadChildren: () => import('./del/del.module').then(m => m.DelModule) },

  {path:'**',component:PageNotFoundComponent,data:{message:'not found'}}
  // {path:'/not-found',component:PageNotFoundComponent},
  // {path:'**',redirectTo:'/not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
