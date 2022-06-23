import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RestaComponent } from './resta/resta.component';
import { SumaComponent } from './suma/suma.component';

const routes: Routes = [
  {path:'calcularSuma',component:SumaComponent},
  {path:'calcularResta',component:RestaComponent},
  {path:'inicio',component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
