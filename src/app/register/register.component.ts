import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface datos{
  Tipo_Documento: String,
  Documento: String,
  Username: String,
  Email: String,
  Password: String
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  storageGlobal: String = ''
  campo='';

  public datitos: datos[] = [];

  createUser(){
    const Tipo_Documento = (document.getElementById("Tipo_Documento") as HTMLSelectElement).value
    const Documento = (document.getElementById("Documento") as HTMLSelectElement).value
    const Username = (document.getElementById("Username") as HTMLSelectElement).value
    const Email = (document.getElementById("Email") as HTMLSelectElement).value
    const Password = (document.getElementById("Password") as HTMLSelectElement).value

    const newData = {
      Tipo_Documento: Tipo_Documento,
      Documento: Documento,
      Username: Username,
      Email: Email,
      Password: Password
    }
    this.datitos.push(newData)

  }

  


  
  

  constructor(public router: Router){
    
  }

  saveData(){
    let campito = this.campo;
    localStorage.setItem('campo', campito);
  }

  getstoregeGlobal(){
    let texto = JSON.stringify( localStorage.getItem('campo'))
    console.log(texto)
    //this.storageGlobal=texto
  }
  

}
