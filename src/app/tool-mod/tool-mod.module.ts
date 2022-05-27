import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SearchComponent } from '../search/search.component';
import { MainComponent } from '../main/main.component';

const toolRoutes: Routes = [
  {
    path: '', 
    component: MainComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'search', component: SearchComponent },
    ],
  }


];

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    SearchComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(toolRoutes)
  ],
  exports: [RouterModule]

})
export class ToolModModule { }
