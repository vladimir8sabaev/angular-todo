import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { TasksServiceService } from './tasks-service.service';

@NgModule({
  declarations: [AppComponent, ItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [TasksServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
