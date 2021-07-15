import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FeedComponent } from './components/feedback/feed.component';
import { NgModule } from "@angular/core";
import { HeadLineComponent } from './components/headline/headline.component';
import { QualitiesComponent } from './components/qualities/qualities.component';
import { StarModule } from '../shared/components/star/star.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Error404Component } from './components/error/error404.component';

@NgModule({
  declarations: [
    FeedComponent,
    FormComponent,
    HeadLineComponent,
    QualitiesComponent
  ],
  exports:[
    FeedComponent,
    FormComponent,
    HeadLineComponent,
    QualitiesComponent
  ],
  imports:[
    StarModule,
    FormsModule,
    CommonModule
  ]
})
export class CoreModule{

}
