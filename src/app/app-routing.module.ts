import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewStatusComponent } from './data-view-status/data-view-status.component';
import { TableStatusComponent } from './table-status/table-status.component';

const routes: Routes = [
  { path: '',  component: DataViewStatusComponent},
  { path: 'tableStatus/:nomeEstado', component: TableStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
