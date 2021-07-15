import { Injectable } from "@angular/core"
import { Qualities } from "./qualities"


@Injectable({
  providedIn: 'root'
})
export class QualitiesServices{

  retrieveAll(): Qualities[] {
    return QUALITIES;
  }

}

var QUALITIES: Qualities[] = [
  {
    iconUrl: '/assets/images/bx-medal.svg',
    description: 'Mais de 50 anos de mercado'
  },
  {
    iconUrl: '/assets/images/bx-user.svg',
    description: 'Atendimento personalizado'
  },
  {
    iconUrl: '/assets/images/bx-customize.svg',
    description: 'Piso para todos os gostos'
  },
  {
    iconUrl: '/assets/images/bx-box.svg',
    description: 'Entrega em todo o Brasil'
  }
  ]
