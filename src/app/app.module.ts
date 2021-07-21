import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersComponent } from './owners/owners.component';
import { FormsModule } from '@angular/forms';
import { TemplatesComponent } from './templates/templates.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
    // RouterModule.forRoot([
      // { path: 'templates', component: TemplatesComponent },
      // { path: 'owners', component: OwnersComponent },
      // { path: '**', redirectTo: 'templates', pathMatch: 'full'},
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
