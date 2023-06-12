import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-deseja-comprar-top-debito',
  templateUrl: './deseja-comprar-top-debito.component.html',
  styleUrls: ['./deseja-comprar-top-debito.component.scss']
})
export class DesejaComprarTopDebitoComponent implements OnInit {
  idRouter: string;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goTo(){
    // this.router.navigate(['/quantidade-unidade']);
  }

  backHome(){
    window.history.back();
  }

}
