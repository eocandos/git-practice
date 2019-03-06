import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from '../app/flex/flex.component';

const routes: Routes = [
  { path: 'flex', component: FlexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
