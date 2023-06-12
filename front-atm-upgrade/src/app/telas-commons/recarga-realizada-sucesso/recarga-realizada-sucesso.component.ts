import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recarga-realizada-sucesso',
  templateUrl: './recarga-realizada-sucesso.component.html',
  styleUrls: ['./recarga-realizada-sucesso.component.scss']
})
export class RecargaRealizadaSucessoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['transacao-aprovada-qr-code/dinheiro']);
  }

}
