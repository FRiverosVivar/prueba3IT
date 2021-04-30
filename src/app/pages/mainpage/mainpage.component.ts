import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { MatDialog} from '@angular/material/dialog';
import { ModalDetalleDivisaComponent } from '../mainpage/modalDetalleDivisa/modal-detalle-divisa.component';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  divisas: any
  
  constructor(
    private rest: RestService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    let sub = this.rest.getInitialData()
    this.divisas = []
    sub.subscribe((data: any) => {
      for (let divisasObj of Object.keys(data)){
        if(data[divisasObj].nombre == undefined)continue;

        let subFechas = this.rest.getValores(data[divisasObj].codigo)
        let fechas: any[] = []
        subFechas.subscribe((res:any)=>{
          let serie = res['serie']
          serie.forEach((f:any)=>{
            if(fechas.length < 10)
              fechas.push(f)
          })
        })
        let moneda = {
          nombre: data[divisasObj].nombre,
          unidad: data[divisasObj].unidad_medida,
          valor: data[divisasObj].valor,
          codigo: data[divisasObj].codigo,
          fecha: data[divisasObj].fecha,
          fechas: fechas
        }
        console.log(moneda.fechas)
        this.divisas.push(moneda)
      }
      console.log(this.divisas)
    })
  }
  ultimosValores(divisa:any){

  }
  detalleDivisa(divisa:any){
    const dialogRef = this.dialog.open(ModalDetalleDivisaComponent, {
      width: '250px',
      data: {divisa: divisa}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ');
    });
  }
}
