import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
    selector: 'modal-detalle-divisa',
    templateUrl: 'modal-detalle-divisa.component.html',
    styleUrls: ['modal-detalle-divisa.scss']
})
export class ModalDetalleDivisaComponent {
    divisa:any
    isLoading = false;
    options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: 'white'
          }
        }
      },
      legend: {
        data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],

      yAxis: [
        {
          min: 0,
          type: 'value',
        }
      ],
      series: [
        {
          name: 'X-1',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'X-2',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'X-3',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'X-4',
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'X-5',
          type: 'line',
          stack: 'counts',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: { normal: {} },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    constructor(
      public dialogRef: MatDialogRef<ModalDetalleDivisaComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
      ) {
        this.divisa = this.data.divisa
        let i = 0;
        this.options.legend.data = []

        this.options.legend.data.unshift(this.divisa.nombre)
        this.options.series = []
        
        //this.options.xAxis[0].data = []
        let valores:any = []
        let prom:any = 0;
        this.divisa.fechas.forEach((f:any)=>{
          
          valores.unshift(f.valor)
          prom += f.valor
          console.log(this.options.legend.data)
          let fecha = f.fecha.split('T')[0]
          console.log(fecha)
          console.log(fecha.split('-')[1])
          console.log(fecha.split('-')[2])
          this.options.xAxis[0].data.unshift(fecha.split('-')[1]+"/"+fecha.split('-')[2])
          i++
        })
        console.log(prom)
        prom = prom/10;
        
        let resta = prom - valores[0]
        console.log(prom)
        console.log(valores[0])
        console.log(resta + " res "+(prom - resta))
        this.options.yAxis[0].min = parseInt((prom - resta).toFixed())
        let serieObj = {
          name: this.divisa.nombre,
          type: 'line',
          stack: 'counts',
          areaStyle: { normal: {} },
          data: valores
        }
        this.options.series.push(serieObj)
        
      }
  
    onNoClick(): void {
      console.log(this.data)
      this.dialogRef.close();
    }

    
  
}