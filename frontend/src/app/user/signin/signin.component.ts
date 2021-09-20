import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../services/account.service";
import {userError} from "@angular/compiler-cli/src/transformers/util";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
    });
  }



  public onSubmit(event) {
    event.preventDefault();
    this.accountService.login(this.form.get('email').value, this.form.get('password').value)
      .pipe(
        tap(()=> this.router.navigate(['/articles']))
      )
      .subscribe();
  }
}
