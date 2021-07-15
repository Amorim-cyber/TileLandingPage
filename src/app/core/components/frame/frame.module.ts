import { CoreModule } from './../../core.module';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { FrameComponent } from "./frame.component";
import { Error404Component } from '../error/error404.component';

@NgModule({
  declarations:[
    FrameComponent
  ],
  exports:[
    FrameComponent
  ],
  imports:[
    CoreModule,
    RouterModule.forChild([
      {
        path: 'PROMOÇÃO', component: FrameComponent
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ]
})
export class FrameModule{

}
