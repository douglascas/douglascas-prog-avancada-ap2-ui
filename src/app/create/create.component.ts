import { Component, OnInit, ViewChildren } from '@angular/core';
import { TariffsService } from '../services/tariffs.service';
import { Manufacturer } from '../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  tariffs: Manufacturer[] = [];

  constructor(private _tariffsService: TariffsService) { }

  ngOnInit() {
    this.listManufacturer();
  }

  /**
   * Método para listar `Manufacturer`.
   */
  listManufacturer(): void {
    this._tariffsService.list()
      .subscribe(list => this.tariffs = list);
  }

  save(): void {
    console.log('salvou!');
  }

}
