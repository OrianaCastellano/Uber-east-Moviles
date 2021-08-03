import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultilevelService } from 'src/app/multilevel.service';

@Component({
  selector: 'app-login-chofer',
  templateUrl: './login-chofer.page.html',
  styleUrls: ['./login-chofer.page.scss'],
})
export class LoginChoferPage implements OnInit {
  credentials: FormGroup;
  user: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private multilevelservice: MultilevelService
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  async loginChofer() {
    this.multilevelservice
      .loginChofer(this.credentials.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
          let chofer = {
            name: res.data[0].profile.d_name,
            lastname: res.data[0].profile.d_lastname,
            email: res.data[0].profile.d_email,
            id: res.data[0].profile.d_id,
            token: res.data[0].token,
            type: 3,
          };
          this.multilevelservice.setusers(chofer);
          // this.router.navigateByUrl('/sesion/chofer', { replaceUrl: true });
        } else if (res.status == 403) {
          alert('Error al iniciar sesion');
        } else {
          alert('Error del servidor');
        }
      });
    console.log(this.credentials.value);
  }

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}
