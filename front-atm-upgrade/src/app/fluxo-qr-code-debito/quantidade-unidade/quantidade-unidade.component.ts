import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-quantidade-unidade',
  templateUrl: './quantidade-unidade.component.html',
  styleUrls: ['./quantidade-unidade.component.scss']
})
export class QuantidadeUnidadeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/pagamento-cartao-debito']);
  }

  back(){
    this.router.navigate(['/selecionar-unidade']);
  }

}
