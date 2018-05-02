import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { GroupModule } from './group/group.module';
import { ConfirmService } from './confirm/confirm.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.Component';
import { ConfirmComponent } from './confirm/confirm.component';

const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    GroupModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
