import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { EsqueciComponent } from './esqueci/esqueci.component';



const routes: Routes = [
  {path: 'vitrine', component:VitrineComponent},
  {path:'', component:VitrineComponent},
  {path:'produto-detalhe', component:ProdutoDetalheComponent},
  {path:'produto-busca', component:ProdutoBuscaComponent},
  {path:'cesta', component:CestaComponent},
  {path:'login', component:LoginComponent},
  {path:'esqueci', component:EsqueciComponent}
];
=======

const routes: Routes = [];
>>>>>>> fcfe62346f3a33b739c2184027934494c5d10c6a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
