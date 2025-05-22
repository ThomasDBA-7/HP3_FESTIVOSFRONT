import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/Festivo';
import { FestivoService } from '../../servicios/festivo.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-festivo',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './festivo.component.html',
  styleUrl: './festivo.component.css'
})
export class FestivoComponent implements OnInit {

  public textoBusqueda: string = "";
  public tipoBusqueda: number = 0;
  public festivos: Festivo[] = [];
  public columnas = [
    { name: "Nombre", prop: "nombre" },
    { name: "Fecha", prop: "fecha" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  constructor(private festivoServicio: FestivoService,
    private dialogoServicio: MatDialog,
    private router:Router
  ){
  
  }
  
  ngOnInit(): void {
    const año = new Date().getFullYear();
    this.calcular(año);
  }
  

  public buscar() {
    if (this.textoBusqueda.trim() && !isNaN(Number(this.textoBusqueda))) {
     
      const año = Number(this.textoBusqueda);
      this.calcular(año);
    } else {
     
      window.alert("Por favor ingrese un año válido para calcular los festivos.");
    }
  }
  

  public escoger(event: any) {

  }

  public calcular(año: number) {
    this.festivoServicio.calcular(año).subscribe({
      next: (respuesta) => {
        this.festivos = respuesta;
        this.festivos = respuesta.map((item) => ({
          ...item,
          fecha: `${año}-${item.mes < 10 ? '0' : ''}${item.mes}-${item.dia < 10 ? '0' : ''}${item.dia}`
        }));
      },
      error: (error) => {
        window.alert('Error al calcular los festivos: ' + error.message);
      }
    });
  }
  
  public validarFestivo() {
    if (this.textoBusqueda) {
      const fechaSeleccionada = new Date(this.textoBusqueda);
      const año = fechaSeleccionada.getFullYear();
      const mes = fechaSeleccionada.getMonth() + 1; 
      const dia = fechaSeleccionada.getDate();
  
      this.calcular(año); 
  
  
      const esFestivo = this.festivos.some((item) => 
        item.dia === dia && item.mes === mes
      );
  
      if (esFestivo) {
        window.alert("¡La fecha seleccionada es un festivo!");
      } else {
        window.alert("La fecha seleccionada NO es festivo.");
      }
    } else {
      window.alert("Por favor, selecciona una fecha.");
    }
  }
  irAInicio() {
    this.router.navigate(['/inicio']);
}}
