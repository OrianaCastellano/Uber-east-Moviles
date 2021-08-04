import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultilevelService } from 'src/app/multilevel.service';
@Component({
  selector: 'app-registro-restaurante',
  templateUrl: './registro-restaurante.page.html',
  styleUrls: ['./registro-restaurante.page.scss'],
})
export class RegistroRestaurantePage implements OnInit {
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
      name: ['', [Validators.required]],
      direction: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
    });
  }
  async registerRest() {
    // this.router.navigateByUrl("/login/restaurante", { replaceUrl: true });
    this.multilevelservice
      .registerRest(this.credentials.value)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigateByUrl('/login/restaurante', { replaceUrl: true });
        } else if (res.status == 403) {
          alert('Ya existe este correo');
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
  get firstname() {
    return this.credentials.get('firstname');
  }

  get latitude() {
    return this.credentials.get('latitude');
  }

  get longitude() {
    return this.credentials.get('longitude');
  }

  get foto() {
    return this.credentials.get('foto');
  }
  get direccion() {
    return this.credentials.get('direccion');
  }
}
