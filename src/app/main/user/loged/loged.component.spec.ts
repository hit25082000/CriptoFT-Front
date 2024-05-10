import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogedComponent } from './loged.component';

describe('LogedComponent', () => {
  let component: LogedComponent;
  let fixture: ComponentFixture<LogedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
