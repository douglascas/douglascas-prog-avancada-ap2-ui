import { Component, OnInit } from '@angular/core';
import { AutoMobileService, AutoParams } from '../services/auto-mobile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CheaperRent } from '../models';
import { debounceTime } from 'rxjs/operators';
import { filter } from 'minimatch';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {

  cheaperRent: CheaperRent;
  carsForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private _autoMobileService: AutoMobileService,
  ) {
    this.carsForm = fb.group({
      startDate: new Date(),
      endDate: new Date(),
      loyaltyProgram: false
    });
  }

  ngOnInit() {
    this.getCar();

    this.carsForm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(filters => {
        filters.startDate = filters.startDate ? this._formatDate(filters.startDate) : null;
        filters.endDate = filters.endDate ? this._formatDate(filters.endDate) : null;
        this.getCar(filters);
      });
  }

  getCar(params?: AutoParams): void {
    this._autoMobileService.getCheaperRent(params)
      .subscribe(cheaperRent => this.cheaperRent = cheaperRent);
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
