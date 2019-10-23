import { Component, OnInit } from '@angular/core';
import { TariffsService } from '../services/tariffs.service';
import { TariffsDetails } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tariff',
  templateUrl: './list-tariff.component.html',
  styleUrls: ['./list-tariff.component.scss']
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
    this._tariffsService.list().subscribe(list => this.tariffs = list);
  }

  /**
   * Rota para a `Tarifa` selecionada
   */
  goToTariffDetail(tariff: TariffsDetails): void {
    const link = ['/edit', tariff.id];
    this._router.navigate(link);
  }

  /**
   * Deleta a `Tarifa` selecionada
   */
  deleteItem(tariff: TariffsDetails) {
    if (confirm('Excluir item?')) {
      this._tariffsService.delete(+tariff.id)
        .subscribe(() => {
          this.tariffs = this.tariffs.filter(item => item.id !== tariff.id);
        });
    }
  }

}
