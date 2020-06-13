import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFromComponent } from './quote-from.component';

describe('QuoteFromComponent', () => {
  let component: QuoteFromComponent;
  let fixture: ComponentFixture<QuoteFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
