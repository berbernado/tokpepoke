import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from './pokemon.class';
@Pipe({
  name: 'checkcatch'
})
export class CheckCatchPipe implements PipeTransform {
  private itemsCatchPoke: Pokemon[] = [];
  transform(id: any): any {
    if(localStorage.getItem('catchpokemon') != "" && localStorage.getItem('catchpokemon') != null){
      const favpokemon = JSON.parse(localStorage.getItem('catchpokemon'));
      this.itemsCatchPoke = favpokemon;
      const getdata: number = this.itemsCatchPoke.findIndex(o => o.id === id);
        
      if (getdata < 0){
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
    
  }
}