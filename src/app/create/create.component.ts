import { Component, OnInit } from '@angular/core';
import { TariffsService } from '../services/tariffs.service';
import { Manufacturer } from '../models';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  tarrifs: Manufacturer[] = [];

  constructor(private _tariffsService: TariffsService) { }

  ngOnInit() {
    this.listManufacturer();
  }

  /**
   * Método para listar `Manufacturer`.
   */
  listManufacturer(): void {
    this._tariffsService.list()
      .subscribe(list => this.tarrifs = list);
  }

}
