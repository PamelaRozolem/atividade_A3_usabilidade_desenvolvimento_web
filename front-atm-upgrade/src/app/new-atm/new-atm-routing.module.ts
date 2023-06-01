import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecionarUnidadeComponent } from './fluxo-qr-code-debito/selecionar-unidade/selecionar-unidade.component';
import { QrCodeDebitoHomeComponent } from './fluxo-qr-code-debito/qr-code-debito-home/qr-code-debito-home.component';
import { QuantidadeUnidadeComponent } from './fluxo-qr-code-debito/quantidade-unidade/quantidade-unidade.component';
import { PagtoCartaoDebitoComponent } from './telas-commons/pagto-cartao-debito/pagto-cartao-debito.component';
import { DigiteSenhaDebitoComponent } from './telas-commons/digite-senha-debito/digite-senha-debito.component';
import { VendaEmAndamentoComponent } from './telas-commons/venda-em-andamento/venda-em-andamento.component';


const routes: Routes = [
  {
    path: '',
    component: VendaEmAndamentoComponent,
    children: [
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
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewAtmModuleRoutingModule { }
