import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { CardBannerComponent } from './components/card-banner/card-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelecionarUnidadeComponent } from './fluxo-qr-code-debito/selecionar-unidade/selecionar-unidade.component';
import { ButtonFooterComponent } from './components/button-footer/button-footer.component';
import { QuantidadeUnidadeComponent } from './fluxo-qr-code-debito/quantidade-unidade/quantidade-unidade.component';
import { PagtoCartaoDebitoComponent } from './telas-commons/pagto-cartao-debito/pagto-cartao-debito.component';
import { DigiteSenhaDebitoComponent } from './telas-commons/digite-senha-debito/digite-senha-debito.component';
import { VendaEmAndamentoComponent } from './telas-commons/venda-em-andamento/venda-em-andamento.component';
import { TransacaoAprovadaComponent } from './telas-commons/transacao-aprovada/transacao-aprovada.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderTitleComponent,
    CardBannerComponent,
    FooterComponent,
    SelecionarUnidadeComponent,
    ButtonFooterComponent,
    QuantidadeUnidadeComponent,
    PagtoCartaoDebitoComponent,
    DigiteSenhaDebitoComponent,
    VendaEmAndamentoComponent,
    TransacaoAprovadaComponent,
    RequisitandoQrCodeComponent,
    RetireBilheteComponent,
    AgradecimentoComponent,
    HomeComponent,
    InsiraCartaoComponent,
    SelecioneTipoRecargaComponent,
    SelecionarValorTpRecargaComponent,
    SelecionarFormaPagamentoComponent,
    PagtoDinheiroComponent,
    ValorDinheiroAceitoComponent,
    RecargaRealizadaSucessoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
