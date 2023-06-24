import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { TasksServiceService } from './tasks-service.service';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './auth-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TasksServiceService, AuthServiceService, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
