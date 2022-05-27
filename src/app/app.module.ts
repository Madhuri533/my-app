import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { MytextComponent } from './mytext/mytext.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbComponent } from './navb/navb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { SmallformComponent } from './smallform/smallform.component';
import { ViewchldconcComponent } from './viewchldconc/viewchldconc.component';
import { ChildComponent } from './viewchldconc/child/child.component';
import { ContentNgComponent } from './content-ng/content-ng.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ChangecolorDirective } from './changeColor/changecolor.directive';
import { RendererDirDirective } from './rendererDirective/renderer-dir.directive';
import { HoatDirDirective } from './host-dir/hoat-dir.directive';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { EmpRouComponent } from './emp-rou/emp-rou.component';
import { StudentsRouComponent } from './students-rou/students-rou.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutNavigateComponent } from './about-navigate/about-navigate.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { UnsavedGuard } from './unsaved.guard';
import { UnSavedSearchComponent } from './un-saved-search/un-saved-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ObshttpCompComponent } from './obshttp-comp/obshttp-comp.component';
import { HttpClientModule } from '@angular/common/http';
import { OperCompComponent } from './oper-comp/oper-comp.component';
import { FormCompComponent } from './form-comp/form-comp.component';
import { AssgFormComponent } from './assg-form/assg-form.component';
import { ReactiveFormComComponent } from './reactive-form-com/reactive-form-com.component';
import { CustomValComComponent } from './custom-val-com/custom-val-com.component';
import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { FilteringPipeComponent } from './filtering-pipe/filtering-pipe.component';
import { SortPipe } from './sort.pipe';
import { HttpCompComponent } from './http-comp/http-comp.component';
import { SampHttpPostComponent } from './samp-http-post/samp-http-post.component';




@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    MytextComponent,
    NavbComponent,
    TestComponent,
    SmallformComponent,
    ViewchldconcComponent,
    ChildComponent,
    ContentNgComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    ChangecolorDirective,
    RendererDirDirective,
    HoatDirDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    EmpRouComponent,
    StudentsRouComponent,
    AboutNavigateComponent,
    AdminComponent,
    UnSavedSearchComponent,
    PageNotFoundComponent,
    HomeComponent,
    UserComponent,
    ObshttpCompComponent,
    OperCompComponent,
    FormCompComponent,
    AssgFormComponent,
    ReactiveFormComComponent,
    CustomValComComponent,
    ShortenPipe,
    FilterPipe,
    FilteringPipeComponent,
    SortPipe,
    HttpCompComponent,
    SampHttpPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
