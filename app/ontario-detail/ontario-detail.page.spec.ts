import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OntarioDetailPage } from './ontario-detail.page';

describe('OntarioDetailPage', () => {
  let component: OntarioDetailPage;
  let fixture: ComponentFixture<OntarioDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OntarioDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
