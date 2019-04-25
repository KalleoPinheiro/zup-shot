import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShotService } from 'src/app/services/shot.service';
import { ShotComponent } from './shot.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ShotComponent],
  exports: [ShotComponent],
  providers: [ShotService]
})
export class ShotModule {}
