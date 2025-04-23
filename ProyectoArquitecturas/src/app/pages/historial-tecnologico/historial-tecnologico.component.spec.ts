import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTecnologicoComponent } from './historial-tecnologico.component';

describe('HistorialTecnologicoComponent', () => {
  let component: HistorialTecnologicoComponent;
  let fixture: ComponentFixture<HistorialTecnologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialTecnologicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialTecnologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
