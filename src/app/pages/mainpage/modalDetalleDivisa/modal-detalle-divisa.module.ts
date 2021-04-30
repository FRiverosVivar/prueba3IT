
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxEchartsModule } from 'ngx-echarts';

import { ModalDetalleDivisaComponent } from '../modalDetalleDivisa/modal-detalle-divisa.component';

@NgModule({
  declarations: [
  ],
  imports: [ 
    NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
    }),
],
  providers: [],
  bootstrap: [ModalDetalleDivisaComponent]
})
export class ModalDetalleDivisaModule { }