import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersComponent } from './owners/owners.component';
import { OwnerComponent } from './owner/owner.component';

const routes: Routes = [
{ path: 'owners', component: OwnersComponent },
{ path: 'owners/:aId', component: OwnerComponent },
{ path: '**', redirectTo: 'owners', pathMatch: 'full' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
