import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultilevelService } from 'src/app/multilevel.service';
@Component({
  selector: 'app-login-restaurante',
  templateUrl: './login-restaurante.page.html',
  styleUrls: ['./login-restaurante.page.scss'],
})
export class LoginRestaurantePage implements OnInit {
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
  async loginRest() {
    this.multilevelservice
      .loginRest(this.credentials.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
          let restaurante = {
            name: res.data[0].profile.e_name,
            email: res.data[0].profile.e_email,
            longitud: res.data[0].profile.e_longitude,
            latitud: res.data[0].profile.e_latitude,
            direccion: res.data[0].profile.e_direction,
            id: res.data[0].profile.e_id,
            token: res.data[0].token,
            type: 2,
          };
          this.multilevelservice.setusers(restaurante);
          this.router.navigateByUrl('/sesion/restaurante', {
            replaceUrl: true,
          });
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
