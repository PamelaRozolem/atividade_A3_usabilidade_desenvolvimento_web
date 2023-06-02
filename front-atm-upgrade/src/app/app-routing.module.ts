import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCodeDebitoHomeComponent } from './qr-code-debito-home/qr-code-debito-home.component';
import { SelecionarUnidadeComponent } from './selecionar-unidade/selecionar-unidade.component';
import { QuantidadeUnidadeComponent } from './quantidade-unidade/quantidade-unidade.component';
import { PagtoCartaoDebitoComponent } from './telas-commons/pagto-cartao-debito/pagto-cartao-debito.component';
import { DigiteSenhaDebitoComponent } from './telas-commons/digite-senha-debito/digite-senha-debito.component';
import { VendaEmAndamentoComponent } from './telas-commons/venda-em-andamento/venda-em-andamento.component';

const routes: Routes = [
  {
    path: '',
    component:  QrCodeDebitoHomeComponent
  },
  {
    path: 'selecionar-unidade',
    component: SelecionarUnidadeComponent
  },
  {
    path: 'quantidade-unidade',
    component: QuantidadeUnidadeComponent
  },
  {
    path: 'pagamento-cartao-debito',
    component: PagtoCartaoDebitoComponent
  },
  {
    path: 'digite-senha-debito',
    component: DigiteSenhaDebitoComponent
  },
  {
    path: 'venda-andamento',
    component: VendaEmAndamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
