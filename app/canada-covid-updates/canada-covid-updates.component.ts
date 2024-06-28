import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-canada-covid-updates',
  templateUrl: './canada-covid-updates.component.html',
  styleUrls: ['./canada-covid-updates.component.scss'],
})
export class CanadaCovidUpdatesComponent implements OnInit {
  public covidData: any;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.mockDataService.getCanadaCovidSummary().subscribe(data => {
      this.covidData = data;
    });
  }
}
