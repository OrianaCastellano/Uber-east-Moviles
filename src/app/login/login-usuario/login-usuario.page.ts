import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    private multilevelservice: MultilevelService,
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      Email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }
  async login() {
    this.router.navigateByUrl("/sesion/usuario", { replaceUrl: true });
    //jeliana aca llamas al servicio multilevel service para que el multilevel service hagfa el inicio de sesion  
this.multilevelservice.setusers(
{
name: "Ori",
type: 1
}
)
    console.log (this.credentials.value)
  } 
  
  get email() {
    return this.credentials.get("Email");
  }

  get password() {
    return this.credentials.get("password");
  }
}