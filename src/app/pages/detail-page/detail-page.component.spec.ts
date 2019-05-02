import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShotService } from 'src/app/services/shot.service';
import { DetailPageComponent } from './detail-page.component';
describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;
  beforeEach(() => {
    const activatedRouteStub = { snapshot: { params: { id: {} } } };
    const shotServiceStub = {
      find: arg1 => ({ subscribe: () => ({}) }),
      like: arg1 => ({ subscribe: () => ({}) })
    };
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DetailPageComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: ShotService, useValue: shotServiceStub }
      ]
    });
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const shotServiceStub: ShotService = fixture.debugElement.injector.get(
        ShotService
      );
      spyOn(shotServiceStub, 'find').and.callThrough();
      component.ngOnInit();
      expect(shotServiceStub.find).toHaveBeenCalled();
    });
  });
  describe('likeAShot', () => {
    it('makes expected calls', () => {
      const shotServiceStub: ShotService = fixture.debugElement.injector.get(
        ShotService
      );
      spyOn(shotServiceStub, 'like').and.callThrough();
      component.likeAShot(1);
      expect(shotServiceStub.like).toHaveBeenCalled();
    });
  });
});
