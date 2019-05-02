import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { IShot } from 'src/app/models/shot';
import { ShotService } from './../../services/shot.service';

@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShotComponent implements OnInit {
  shots: IShot[] = [];
  sizeImage = false;
  shotForm: FormGroup;
  resetShot = [];

  constructor(
    private shotService: ShotService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
    this.filterShots();
  }

  ngOnInit() {
    this.getShots();
  }

  buildForm() {
    this.shotForm = this.formBuilder.group({
      searched: ''
    });
  }

  getShots() {
    this.shotForm.get('searched').setValue('');
    this.shotService.list().subscribe(
      shots => {
        if (!shots.length) {
          this.shots = [];
          console.info('Lista vazia!');
          return;
        }
        this.shots = shots;
        this.resetShot = [...this.shots];
      },
      error => {
        console.log(error);
      }
    );
  }

  filterShots() {
    this.shotForm
      .get('searched')
      .valueChanges.pipe(
        filter(str => str.length > 2),
        debounceTime(300)
      )
      .subscribe(filtered => {
        if (filtered && filtered.length !== 0 && filtered !== '') {
          this.shots = this.resetShot.filter(
            shot =>
              shot.title &&
              shot.title.toLowerCase().indexOf(filtered.toLowerCase()) > -1
          );
        } else {
          this.shots = this.resetShot;
        }
      });
  }

  toogleSize() {
    this.sizeImage = !this.sizeImage;
  }
}
