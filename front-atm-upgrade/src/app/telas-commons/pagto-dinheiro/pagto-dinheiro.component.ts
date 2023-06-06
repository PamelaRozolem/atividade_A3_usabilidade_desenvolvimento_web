import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagto-dinheiro',
  templateUrl: './pagto-dinheiro.component.html',
  styleUrls: ['./pagto-dinheiro.component.scss']
})
export class PagtoDinheiroComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/valor-dinheiro-aceito']);
  }

  back(){
    this.router.navigate(['/selecionar-forma-pagamento']);
  }

}
