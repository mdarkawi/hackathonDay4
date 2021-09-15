import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.required]),
      password1: this.formBuilder.control(null, [Validators.required]),
    });
  }

}
