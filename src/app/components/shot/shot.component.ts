import { Component, OnInit } from '@angular/core';
import { IShot } from 'src/app/models/shot';
import { ShotService } from './../../services/shot.service';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.scss']
})
export class ShotComponent implements OnInit {
  title = 'zup-shot';
  shots: IShot[] = [];

  constructor(private shotService: ShotService) {}

  ngOnInit() {
    this.shotService.list().subscribe(
      shots => {
        if (!shots.length) {
          this.shots = [];
          console.info('Lista vazia!');
          return;
        }
        this.shots = shots;
      },
      error => {
        console.log(error);
      }
    );
  }
}
