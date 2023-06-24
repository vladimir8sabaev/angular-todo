import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { TasksServiceService } from './tasks-service.service';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './auth-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, ItemComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TasksServiceService, AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
