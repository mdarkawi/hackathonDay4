import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {AccountService} from "../services/account.service";
import {AlertService} from "../services/alert.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  public loading: boolean;
  constructor(
    public formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService:AlertService
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      username: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
      password2: this.formBuilder.control(null, [Validators.required]),
    });
  }
  public get password(): AbstractControl {
    return this.form.get('password');
  }
  public get password2(): AbstractControl {
    return this.form.get('password2');
  }
  public onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.form);

    this.loading = false;


    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.accountService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          //this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error => {
          console.error(error);
          this.loading = false;
        });
  }

}
