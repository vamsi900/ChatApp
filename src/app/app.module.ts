import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCalendarModule } from 'ss-ngx-calendar';
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
