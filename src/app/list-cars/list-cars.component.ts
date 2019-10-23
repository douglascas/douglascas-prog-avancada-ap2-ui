import { Component, OnInit } from '@angular/core';
import { AutoMobileService } from '../services/auto-mobile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheaperRent } from '../models';

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
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      email: ['', Validators.required],
      loyaltyProgram: false
    });
  }

  ngOnInit() {
    this.getCar();
  }

  getCar(): void {
    this._autoMobileService.getCheaperRent(this.carsForm.value)
      .subscribe(cheaperRent => this.cheaperRent = cheaperRent);
  }

  canSearch(): boolean {
    return this.carsForm && this.carsForm.invalid;
  }
}

