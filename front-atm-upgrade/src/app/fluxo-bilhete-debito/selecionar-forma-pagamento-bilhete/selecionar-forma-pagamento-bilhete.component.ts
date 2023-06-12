import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-forma-pagamento-bilhete',
  templateUrl: './selecionar-forma-pagamento-bilhete.component.html',
  styleUrls: ['./selecionar-forma-pagamento-bilhete.component.scss']
})
export class SelecionarFormaPagamentoBilheteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/selecionar-valor-tp-recarga']);
  }
}
