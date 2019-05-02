import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule {}
