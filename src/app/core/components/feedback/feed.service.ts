import { Injectable } from "@angular/core"
import { Feed } from "./feed"

@Injectable({
  providedIn: 'root'
})
export class FeedService{

  retrieveAll(): Feed[] {
    return FEED;
  }

}

var FEED: Feed[] = [
  {
    photoUrl: './assets/images/regina.jpg',
    name: 'Regina C.',
    rating: 5,
    commentary: 'Muita variedade de cores e tamanhos, enlouquecedor essa loja!'
  },
  {
    photoUrl: './assets/images/isadora.jpg',
    name: 'Isadora L.',
    rating: 4.5,
    commentary: 'Instalei lá em casa, muito boa a qualidade. Recomendo!'
  },
  {
    photoUrl: './assets/images/matheus.jpg',
    name: 'Matheus A.',
    rating: 4,
    commentary: 'Os pisos são excelentes e com um bom custo e benefício.'
  }
]
