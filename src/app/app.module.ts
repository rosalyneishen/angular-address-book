import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomUserService } from 'src/app/services/random-user-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressBookCardComponent } from './components/address-book-card/address-book-card.component';
import { AddressBookListComponent } from './components/address-book-list/address-book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookListComponent,
    AddressBookCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
