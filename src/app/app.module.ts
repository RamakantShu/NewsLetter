import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2Webstorage} from 'ngx-webstorage'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';

import{ AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2Webstorage,
    AngularEditorModule,
    //RouterModule.forRoot(routes, { useHash: true })
    RouterModule.forRoot([
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'home',
            component: HomeComponent,
        },
        {
            path: 'admin',
            component: AdminComponent,
            canActivate:[AuthGuard]

        },        
        {
            path: 'admin/login',
            component: LoginComponent,
        }        

    ], { useHash: false })
  ],
  //providers: [AuthGuard],
  providers: [
    { provide: AuthGuard, useClass: AuthGuard },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
