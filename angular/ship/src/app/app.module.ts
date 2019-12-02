import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
const appRoutes = [
  { path: '', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile', component: ProfileComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
