import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'; 
import appRoutes from './routerConfig';
import { AppComponent } from './app.component';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ChartsComponent } from 'chart-angular5';

@NgModule({ //adds metadata to class following in this case AppModule
  declarations: [
    AppComponent,
    HelloWordComponent,
    UserItemComponent,
    UserListComponent,
    HomeComponent,
    AboutusComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // ChartsComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } //specifies which component to use as top = AppComponent
