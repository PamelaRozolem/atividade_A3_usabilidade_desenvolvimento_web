import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valor-dinheiro-aceito',
  templateUrl: './valor-dinheiro-aceito.component.html',
  styleUrls: ['./valor-dinheiro-aceito.component.scss']
})
export class ValorDinheiroAceitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/recarga-realizada-sucesso']);
  }

}
