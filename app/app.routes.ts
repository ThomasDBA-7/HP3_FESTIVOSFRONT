import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './features/componentes/inicio/inicio.component';
import { FestivoComponent } from './features/componentes/festivo/festivo.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'festivo', component: FestivoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
