import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-selecionar-unidade',
  templateUrl: './selecionar-unidade.component.html',
  styleUrls: ['./selecionar-unidade.component.scss']
})
export class SelecionarUnidadeComponent implements OnInit {
  idRouter: string;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goTo(){
    this.router.navigate(['/quantidade-unidade']);
  }

  backHome(){
    window.history.back();
  }

}
