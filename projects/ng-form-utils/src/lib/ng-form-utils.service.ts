import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NgFormUtilsService {

  constructor() {
  }

  markAllAsTouched(x: AbstractControl, onlySelf = false) {
    if (x instanceof FormGroup) {
      for (const name of Object.keys(x.controls)) {
        this.markAllAsTouched(x.controls[name], true);
      }
    } else if (x instanceof FormArray) {
      for (const c of x.controls) {
        this.markAllAsTouched(c, true);
      }
    }
    x.markAsTouched({ onlySelf });
  }
}
