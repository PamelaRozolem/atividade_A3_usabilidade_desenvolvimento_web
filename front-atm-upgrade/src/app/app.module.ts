import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { QrCodeDebitoHomeComponent } from './qr-code-debito-home/qr-code-debito-home.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { CardBannerComponent } from './components/card-banner/card-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelecionarUnidadeComponent } from './selecionar-unidade/selecionar-unidade.component';
import { ButtonFooterComponent } from './components/button-footer/button-footer.component';
import { QuantidadeUnidadeComponent } from './quantidade-unidade/quantidade-unidade.component';
import { PagtoCartaoDebitoComponent } from './telas-commons/pagto-cartao-debito/pagto-cartao-debito.component';
import { DigiteSenhaDebitoComponent } from './telas-commons/digite-senha-debito/digite-senha-debito.component';
import { VendaEmAndamentoComponent } from './telas-commons/venda-em-andamento/venda-em-andamento.component';



@NgModule({
  declarations: [
    AppComponent,
    QrCodeDebitoHomeComponent,
    HeaderTitleComponent,
    CardBannerComponent,
    FooterComponent,
    SelecionarUnidadeComponent,
    ButtonFooterComponent,
    QuantidadeUnidadeComponent,
    PagtoCartaoDebitoComponent,
    DigiteSenhaDebitoComponent,
    VendaEmAndamentoComponent
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
