import { IShot } from './../../models/shot';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShotService } from 'src/app/services/shot.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailPageComponent implements OnInit {
  routeId: string;
  shot: IShot = {};
  constructor(public route: ActivatedRoute, private shotService: ShotService) {}

  ngOnInit() {
    this.routeId = this.route.snapshot.params.id;
    if (this.routeId) {
      this.shotService.find(+this.routeId).subscribe(
        shot => {
          if (!shot) {
            this.shot = {};
            console.info('Shot não encontrado!');
            return;
          }
          this.shot = shot as IShot;
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  likeAShot(id: number) {
    this.shotService.like(+id).subscribe(
      response => {
        if (!response) {
          console.error('Falha ao curtir!');
          return;
        }
        console.info('Curtiu!!!');
      },
      error => {
        console.error(error);
      }
    );
  }

  unlikeAShot(id: number) {
    this.shotService.like(+id).subscribe(
      response => {
        if (!response) {
          console.error('Falha ao descurtir o Shot!');
          return;
        }
        console.info('Descurtiu!!!');
      },
      error => {
        console.error(error);
      }
    );
  }
}
