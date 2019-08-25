import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from './pokemon.class';
@Pipe({
  name: 'checklove'
})
export class CheckLovePipe implements PipeTransform {
  private itemsInMyPoke: Pokemon[] = [];
  transform(id: any): any {
    const favpokemon = JSON.parse(localStorage.getItem('favpokemon'));
      this.itemsInMyPoke = favpokemon;
      const getdata: number = this.itemsInMyPoke.findIndex(o => o.id === id);
      
      if (getdata < 0){
        return false;
      } else {
        return true;
      }
   }
}