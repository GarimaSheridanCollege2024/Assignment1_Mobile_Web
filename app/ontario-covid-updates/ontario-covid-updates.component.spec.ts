import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-ontario-covid-updates',
  templateUrl: './ontario-covid-updates.component.html',
  styleUrls: ['./ontario-covid-updates.component.scss'],
})
export class OntarioCovidUpdatesComponent implements OnInit {
  public covidData: any;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getOntarioCovidSummary().subscribe(data => {
      this.covidData = data;
    });
  }
}
