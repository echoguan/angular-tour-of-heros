import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes = [
      { id: 11, name: 'Suranne Jones' },
      { id: 12, name: 'Sophie Rundle' },
      { id: 13, name: 'Anne Lister' },
      { id: 14, name: 'Ann Walker' },
      { id: 15, name: 'Cate Blanchett' },
      { id: 16, name: 'Rooney Mara' },
      { id: 17, name: 'Echo' },
    ];
    return heroes;
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map(hero => hero.id)) + 1
      : 11;
  }
}
