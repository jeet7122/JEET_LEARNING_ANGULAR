import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmployeeListComponent } from './modify-employee-list.component';

describe('ModifyEmployeeListComponent', () => {
  let component: ModifyEmployeeListComponent;
  let fixture: ComponentFixture<ModifyEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyEmployeeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
