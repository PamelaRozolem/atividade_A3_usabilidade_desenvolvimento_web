import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-digite-senha-debito',
  templateUrl: './digite-senha-debito.component.html',
  styleUrls: ['./digite-senha-debito.component.scss']
})
export class DigiteSenhaDebitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goTo(){
    this.router.navigate(['/venda-andamento']);
  }

}
