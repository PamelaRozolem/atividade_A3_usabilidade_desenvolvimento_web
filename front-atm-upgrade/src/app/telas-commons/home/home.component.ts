import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flagBilheteUnico: boolean;
  idRouter: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.idRouter = params['idBilheteUnico']);
  }

  ngOnInit() {
    this.idRouter === '1' ? this.flagBilheteUnico = true : this.flagBilheteUnico = false;
  }

}
