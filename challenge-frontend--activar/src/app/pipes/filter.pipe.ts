import { Pipe, PipeTransform } from '@angular/core';
import { CharacterModel } from '../models/character';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(characters: CharacterModel[], page: number = 0, search: string = ''): CharacterModel[] {

    if (search.length === 0) return characters.slice(page, page + 10)

    const filteredChar = characters.filter((char) => { return (char.name.toLowerCase().indexOf(search.toLowerCase()) > -1) })

    return filteredChar.slice(page, page + 10)
  }
}
