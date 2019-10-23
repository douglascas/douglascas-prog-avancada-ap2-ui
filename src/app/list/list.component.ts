import { Component, OnInit } from '@angular/core';
import { TariffsService } from '../services/tariffs.service';
import { TariffsDetails } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListTariffComponent implements OnInit {

  tariffs: TariffsDetails[] = [];

  constructor(
    private _tariffsService: TariffsService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.listTariffs();
  }

  /**
   * Método para listar `Manufacturer`.
   */
  listTariffs(): void {
    this._tariffsService.list()
      .subscribe(list => this.tariffs = list);
  }

  goToTariffDetail(tariff: TariffsDetails): void {
    const link = ['/edit', tariff.id];
    this._router.navigate(link);
  }


}
