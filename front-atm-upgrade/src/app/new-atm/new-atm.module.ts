import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { CardBannerComponent } from './components/card-banner/card-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonFooterComponent } from './components/button-footer/button-footer.component';
import { NewAtmModuleRoutingModule } from './new-atm-routing.module';
import { QrCodeDebitoHomeComponent } from './fluxo-qr-code-debito/qr-code-debito-home/qr-code-debito-home.component';
import { SelecionarUnidadeComponent } from './fluxo-qr-code-debito/selecionar-unidade/selecionar-unidade.component';
import { QuantidadeUnidadeComponent } from './fluxo-qr-code-debito/quantidade-unidade/quantidade-unidade.component';
import { PagtoCartaoDebitoComponent } from './telas-commons/pagto-cartao-debito/pagto-cartao-debito.component';
import { DigiteSenhaDebitoComponent } from './telas-commons/digite-senha-debito/digite-senha-debito.component';
import { VendaEmAndamentoComponent } from './telas-commons/venda-em-andamento/venda-em-andamento.component';


@NgModule({
  declarations: [
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
    CommonModule,
    NewAtmModuleRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewAtmModule { }
