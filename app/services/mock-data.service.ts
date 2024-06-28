import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  getCanadaCovidSummary(): Observable<any> {
    const mockData = {
      casesToday: 4690,
      totalCases: 770793,
      activeCases: 55313,
      totalRecovered: 695769,
      deathsToday: 137,
      totalDeaths: 19801,
      testedToday: 79586,
      totalTested: 17370146,
      percentPositive: 4.3,
      peopleTestedPerMillion: 457046
    };
    return of(mockData);
  }

  getOntarioCovidSummary(): Observable<any> {
    const mockData = {
      totalCases: 266363,
      resolved: 240494,
      deaths: 6145,
      hospitalized: 1273,
      inICU: 353,
      ventilator: 216
    };
    return of(mockData);
  }
}
