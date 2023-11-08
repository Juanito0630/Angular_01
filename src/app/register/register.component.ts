import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(public router: Router){
    
  }

  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }

}
