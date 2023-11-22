import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  storageGlobal: String = ''
  campo='';

  constructor(public router: Router){
    
  }

  


  navegar(){
    console.log("hola mundo")
    this.router.navigateByUrl('/registrar')
  }
  navegar1(){
    console.log("hola mundo")
    this.router.navigateByUrl('/dashboard')
  }
  getstoregeGlobal(){
    let texto = JSON.stringify( localStorage.getItem('campo'))
    console.log(texto)
    //this.storageGlobal=texto
  }
}
