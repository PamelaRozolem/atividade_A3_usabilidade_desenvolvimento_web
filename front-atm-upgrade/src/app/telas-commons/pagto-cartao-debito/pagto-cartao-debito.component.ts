import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagto-cartao-debito',
  templateUrl: './pagto-cartao-debito.component.html',
  styleUrls: ['./pagto-cartao-debito.component.scss']
})
export class PagtoCartaoDebitoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/digite-senha-debito']);
  }

  back(){
    this.router.navigate(['/home']);
  }

}
