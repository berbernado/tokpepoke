import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from './pokemon.class';
@Pipe({
  name: 'getnickname'
})
export class GetNickNamePipe implements PipeTransform {
  
  transform(id: any): any {
    
    if(localStorage.getItem('catchpokemon') != "" && localStorage.getItem('catchpokemon') != null){
      let itemsCatchPoke: Pokemon[] = [];
      itemsCatchPoke = JSON.parse(localStorage.getItem('catchpokemon'));

      console.log(itemsCatchPoke);
      const getnick = itemsCatchPoke.find(x => x.id === id);

      if (getnick === undefined || getnick === null){
        return '';
      } else {
        return getnick.nickname;
      }
    } else {
      return '';
    }
    
  }
}