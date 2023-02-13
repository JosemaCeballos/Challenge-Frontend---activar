import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CharacterModelResponse } from "../models/character";

@Injectable()

export class CharacterService {

    constructor(
        private _http: HttpClient
    ) { }

    getCharacters(page: number) {
        return this._http
            .get<CharacterModelResponse>(`https://swapi.dev/api/people/?page=${page}`)
    }
}