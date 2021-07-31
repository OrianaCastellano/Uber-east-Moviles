import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
    private multilevelservice: MultilevelService,
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      Email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }
  async login() {
    this.router.navigateByUrl("/sesion/restaurante", { replaceUrl: true });
    //jeliana aca llamas al servicio multilevel service para que el multilevel service hagfa el inicio de sesion  
    this.multilevelservice.setusers(
      {
      name: "Ori",
      type: 2
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