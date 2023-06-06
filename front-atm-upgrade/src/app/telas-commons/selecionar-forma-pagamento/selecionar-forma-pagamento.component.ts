import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-forma-pagamento',
  templateUrl: './selecionar-forma-pagamento.component.html',
  styleUrls: ['./selecionar-forma-pagamento.component.scss']
})
export class SelecionarFormaPagamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/selecionar-valor-tp-recarga']);
  }
}
