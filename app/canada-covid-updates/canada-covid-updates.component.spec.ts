import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanadaCovidUpdatesComponent } from './canada-covid-updates.component';

describe('CanadaCovidUpdatesComponent', () => {
  let component: CanadaCovidUpdatesComponent;
  let fixture: ComponentFixture<CanadaCovidUpdatesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CanadaCovidUpdatesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanadaCovidUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
