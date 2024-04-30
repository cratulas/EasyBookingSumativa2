import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicioLocalPrototipoService } from 'src/app/servicio-local-prototipo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  startDate = new FormControl();
  endDate = new FormControl();
  habitaciones: any[] = [];
  habitacionesDisponibles = false;
  carrito: any[] = [];

  constructor(private servicioLocal: ServicioLocalPrototipoService) { }

  ngOnInit() {
  }

  searchRooms() {
    const start = this.startDate.value;
    const end = this.endDate.value;
    console.log('Buscando habitaciones desde', start, 'hasta', end);
    

    this.servicioLocal.getAvailableRooms(start, end).subscribe(
      habitaciones => {
        console.log('Habitaciones disponibles:', habitaciones);
        this.habitaciones = habitaciones;
        this.habitacionesDisponibles = this.habitaciones.length > 0;
       },
      error => {
        console.error('Error al buscar habitaciones:', error);
      }
    );


}

agregarAlCarrito(habitacion: any) {
  this.carrito.push(habitacion);
  console.log('Carrito:', this.carrito);
}

eliminarDelCarrito(habitacion: any) {
  const index = this.carrito.indexOf(habitacion);
  if (index > -1) {
    this.carrito.splice(index, 1);
  }
  console.log('Carrito:', this.carrito);
}





}
