import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioLocalPrototipoService {

  private habitaciones =[  
{

  id: 0,
  nombre: "Habitacion ejectuvia",
  imageUrl: "assets/hab-04-6.webp",
  descripcion: "es una habitacion ",
  availability: [  {  
    start: "2024-04-28", end: "2029-08-01"

  }


  ]


},

  ]

  constructor() { }

  getAvailableRooms(startDate: string, endDate: string): Observable<any> {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const availableRooms = this.habitaciones.filter(habitaciones => 
      habitaciones.availability.some(period => 
        new Date(period.start) <= end && new Date(period.end) >= start
      )
    );
    return of(availableRooms);
  }
}


// es de prueba para el prototipo este servicio busca en las fechas de los botones del home en el arreglo 
// las habitaciones disponibles cambiar despues por http real examen 