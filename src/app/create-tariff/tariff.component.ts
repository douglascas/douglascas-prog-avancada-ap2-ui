import { Component, OnInit } from '@angular/core';
import { TariffsService } from '../services/tariffs.service';
import { Manufacturer, Categories, Tariffs, Model, ModelYear } from '../models';
import { AutoMobileService } from '../services/auto-mobile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

  tariff: Tariffs;

  categories: Categories[] = [];
  models: Model[] = [];
  years: ModelYear[] = [];
  manufacturers: Manufacturer[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _autoMobileService: AutoMobileService,
    private _tariffsService: TariffsService) {

  }

  ngOnInit() {
    if (this._route.snapshot.paramMap.get('id')) {
      const id = this._route.snapshot.paramMap.get('id');
      this.getTariffById(+id); // transforma o ID em number e envia para o método.
    } else {
      this.tariff = new Tariffs();
    }

    this.listManufacturer();
    this.loadCategories();
  }

  getTariffById(id: number): void {
    this._tariffsService.getTariffById(id).subscribe();
  }

  /**
   * Método para listar `Manufacturer`.
   */
  listManufacturer(): void {
    this._autoMobileService.listManufacturers()
      .subscribe(list => this.manufacturers = list);
  }

  /**
   * Método para listar `Categories`.
   */
  loadCategories(): void {
    this._autoMobileService.listCategories()
      .subscribe(list => this.categories = list);
  }

  /**
   * Método para listar `Models`.
   */
  loadModels(manufactureId: number): void {
    this._autoMobileService.listModelsByManufactureId(manufactureId)
      .subscribe(list => this.models = list);
  }

  loadYears(manufactureId: number, modelId: number): void {
    this._autoMobileService.listYearsByManufactureAndModelId(manufactureId, modelId)
      .subscribe(list => this.years = list);
  }

  updateModel(): void {
    const hasManufacture = this.tariff.manufacturer && this.tariff.manufacturer.id;
    if (hasManufacture) {
      this.loadModels(this.tariff.manufacturer.id);
    }
  }

  updateYears(): void {
    const hasManufacture = this.tariff.manufacturer && this.tariff.manufacturer.id;
    const hasModel = this.tariff.model && this.tariff.model.id;
    if (hasManufacture && hasModel) {
      this.loadYears(this.tariff.manufacturer.id, this.tariff.model.id);
    }
  }

  createTariff(): void {
    this._tariffsService.create(this.tariff).subscribe();
  }

  compareByID(first?: any, second?: any) {
    return first && second && first.id === second.id;
  }

}
