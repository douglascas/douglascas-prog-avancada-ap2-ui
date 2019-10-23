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
      startDate: '',
      endDate: '',
      loyaltyProgram: false
    });
  }

  ngOnInit() {
    this.listCars();

    this.carsForm.valueChanges
      .pipe(debounceTime(300))
      .subscribe(filters => {
        this.listCars(filters);
      });
  }

  listCars(params?: AutoParams): void {
    this._autoMobileService.listCheaperRent(params)
      .subscribe(cheaperRents => this.cheaperRents = cheaperRents);
  }

}
