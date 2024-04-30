import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  
  user = {
    email: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  register() {
    this.authService.register(this.user.email, this.user.password).subscribe(
      success => {
        console.log('Registro exitoso');
        this.router.navigateByUrl('/dashboard'); 
      },
      error => {
        console.error('Error en el registro', error);
        this.errorMessage = 'Error al registrar. Verifica los datos ingresados.';
      }
    );
  }

}
