import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pags/user/user.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { NavbarComponent } from './shard/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
