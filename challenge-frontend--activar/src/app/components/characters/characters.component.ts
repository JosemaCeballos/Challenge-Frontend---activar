import { Component, OnInit } from '@angular/core';
import { CharacterModel } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [CharacterService]
})

export class CharactersComponent implements OnInit {
  public characters: CharacterModel[] = []
  public page: number = 0
  public search: string = ''

  constructor(
    private _characterService: CharacterService
  ) { }

  ngOnInit(): void {
    for (let i = 1; i <= 9; i++) {
      this._characterService.getCharacters(i).subscribe(
        response => {
          for (let j = 0; j < response.results.length; j++) {
            this.characters.push(response.results[j])
            this.characters.sort(function (a, b) {
              if (a.url > b.url) return 1;
              if (a.url < b.url) return -1;
              return 0;
            })
          }
        }
      )
    }
  }

  nextPage() {
    this.page += 10
  }

  prevPage() {
    if (this.page > 0) this.page -= 10;
  }

  onSearch(search: string) {
    this.page = 0
    this.search = search
  }
}
