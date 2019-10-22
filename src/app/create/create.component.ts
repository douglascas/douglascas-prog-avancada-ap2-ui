import { Component, OnInit } from '@angular/core';
import { TariffsService } from '../services/tariffs.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  tarrifs: any[] = [];

  constructor(private _tariffsService: TariffsService) { }

  ngOnInit() {
    this._tariffsService.list()
      .subscribe(list => this.tarrifs = list);
  }

}
