import { Component, OnInit } from '@angular/core';

import {Fruta} from '../fruta';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {
	//fruta = 'manzana';

	fruta:Fruta={
		id:1,
		nombre:'manzana',
		color:'rojo'
	}

	fruta2:Fruta={
		id:2,
		nombre:'naranja',
		color:'naranja'
	}

  constructor() { }

  ngOnInit() {
  }

}
