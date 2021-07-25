import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  credentials: FormGroup;
  user: string;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      Email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      name:["", [Validators.required]],
      firstname: ["", [Validators.required]],
      direction: ["", [Validators.required]],
  });
}
async Register() {
  this.router.navigateByUrl("/login/usuario", { replaceUrl: true });
  
  console.log (this.credentials.value)
} 

get Email() {
  return this.credentials.get("Email");
}

get password() {
  return this.credentials.get("password");
}
get firstname() {
  return this.credentials.get("firstname");
}

get name() {
  return this.credentials.get("name");
}


}
