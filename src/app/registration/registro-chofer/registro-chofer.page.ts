import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultilevelService } from 'src/app/multilevel.service';
@Component({
  selector: 'app-registro-chofer',
  templateUrl: './registro-chofer.page.html',
  styleUrls: ['./registro-chofer.page.scss'],
})
export class RegistroChoferPage implements OnInit {
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
      lastname: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      color: ['', [Validators.required]],
      placa: ['', [Validators.required]],
    });
  }
  async registerConductor() {
    this.multilevelservice
      .registerConductor(this.credentials.value)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigateByUrl('/login/chofer', { replaceUrl: true });
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
  get lastname() {
    return this.credentials.get('lastname');
  }

  get name() {
    return this.credentials.get('name');
  }

  get foto() {
    return this.credentials.get('foto');
  }

  get color() {
    return this.credentials.get('color');
  }
  get placa() {
    return this.credentials.get('placa');
  }
}
