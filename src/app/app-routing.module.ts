import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { OwnersComponent } from './owners/owners.component';

const routes: Routes = [
{ path: 'templates', component: TemplatesComponent },
{ path: 'owners', component: OwnersComponent },
{ path: '**', redirectTo: 'templates', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
