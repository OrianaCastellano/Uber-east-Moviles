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
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
    });
  }
  async RegisterConductor() {
    this.multilevelservice
      .register(this.credentials.value)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.router.navigateByUrl('/login/usuario', { replaceUrl: true });
        } else if (res.status == 403) {
          alert('Ya existe este correo');
        } else {
          alert('Error del servidor');
        }
      });
    console.log(this.credentials.value);
  }

  get Email() {
    return this.credentials.get('Email');
  }

  get password() {
    return this.credentials.get('password');
  }
  get firstname() {
    return this.credentials.get('firstname');
  }

  get name() {
    return this.credentials.get('name');
  }
}
