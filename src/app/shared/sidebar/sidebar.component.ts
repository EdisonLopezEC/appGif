import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  get historial(){
    return this.gifService.historial;
  }

  constructor(private gifService: GifsService) { }

  buscarlos(item: string){
      this.gifService.buscarGifs( item );
      // console.log(item);
  }
  imprimir(){
    console.log("si imprime")
  }
}