import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSliderModule } from '@angular/material/slider'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card'
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatExpansionModule} from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { ChartsModule } from 'ng2-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxEchartsModule } from 'ngx-echarts';
import { ModalDetalleDivisaComponent } from './pages/mainpage/modalDetalleDivisa/modal-detalle-divisa.component';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MainpageComponent,
    ModalDetalleDivisaComponent
  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    ChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
