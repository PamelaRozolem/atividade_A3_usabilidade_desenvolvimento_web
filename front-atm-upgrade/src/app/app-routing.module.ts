import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecionarUnidadeComponent } from './fluxo-qr-code-debito/selecionar-unidade/selecionar-unidade.component';
import { QuantidadeUnidadeComponent } from './fluxo-qr-code-debito/quantidade-unidade/quantidade-unidade.component';
import { PagtoCartaoDebitoComponent } from './telas-commons/pagto-cartao-debito/pagto-cartao-debito.component';
import { DigiteSenhaDebitoComponent } from './telas-commons/digite-senha-debito/digite-senha-debito.component';
import { VendaEmAndamentoComponent } from './telas-commons/venda-em-andamento/venda-em-andamento.component';
import { RequisitandoQrCodeComponent } from './fluxo-qr-code-debito/requisitando-dr-code/requisitando-qr-code.component';
import { RetireBilheteComponent } from './fluxo-qr-code-debito/retire-bilhete/retire-bilhete.component';
import { AgradecimentoComponent } from './telas-commons/agradecimento/agradecimento.component';
import { HomeComponent } from './telas-commons/home/home.component';
import { InsiraCartaoComponent } from './telas-commons/insira-cartao/insira-cartao.component';
import { SelecioneTipoRecargaComponent } from './telas-commons/selecione-tipo-recarga/selecione-tipo-recarga.component';
import { SelecionarValorTpRecargaComponent } from './telas-commons/selecionar-valor-tp-recarga/selecionar-valor-tp-recarga.component';
import { SelecionarFormaPagamentoComponent } from './telas-commons/selecionar-forma-pagamento/selecionar-forma-pagamento.component';
import { PagtoDinheiroComponent } from './telas-commons/pagto-dinheiro/pagto-dinheiro.component';
import { ValorDinheiroAceitoComponent } from './fluxo-cartao-top-dinheiro/valor-dinheiro-aceito/valor-dinheiro-aceito.component';
import { RecargaRealizadaSucessoComponent } from './telas-commons/recarga-realizada-sucesso/recarga-realizada-sucesso.component';
import { TransacaoAprovadaQrCodeComponent } from './fluxo-qr-code-debito/transacao-aprovada-qr-code/transacao-aprovada-qr-code.component';
import { TransacaoAprovadaTopDinheiroComponent } from './fluxo-cartao-top-dinheiro/transacao-aprovada-top-dinheiro/transacao-aprovada-top-dinheiro.component';
import { DesejaComprarTopDebitoComponent } from './fluxo-cartao-top-debito/deseja-comprar-top-debito/deseja-comprar-top-debito.component';
import { PagtoCartaoTopDebitoComponent } from './fluxo-cartao-top-debito/pagto-cartao-top-debito/pagto-cartao-top-debito.component';
import { QuantidadeUnidadeTopDebito } from './fluxo-cartao-top-debito/quantidade-unidade-top-debito/quantidade-unidade-top-debito.component';
import { TransacaoAprovadaTopDebitoComponent } from './fluxo-cartao-top-debito/transacao-aprovada-top-debito/transacao-aprovada-top-debito.component';
import { RecargaSucessoTopDebitoComponent } from './fluxo-cartao-top-debito/recarga-sucesso-top-debito/recarga-sucesso-top-debito.component';
import { SelecionarFormaPagamentoBilheteComponent } from './fluxo-bilhete-debito/selecionar-forma-pagamento-bilhete/selecionar-forma-pagamento-bilhete.component';
import { SelecioneTipoRecargaBilheteComponent } from './fluxo-bilhete-debito/selecione-tipo-recarga-bilhete/selecione-tipo-recarga-bilhete.component';
import { InsiraCartaoBilheteComponent } from './fluxo-bilhete-debito/insira-cartao-bilhete/insira-cartao-bilhete.component';

const routes: Routes = [
  {
    path: 'home/:idBilheteUnico',
    component: HomeComponent
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
  },
  {
    path: 'transacao-aprovada-qr-code/qrcode',
    component: TransacaoAprovadaQrCodeComponent
  },
  {
    path: 'transacao-aprovada-qr-code/dinheiro',
    component: TransacaoAprovadaTopDinheiroComponent
  },
  {
    path: 'transacao-aprovada-qr-code/debito',
    component: TransacaoAprovadaTopDebitoComponent
  },
  {
    path: 'deseja-comprar-top-debito',
    component: DesejaComprarTopDebitoComponent
  },
  {
    path: 'recarga-sucesso-top-debito',
    component: RecargaSucessoTopDebitoComponent
  },
  {
    path: 'pagamento-cartao-top-debito',
    component: PagtoCartaoTopDebitoComponent
  },
  {
    path: 'requisitando-qr-code',
    component: RequisitandoQrCodeComponent
  },
  {
    path: 'quantidade-unidade-top-debito',
    component: QuantidadeUnidadeTopDebito
  },
  {
    path: 'retire-bilhete',
    component: RetireBilheteComponent
  },
  {
    path: 'transacao-aprovada-top-debito',
    component: TransacaoAprovadaTopDebitoComponent
  },
  {
    path: 'agradecimento',
    component: AgradecimentoComponent
  },
  {
    path: 'insira-cartao',
    component: InsiraCartaoComponent
  },
  {
    path: 'insira-cartao-bilhete',
    component: InsiraCartaoBilheteComponent
  },
  {
    path: 'selecione-tipo-recarga',
    component: SelecioneTipoRecargaComponent
  },
  {
    path: 'selecione-tipo-recarga-bilhete',
    component: SelecioneTipoRecargaBilheteComponent
  },
  {
    path: 'selecionar-valor-tp-recarga',
    component: SelecionarValorTpRecargaComponent
  },
  {
    path: 'selecionar-forma-pagamento',
    component: SelecionarFormaPagamentoComponent
  },
  {
    path: 'selecionar-forma-pagamento-bilhete',
    component: SelecionarFormaPagamentoBilheteComponent
  },
  {
    path: 'pagto-dinheiro',
    component: PagtoDinheiroComponent
  },
  {
    path: 'valor-dinheiro-aceito',
    component: ValorDinheiroAceitoComponent
  },
  {
    path: 'recarga-realizada-sucesso',
    component: RecargaRealizadaSucessoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
