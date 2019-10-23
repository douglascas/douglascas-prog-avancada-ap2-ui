import { Component, OnInit } from '@angular/core';
import { AutoMobileService, AutoParams } from '../services/auto-mobile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheaperRent } from '../models';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  cheaperRents: CheaperRent[] = [];
  carsForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private _autoMobileService: AutoMobileService,
  ) {
    this.carsForm = fb.group({
      startDate: this._formatDate(new Date()),
      endDate: this._formatDate(new Date()),
      loyaltyProgram: false
    });
  }

  ngOnInit() {
    this.listCars();

    this.carsForm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(filters => this.listCars(filters));
  }

  listCars(params?: AutoParams): void {
    this._autoMobileService.listCheaperRent(params)
      .subscribe(cheaperRents => this.cheaperRents = cheaperRents);
  }

  private _formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
  }
}
