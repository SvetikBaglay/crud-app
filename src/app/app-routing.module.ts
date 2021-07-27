import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { OwnerComponent } from './owner/owner.component';

const routes: Routes = [
{ path: '', redirectTo: '/owners', pathMatch: 'full' },
{ path: 'owners', component: OwnersComponent },
{ path: 'owners/:id', component: OwnerComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
