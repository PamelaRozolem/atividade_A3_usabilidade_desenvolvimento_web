import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QrCodeDebitoComponent } from './qr-code-debito/qr-code-debito.component';
import { SelecionarUnidadeComponent } from './qr-code-debito/selecionar-unidade/selecionar-unidade.component';


const routes: Routes = [
  {
    path: '',
    component: QrCodeDebitoComponent,
    children: [
      {
        path: 'selecionar-unidade',
        component: SelecionarUnidadeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class NewAtmModuleRoutingModule { }
