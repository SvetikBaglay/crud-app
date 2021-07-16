import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { CarsComponent } from './cars/cars.component';
import { FormsModule } from '@angular/forms';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    CarsComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    RouterModule.forRoot([
      { path: 'templates', component: TemplatesComponent },
      { path: 'owners', component: OwnersComponent },
      { path: '**', redirectTo: 'templates', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
