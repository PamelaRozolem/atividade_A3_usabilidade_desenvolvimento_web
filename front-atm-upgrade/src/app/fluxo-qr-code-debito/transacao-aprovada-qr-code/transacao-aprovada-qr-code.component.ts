import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transacao-aprovada-qr-code',
  templateUrl: './transacao-aprovada-qr-code.component.html',
  styleUrls: ['./transacao-aprovada-qr-code.component.scss']
})
export class TransacaoAprovadaQrCodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // goTo(){
  //   this.router.navigate(['/requisitando-qr-code']);
  // }

}
