import { Component, OnInit } from "@angular/core";
import { Qualities } from "./qualities";
import { QualitiesServices } from "./qualities.service";

@Component({
  selector: 'app-qualities',
  templateUrl:'./qualities.component.html',
  styleUrls:['./qualities.component.css'],
})
export class QualitiesComponent implements OnInit{

  qualities: Qualities[] = [];

  constructor(private qualitiesService: QualitiesServices){ }

  ngOnInit(): void {
    this.qualities = this.qualitiesService.retrieveAll();
  };

}
