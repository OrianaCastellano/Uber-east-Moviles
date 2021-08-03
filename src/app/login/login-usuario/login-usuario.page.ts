import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultilevelService } from 'src/app/multilevel.service';
@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.page.html',
  styleUrls: ['./login-usuario.page.scss'],
})
export class LoginUsuarioPage implements OnInit {
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
  async loginUser() {
    this.multilevelservice
      .loginUser(this.credentials.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res.status == 200) {
          let user = {
            name: res.data[0].profile.u_name,
            lastname: res.data[0].profile.u_lastname,
            email: res.data[0].profile.u_email,
            id: res.data[0].profile.u_id,
            token: res.data[0].token,
            type: 1,
          };
          this.multilevelservice.setusers(user);
          this.router.navigateByUrl('/sesion/usuario', { replaceUrl: true });
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
