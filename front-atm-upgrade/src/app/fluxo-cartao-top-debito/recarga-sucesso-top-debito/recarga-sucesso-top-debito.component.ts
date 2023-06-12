import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recarga-sucesso-top-debito',
  templateUrl: './recarga-sucesso-top-debito.component.html',
  styleUrls: ['./recarga-sucesso-top-debito.component.scss']
})
export class RecargaSucessoTopDebitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/transacao-aprovada-qr-code/dinheiro']);
  }

}
