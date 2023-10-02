import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
