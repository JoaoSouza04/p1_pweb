import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoBuscaComponent } from './produto-busca/produto-busca.component';
import { CestaComponent } from './cesta/cesta.component';
import { LoginComponent } from './login/login.component';
import { EsqueciComponent } from './esqueci/esqueci.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    ProdutoDetalheComponent,
    ProdutoBuscaComponent,
    CestaComponent,
    LoginComponent,
    EsqueciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
