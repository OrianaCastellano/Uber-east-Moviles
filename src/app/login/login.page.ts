import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  user: string;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      Email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }
  async login() {
    this.router.navigateByUrl("/sesion", { replaceUrl: true });
    
    console.log (this.credentials.value)
  } 
  
  get email() {
    return this.credentials.get("Email");
  }

  get password() {
    return this.credentials.get("password");
  }

}

