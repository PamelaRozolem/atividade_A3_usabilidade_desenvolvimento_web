import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeDebitoComponent } from './qr-code-debito/qr-code-debito.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';
import { CardBannerComponent } from './components/card-banner/card-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelecionarUnidadeComponent } from './qr-code-debito/selecionar-unidade/selecionar-unidade.component';
import { ButtonFooterComponent } from './components/button-footer/button-footer.component';
import { NewAtmModuleRoutingModule } from './new-atm-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NewAtmModuleRoutingModule
  ],
  declarations: [
    QrCodeDebitoComponent,
    HeaderTitleComponent,
    CardBannerComponent,
    FooterComponent,
    SelecionarUnidadeComponent,
    ButtonFooterComponent,
  ]
})
export class NewAtmModule { }
