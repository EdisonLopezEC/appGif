import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey:     string = 'NcXN9ZYkmBkXq9AA8hgghiRU8SrXKhrs'
  private _historial: string[] = [];
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  public resultados: Gif[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient ){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; 
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || []; 

  }

   buscarGifs( query: string){
    query = query.trim().toLowerCase();
    if(query.trim().length == 0){return;}
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      console.log(this._historial);
      localStorage.setItem('historial',JSON.stringify(this.historial));
    }
    
    const params = new HttpParams().set('api_key', this.apikey).set('limit','10').set('q',query);

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
    .subscribe( (respuesta: SearchGifsResponse) =>{
      console.log(respuesta.data);
      this.resultados = respuesta.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    })
    
  }

 


}
