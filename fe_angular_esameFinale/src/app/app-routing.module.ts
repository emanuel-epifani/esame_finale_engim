import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticoliComponent } from './components/articoli/articoli.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OrdiniComponent } from './components/ordini/ordini.component';
import { TariffeComponent } from './components/tariffe/tariffe.component';

const routes: Routes = [
    {path:'', redirectTo:'/homepage', pathMatch:'full'},
    {path:'homepage', component: HomepageComponent},
    {path:'elencoArticoli', component: ArticoliComponent},
    {path:'elencoTariffe', component: TariffeComponent },
    {path:'elencoOrdini', component: OrdiniComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
