import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagto-cartao-top-debito',
  templateUrl: './pagto-cartao-top-debito.component.html',
  styleUrls: ['./pagto-cartao-top-debito.component.scss']
})
export class PagtoCartaoTopDebitoComponent implements OnInit {

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
