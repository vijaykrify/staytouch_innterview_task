import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  loginForm: FormGroup;
  isValid=false;
  constructor(private route:Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit=()=> {
    if(this.loginForm.valid) {
     if(this.loginForm.value.username=='admin' && this.loginForm.value.password=='admin'){
       localStorage.setItem('valid','true');
       this.route.navigate(['/dashboard']);
     }
     else{
      this.route.navigate(['/']);
     }
    }
  }

}
