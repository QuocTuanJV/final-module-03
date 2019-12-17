import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';
import { AwesomeAddComponent } from './awesome-add/awesome-add.component';
import { AwesomeComponent } from './awesome/awesome.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
const router: Routes = [
  {
    path: 'list',
    component: AwesomeListComponent
  },
  {
    path: 'add',
    component: AwesomeAddComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AwesomeListComponent,
    AwesomeAddComponent,
    AwesomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
