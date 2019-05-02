import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ShotService } from './shot.service';
describe('ShotService', () => {
  let service: ShotService;
  beforeEach(() => {
    const httpClientStub = {
      get: (arg1, httpOptions2) => ({ pipe: () => ({}) }),
      post: (arg1, arg2, httpOptions3) => ({ pipe: () => ({}) }),
      delete: (arg1, httpOptions2) => ({ pipe: () => ({}) })
    };
    const httpErrorResponseStub = {
      error: { message: {} },
      status: {},
      message: {}
    };
    TestBed.configureTestingModule({
      providers: [
        ShotService,
        { provide: HttpClient, useValue: httpClientStub },
        { provide: HttpErrorResponse, useValue: httpErrorResponseStub }
      ]
    });
    service = TestBed.get(ShotService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('list', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get').and.callThrough();
      service.list();
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
  describe('find', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'get').and.callThrough();
      service.find(1);
      expect(httpClientStub.get).toHaveBeenCalled();
    });
  });
  describe('like', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'post').and.callThrough();
      service.like(1);
      expect(httpClientStub.post).toHaveBeenCalled();
    });
  });
  describe('unlike', () => {
    it('makes expected calls', () => {
      const httpClientStub: HttpClient = TestBed.get(HttpClient);
      spyOn(httpClientStub, 'delete').and.callThrough();
      service.unlike(1);
      expect(httpClientStub.delete).toHaveBeenCalled();
    });
  });
});
