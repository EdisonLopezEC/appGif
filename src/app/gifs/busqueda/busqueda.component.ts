import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  
  valorBusqueda: string = '';
  
  constructor( private gifService: GifsService ) {}

  buscar(){
    this.gifService.buscarGifs(this.valorBusqueda);
    this.valorBusqueda='';
  }
  
}
