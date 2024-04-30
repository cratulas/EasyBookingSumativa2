import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.page.html',
  styleUrls: ['./login2.page.scss'],
})
export class Login2Page {
  user = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  errorMessage: string = '';


login() {
  this.authService.login(this.user.email, this.user.password).subscribe(
    success => {
      console.log('Login exitoso');
      this.router.navigateByUrl('/dashboard');
    },
    error => {
      console.error('Error en login', error);
      this.errorMessage = 'Error al iniciar sesión. Verifica tus credenciales.';
    }
  );
}

register() { this.router.navigateByUrl('/register');
  // no cambiar las rutas estan 
    // terminar esta wea mas rato falta la ruta de la pagina del registro y la base deatos 
  }

  intranet(){



  }

}

